import React from 'react';

function Options(props) {
  console.log(props)


  function optionsMap(data) {
    return (
      <div key={data} className='options'>
        <button className='btn btn-option'>{data}</button>
      </div>
    )
  }
  return (
    <>
      {props.questions.map(optionsMap)}
    </>
  )
}

export default Options;