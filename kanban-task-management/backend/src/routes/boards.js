const express = require('express');
const protect = require('../middleware/auth');
const { listBoards, createBoard, updateBoard } = require('../controllers/boardController');

const router = express.Router();

router.get('/:projectId', protect, listBoards);
router.post('/', protect, createBoard);
router.put('/:id', protect, updateBoard);

module.exports = router;
