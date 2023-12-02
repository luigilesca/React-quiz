import React from 'react';

function Progress(props) {
  return (
    <header className='progress'>
      <progress max={props.numQuestions} value={props.index + Number((props.answer !== null))} ></progress>
      <p>Question <strong>{props.index + 1}</strong> / {props.numQuestions}</p>

      <p><strong>{props.points}</strong> / {props.maxPossiblePoints}</p>
    </header>
  )
}

export default Progress;