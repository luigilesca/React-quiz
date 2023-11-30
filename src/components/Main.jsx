import React from 'react';

function Main(prop) {
  return (
    <main className='main'>
      {prop.children}
    </main>
  )
}

export default Main;