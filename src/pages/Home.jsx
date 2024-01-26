import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1><Link to="/feedback">Home</Link></h1>
      <h1><Link to="/about">About</Link></h1>
    </>
  );
};

export default Home;
