import React, { useEffect, useState } from 'react'

function GetList({ getItem }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItem());
        console.log('number change')
    }, [getItem]);
  return (
    <div>
          {items.map((item) => {
          return <div>{item}</div>
      })}
    </div>
  )
}

export default GetList;
