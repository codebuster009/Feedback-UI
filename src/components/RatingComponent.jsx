import React from 'react'
import { useState } from 'react'
const RatingComponent = ({num}) => {
    const [selected , setSelected] = useState(1)
    console.log(selected)
  return (
    <div className='rating' onClick={()=> {setSelected(num)}}>
    {num}
    </div>
  )
}

export default RatingComponent;
