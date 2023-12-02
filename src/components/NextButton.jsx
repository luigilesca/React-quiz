import React from 'react';

function NextButton(props) {
  if (props.answer === null) return null;

  if (props.index < props.numQuestions - 1)
    return (
      <button className='btn btn-ui'
        onClick={() => props.dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    )

  if (props.index === props.numQuestions - 1)
    return (
      <button className='btn btn-ui'
        onClick={() => props.dispatch({ type: "finish" })}>
        Finish
      </button>
    )
}

export default NextButton;