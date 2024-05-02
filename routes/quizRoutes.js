const express = require('express');
const router = express.Router();
const Question = require('../models/Question');


router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.post('/submit', async (req, res) => {
  const { answers } = req.body;
  try {
    const results = await Promise.all(
      answers.map(async ({ questionId, answer }) => {
        const question = await Question.findById(questionId);
        return {
          questionId,
          correct: question.correctOption === answer
        };
      })
    );
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
