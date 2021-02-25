import React from 'react'

function Welcome({ name, age }){
  if(age < 21) {
    return <p>You must be 21 or older to enter.</p>
  }
  return <h1>Welcome {name || 'Guest'}!</h1>
}

export default Welcome