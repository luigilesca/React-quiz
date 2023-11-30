import React from 'react';

import Options from './Options';

function Question(props) {

  return (
    <div>
      <h4>{props.question.question}</h4>
      <Options questions={props.question} dispatch={props.dispatch} answer={props.answer} />
    </div>
  )
}

export default Question;