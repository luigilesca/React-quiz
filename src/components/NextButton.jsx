import React from 'react';

function NextButton(props) {
  if (props.answer === null) return null;

  return (
    <button className='btn btn-ui'
      onClick={() => props.dispatch({ type: "nextQuestion" })}>
      Next
    </button>
  )
}

export default NextButton;