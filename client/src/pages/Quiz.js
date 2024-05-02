import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get('http://localhost:5000/api/quiz/questions');
      setQuestions(response.data);
      const initialAnswers = {};
      response.data.forEach(question => {
        initialAnswers[question._id] = '';
      });
      setAnswers(initialAnswers);
    };
    fetchQuestions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const answersArray = Object.entries(answers).map(([questionId, answer]) => ({ questionId, answer }));

    if (answersArray.some(({ answer }) => !answer)) {
      return alert('Please answer all questions before submitting the quiz.');
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/quiz/submit', { answers: answersArray });
      navigate('/results', { state: { results: response.data } });
    } catch (error) {
      console.error(error);
      alert('Error submitting quiz. Please try again later.');
    }
  };
  
  

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div>
      <h2>Quiz</h2>
      <form onSubmit={handleSubmit}>
        {questions.map(question => (
          <div key={question._id}>
            <p>{question.questionText}</p>
            <div>
              {['A', 'B', 'C', 'D'].map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name={question._id}
                    value={option}
                    checked={answers[question._id] === option}
                    onChange={() => handleAnswerChange(question._id, option)}
                  />
                  {question['option' + option]}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
}

export default Quiz;
