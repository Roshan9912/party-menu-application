const Board = require('../models/Board');
const { getProjectIfMember, getBoardIfProjectMember } = require('../utils/access');

exports.listBoards = async (req, res) => {
  try {
    const project = await getProjectIfMember(req.user._id, req.params.projectId);
    if (!project) return res.status(403).json({ success: false, message: 'Project access denied' });

    const boards = await Board.find({ project: project._id }).sort('position');
    res.json({ success: true, boards });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to fetch boards' });
  }
};

exports.createBoard = async (req, res) => {
  try {
    const project = await getProjectIfMember(req.user._id, req.body.project);
    if (!project) return res.status(403).json({ success: false, message: 'Project access denied' });

    const highestPosition = await Board.findOne({ project: project._id }).sort('-position');
    const board = await Board.create({
      project: project._id,
      title: req.body.title,
      position: highestPosition ? highestPosition.position + 1 : 0,
    });

    res.status(201).json({ success: true, board });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to create board' });
  }
};

exports.updateBoard = async (req, res) => {
  try {
    const board = await getBoardIfProjectMember(req.user._id, req.params.id);
    if (!board) return res.status(403).json({ success: false, message: 'Board access denied' });

    board.title = req.body.title ?? board.title;
    if (typeof req.body.position === 'number') board.position = req.body.position;
    await board.save();

    res.json({ success: true, board });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to update board' });
  }
};
