import React, { useState } from 'react';

const RatingComponent = ({select}) => {
  const [selected, setSelected] = useState(1);

  const handleClick = (e) => {
    console.log(e.currentTarget.value);
    setSelected(Number(e.currentTarget.value));
    select(Number(e.currentTarget.value) + 1)
  };

  return (
    <>
      <ul>
        {[...Array(11).keys()].map((i) => (
          <li key={i}>
            <input
              type="radio"
              name="rating"
              id={`num${i + 1}`}
              value={i} 
              checked={selected === i}
              onChange={handleClick}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
      <div>Rating Select</div>
    </>
  );
};

export default RatingComponent;
