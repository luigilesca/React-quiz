import React from 'react';

import Options from './Options';

function Question(props) {

  return (
    <div>
      <h4>{props.question.question}</h4>
      <Options questions={props.question.options} />
    </div>
  )
}

export default Question;