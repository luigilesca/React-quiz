import React from 'react';

function FinishScreen(props) {
  const percentage = (props.points / props.maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 100 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😀";
  if (percentage >= 0 && percentage < 50) emoji = "🧐";
  if (percentage === 0) emoji = "🤦‍♂️";


  return (
    <>
      <p className='result'>
        <span>{emoji}</span> You scored <strong>{props.points}</strong> out of {props.maxPossiblePoints} ({Math.round(percentage)}) %
      </p>
      <p className='highscore'>
        (Highscore: {props.highScore} points)
      </p>

      <button className='btn btn-ui' onClick={() => props.dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  )
}

export default FinishScreen;