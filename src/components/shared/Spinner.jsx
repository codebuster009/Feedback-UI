import React from 'react'
import Spinner from "../shared/Spinner.gif"

const GifSpinner = () => {
  return (
    <img src={Spinner} alt = "Loading..." style = {{width : '100px' , margin : 'auto' , display: 'block' }}/>
  )
}

export default GifSpinner;
