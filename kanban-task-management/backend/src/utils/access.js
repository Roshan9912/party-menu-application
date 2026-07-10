const Project = require('../models/Project');
const Task = require('../models/Task');
const Board = require('../models/Board');

const getProjectIfMember = async (userId, projectId) => {
  if (!projectId) return null;
  const project = await Project.findById(projectId).populate('members');
  if (!project) return null;
  const memberIds = project.members.map((member) => member._id.toString());
  if (!memberIds.includes(userId.toString())) return null;
  return project;
};

const getTaskIfMember = async (userId, taskId) => {
  const task = await Task.findById(taskId);
  if (!task) return null;
  const project = await getProjectIfMember(userId, task.project);
  if (!project) return null;
  return task;
};

const getBoardIfProjectMember = async (userId, boardId) => {
  const board = await Board.findById(boardId).populate({ path: 'project', populate: 'members' });
  if (!board || !board.project) return null;
  const memberIds = board.project.members.map((member) => member._id.toString());
  if (!memberIds.includes(userId.toString())) return null;
  return board;
};

module.exports = {
  getProjectIfMember,
  getTaskIfMember,
  getBoardIfProjectMember,
};
