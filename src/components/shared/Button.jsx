import React from 'react';

const Button = ({ type, children, version , disabled}) => {
    console.log(type)
    console.log(version)
    console.log(children)
    console.log(disabled)
  return (
    <button type={type}  className={`btn btn-${version}`} disabled = {disabled}>
{children}
</button>
  );
};

export default Button;