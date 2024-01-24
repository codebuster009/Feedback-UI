import React, { useState } from 'react';

const RatingComponent = () => {
  const [selected, setSelected] = useState(1);

  const handleRatingChange = (e) => {
    setSelected(Number(e.target.value));
  };

  return (
    <>
      <ul>
      {[...Array(11).keys()].map((i)=>(
        <li key={i}>
        <input 
        type="radio"
        name = "rating"
        id = {`num${i}`}
        value={i}
        checked = {selected === selected}
         />
         <label htmlFor={`num${i}`}>{i}</label>
        </li>
      ))}
      </ul>
      <div>Rating Select</div>
    </>
  );
};

export default RatingComponent;
