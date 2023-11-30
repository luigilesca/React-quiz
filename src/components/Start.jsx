import React from 'react';

function Start(props) {

  function clickHandler() {
    props.dispatch({ type: "start" });
  }


  return (
    <div className='start'>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{props.numQuestions} questions to test your React mastery</h3>
      <button className='btn btn-ui' onClick={clickHandler}>Start!</button>
    </div>
  )
}

export default Start;