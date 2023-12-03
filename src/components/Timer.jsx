import React, { useEffect } from 'react';

function Timer(props) {
  const mins = Math.floor(props.secondsRemaining / 60);
  const seconds = props.secondsRemaining % 60;


  useEffect(() => {
    console.log("tick")
    const intervall = setInterval(() => {
      props.dispatch({ type: "tick" });
    }, 1000);

    return (() => {
      clearInterval(intervall);
    })
  }, [props.dispatch])

  return (
    <div className='timer'>
      {mins < 10 && "0"}
      {mins}
      :{seconds < 10 ? ("0" + seconds) : seconds}
    </div>
  )
}

export default Timer;