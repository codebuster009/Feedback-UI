import React from 'react';

const Button = ({ type, children, version }) => {
    console.log(type)
    console.log(version)
    console.log(children)
  return (
    <button type={type}  className={`btn btn-${version}`}>
{children}
</button>
  );
};

export default Button;