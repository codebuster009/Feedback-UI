import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Typography variant='h4'sx={{border : "1px solid red", lineHeight : 1}}><Link to="/feedback">Home</Link></Typography>
      <Typography variant='h4'sx={{border : "1px solid red"}}><Link to="/about">About</Link></Typography>
    </>
  );
};

export default Home;
