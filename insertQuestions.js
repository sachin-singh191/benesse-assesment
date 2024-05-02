require('dotenv').config();
const connectDB = require('./db');  // Ensure path is correct
const Question = require('./models/Question');  // Ensure path is correct

connectDB();

const sampleQuestions = [
  {
    questionText: "What is the capital of France?",
    optionA: "New York",
    optionB: "London",
    optionC: "Paris",
    optionD: "Berlin",
    correctOption: "C"
  },
  {
    questionText: "What is 2 + 2?",
    optionA: "3",
    optionB: "4",
    optionC: "5",
    optionD: "6",
    correctOption: "B"
  },
  {
    questionText: "Which language is used to style web pages?",
    optionA: "HTML",
    optionB: "jQuery",
    optionC: "CSS",
    optionD: "XML",
    correctOption: "C"
  }
];

const insertQuestions = async () => {
  try {
    await Question.deleteMany({});  // Optional: Clears all existing entries
    await Question.insertMany(sampleQuestions);
    console.log('Questions inserted successfully');
    process.exit();
  } catch (error) {
    console.error('Failed to insert questions:', error);
    process.exit(1);
  }
};

insertQuestions();
