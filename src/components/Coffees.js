import React, { useState, useEffect } from 'react' 
import { Button } from 'antd'

function Coffees(){
  const [coffeeList, setCoffeeList] = useState([])
  const [temperature, setTemperature] = useState('hot')
  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/'+temperature)
      .then(response => response.json())
      .then(data => {
        setCoffeeList(data)
      })
      .catch(error => console.log('Got Error: ', error))
  }, [temperature])
  // return buttons...
  // then List OR "loading..."
  return (
    <section>
      <h2>Coffees</h2>
      <Button type="danger" onClick={() => setTemperature('hot')}>Hot</Button>
      <Button type="primary" onClick={() => setTemperature('iced')}>Cold</Button>
      {!coffeeList
        ? <p>Loading...</p>
        : coffeeList.map(coffee => {
          return <p key={coffee.id}>{coffee.title}</p>
        })
      }
    </section>
  )
}

export default Coffees