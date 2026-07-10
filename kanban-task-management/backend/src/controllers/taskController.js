const Task = require('../models/Task');
const Board = require('../models/Board');
const Comment = require('../models/Comment');
const { getProjectIfMember, getTaskIfMember, getBoardIfProjectMember } = require('../utils/access');

exports.listTasks = async (req, res) => {
  try {
    const project = await getProjectIfMember(req.user._id, req.query.projectId);
    if (!project) return res.status(403).json({ success: false, message: 'Access denied' });

    const tasks = await Task.find({ project: project._id, deletedAt: null }).populate('assignee', 'name email').sort({ order: 1 });
    res.json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to fetch tasks' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const board = await getBoardIfProjectMember(req.user._id, req.body.board);
    if (!board) return res.status(403).json({ success: false, message: 'Board access denied' });

    const task = await Task.create({
      project: board.project._id,
      board: board._id,
      title: req.body.title,
      description: req.body.description || '',
      priority: req.body.priority || 'medium',
      labels: req.body.labels || [],
      dueDate: req.body.dueDate || null,
      assignee: req.body.assignee || null,
      createdBy: req.user._id,
      updatedBy: req.user._id,
      order: req.body.order || 0,
    });

    const populatedTask = await task.populate('assignee', 'name email');
    res.status(201).json({ success: true, task: populatedTask });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to create task' });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await getTaskIfMember(req.user._id, req.params.id);
    if (!task) return res.status(403).json({ success: false, message: 'Access denied' });

    const populatedTask = await task.populate('assignee', 'name email');
    res.json({ success: true, task: populatedTask });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to fetch task' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await getTaskIfMember(req.user._id, req.params.id);
    if (!task) return res.status(403).json({ success: false, message: 'Access denied' });

    if (req.body.board) {
      const board = await getBoardIfProjectMember(req.user._id, req.body.board);
      if (!board || board.project._id.toString() !== task.project.toString()) {
        return res.status(403).json({ success: false, message: 'Invalid board assignment' });
      }
      task.board = board._id;
    }

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    task.priority = req.body.priority ?? task.priority;
    task.labels = req.body.labels ?? task.labels;
    task.dueDate = req.body.dueDate ?? task.dueDate;
    task.assignee = req.body.assignee ?? task.assignee;
    task.order = typeof req.body.order === 'number' ? req.body.order : task.order;
    task.updatedBy = req.user._id;

    await task.save();
    const populatedTask = await task.populate('assignee', 'name email');
    res.json({ success: true, task: populatedTask });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to update task' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await getTaskIfMember(req.user._id, req.params.id);
    if (!task) return res.status(403).json({ success: false, message: 'Access denied' });

    task.deletedAt = new Date();
    task.updatedBy = req.user._id;
    await task.save();
    res.json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to delete task' });
  }
};

exports.getComments = async (req, res) => {
  try {
    const task = await getTaskIfMember(req.user._id, req.params.taskId);
    if (!task) return res.status(403).json({ success: false, message: 'Access denied' });

    const comments = await Comment.find({ task: task._id }).populate('user', 'name email').sort({ createdAt: 1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to fetch comments' });
  }
};

exports.createComment = async (req, res) => {
  try {
    const task = await getTaskIfMember(req.user._id, req.body.task);
    if (!task) return res.status(403).json({ success: false, message: 'Access denied' });

    const comment = await Comment.create({ task: task._id, user: req.user._id, message: req.body.message });
    const populated = await comment.populate('user', 'name email');
    res.status(201).json({ success: true, comment: populated });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to create comment' });
  }
};
