import React, { useState } from "react";
import "./Quiz.css";

/*
1. track state of quiz completion
2. track score
3. track question
*/

function Quiz() {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const quizQuestions = [
    {
      question: "Who is the president of South Africa?",
      options: [
        "Donald Trump",
        "Cyril Ramaphosa",
        "Vladimir Putin",
        "Kim Jong Un",
      ],
      answer: "Cyril Ramaphosa",
    },
    {
      question: "How many Jackson brothers are there?",
      options: ["2", "5", "7", "6"],
      answer: "6",
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Mount Everest", "Kilamanjaro", "Fiji", "Drakensburg"],
      answer: "Mount Everest",
    },
  ];

  function handleAnswer(selectedAnswer) {
    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
      setCurrentScore(currentScore + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
  }

  function restartQuiz() {
    setCurrentScore(0);
    setCurrentQuestion(0);
    setQuizComplete(false);
  }

  return (
    <div>
      <h1>Quiz Game</h1>
      {quizComplete ? (
        <div>
          <h2>Your Score: {currentScore} </h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h4>{quizQuestions[currentQuestion].question}</h4>
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              onClick={(e) => handleAnswer(e.target.innerHTML)}
              key={index}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;