const Project = require('../models/Project');
const Board = require('../models/Board');
const Task = require('../models/Task');

exports.listProjects = async (req, res) => {
  try {
    const projects = await Project.find({ members: req.user._id }).populate('owner', 'name email').populate('members', 'name email');
    res.json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to fetch projects' });
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      title: req.body.title,
      description: req.body.description || '',
      owner: req.user._id,
      members: [req.user._id],
    });

    const defaultBoards = [
      { title: 'Backlog', position: 0 },
      { title: 'Todo', position: 1 },
      { title: 'In Progress', position: 2 },
      { title: 'Review', position: 3 },
      { title: 'Done', position: 4 },
    ];

    const boards = await Promise.all(defaultBoards.map((board, index) => Board.create({ project: project._id, title: board.title, position: index })));

    res.status(201).json({ success: true, project, boards });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to create project' });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('owner', 'name email').populate('members', 'name email');
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    const memberIds = project.members.map((member) => member._id.toString());
    if (!memberIds.includes(req.user._id.toString())) return res.status(403).json({ success: false, message: 'Access denied' });

    const boards = await Board.find({ project: project._id }).sort('position');
    const tasks = await Task.find({ project: project._id, deletedAt: null }).populate('assignee', 'name email');
    res.json({ success: true, project, boards, tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to fetch project' });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    if (!project.members.map((id) => id.toString()).includes(req.user._id.toString())) return res.status(403).json({ success: false, message: 'Access denied' });

    project.title = req.body.title ?? project.title;
    project.description = req.body.description ?? project.description;
    if (['active', 'archived'].includes(req.body.status)) project.status = req.body.status;
    if (Array.isArray(req.body.members)) {
      const members = Array.from(new Set([...
        req.body.members.map((id) => id.toString()),
        req.user._id.toString(),
      ]));
      project.members = members;
    }

    await project.save();
    res.json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to update project' });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    if (project.owner.toString() !== req.user._id.toString()) return res.status(403).json({ success: false, message: 'Only the owner can delete a project' });

    await Board.deleteMany({ project: project._id });
    await Task.updateMany({ project: project._id }, { deletedAt: new Date(), updatedBy: req.user._id });
    await project.remove();

    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to delete project' });
  }
};
