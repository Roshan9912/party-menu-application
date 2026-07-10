const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  title: { type: String, required: true, trim: true },
  position: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Board', boardSchema);
