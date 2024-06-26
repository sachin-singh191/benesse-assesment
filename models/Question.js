const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: String,
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  correctOption: String,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
