import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
 
 

import Login from './Login';
import Registration from './Registration';
import Home from './Home';
 
 

const Navbar = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/registration">Register</Button>
        </Toolbar>
      </AppBar>
      <Routes>
      <Route exact path="/"  element={<Home/>} />
      <Route path="/login"   element={<Login/>} />
      <Route path="/registration" element={<Registration/>} />
       </Routes>
    </Router>
  );
};

export default Navbar;
