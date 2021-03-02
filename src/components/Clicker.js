import React, { useState } from 'react'
import { Button } from 'antd'

function Clicker(){
  const [count, setCount] = useState(0)
  return (
    <React.Fragment>
      <h2>You clicked {count} times.</h2>
      <Button primary onClick={() => setCount(count+1)}> +1 </Button>
      <Button danger onClick={() => setCount(count-1)}> -1 </Button>
      <hr/>
    </React.Fragment>
  )
}

export default Clicker