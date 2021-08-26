import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import questions from "./components/Questions";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      alert("Your answer is correct");
      setScore(score +1)
    } else {
      alert("Your answer is wrong")
}

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ height: "100vh" }}
        >
          <div className="bg-info h3 text-white p-4" style={{ borderRadius: "5px" }}>
            You scored {score} out of {questions.length}
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ height: "100vh" }}
        >
            <div>
              
            <h2 className="text-center">RCC Quiz</h2>
            <div
              className="d-flex bg-info text-white p-4"
              style={{ borderRadius: "5px" }}
            >
              <div>
                  <h4 className="text-dark">Question {currentQuestion +1}/{questions.length}</h4>
                <h4 className="mr-3" style={{ maxWidth: "300px" }}>
                  {questions[currentQuestion].questionText}
                </h4>
              </div>
              <div>
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                      className="btn-sm btn-dark mb-1 d-block"
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
