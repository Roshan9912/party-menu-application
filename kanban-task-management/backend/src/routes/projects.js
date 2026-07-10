const express = require('express');
const protect = require('../middleware/auth');
const { listProjects, createProject, getProject, updateProject, deleteProject } = require('../controllers/projectController');

const router = express.Router();

router.get('/', protect, listProjects);
router.post('/', protect, createProject);
router.get('/:id', protect, getProject);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;
