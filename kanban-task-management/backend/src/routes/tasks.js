const express = require('express');
const protect = require('../middleware/auth');
const { listTasks, createTask, updateTask, deleteTask, getComments, createComment } = require('../controllers/taskController');

const router = express.Router();

router.get('/', protect, listTasks);
router.post('/', protect, createTask);
router.post('/comments', protect, createComment);
router.get('/:taskId/comments', protect, getComments);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

module.exports = router;
