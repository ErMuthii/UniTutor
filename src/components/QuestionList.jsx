// QuestionList.jsx
import React, { useEffect, useState } from 'react';
import { Card } from '@nextui-org/react';
import Spinner from './Spinner';
import NavBar from './NavBar';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
    <NavBar />
    <div className="p-4">
      <h2 className="text-2xl mb-4">Questions List</h2>
      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {questions.map(question => (
            <Card key={question.id} className="p-4">
              <h3 className="text-xl font-semibold">{question.title}</h3>
              <p className="mt-2">{question.body}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default QuestionList;
