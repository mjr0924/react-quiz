import React from "react";

const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            key={index}
            disabled={hasAnswered}
            className={`btn btn-option ${index === answer ? "answer" : ""}  ${
              hasAnswered ?
              index === question.correctOption ? "correct" : "wrong" : ""
            }`}
            onClick={() => {
              dispatch({ type: "newAnswer", payload: index });
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
