import React, { useState, useEffect } from 'react' 

function Coffees(){
  const [coffeeList, setCoffeeList] = useState([])
  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => {
        setCoffeeList(data)
      })
      .catch(error => console.log('Got Error: ', error))
  }, [])
  if(!coffeeList){
    return <p>Loading...</p>
  }
  return (
    <section>
      {coffeeList.map(coffee => {
        return <p key={coffee.id}>{coffee.title}</p>
      })}
    </section>
  )
}

export default Coffees