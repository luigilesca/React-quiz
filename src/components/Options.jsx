import React from 'react';

function Options(props) {

  const hasAnswered = props.answer !== null;

  function optionsMap(data, index) {
    return (
      <div key={data} className='options'>
        <button
          className={`btn btn-option ${index === props.answer ? "answer" : ""} ${hasAnswered ? index === props.questions.correctOption ? "correct" : "wrong" : ""}`}
          onClick={() => props.dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}>
          {data}
        </button>
      </div>
    )
  }
  return (
    <>
      {props.questions.options.map(optionsMap)}
    </>
  )
}

export default Options;