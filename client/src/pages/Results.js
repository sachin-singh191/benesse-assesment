import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { results } = location.state;

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={result.questionId}>
            {index === 0 ? 'First' : index === 1 ? 'Second' : 'Third'} Question: {result.correct ? 'Correct' : 'Incorrect'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
