// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Button,
} from '@mui/material';

import logo from '../assets/logo.png';

import { makeStyles } from '@mui/styles';

import {
  Favorite,
  Search,
  Brightness4,
  AccountCircle,
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    color: 'white',
    backgroundColor: '#4caf50',
    marginLeft: theme.spacing(1),
  },
  registerButton: {
    color: 'white',
    backgroundColor: '#4caf50',
    marginLeft: theme.spacing(1),
  },
  searchInput: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '5px',
    paddingLeft: '5px',
    display: 'flex',
    alignItems: 'center',
    height: '35px',
  },
  searchIcon: {
    color: 'gray',
  },
  logoText: {
    fontFamily: 'Roboto',
  },
}));

function Navbar({ onSearchChange, shouldSearchWork, isUserLoggedIn }) {
  const [searchValue, setSearchValue] = useState('');

  const userInformation = localStorage.getItem("userInformation");

  const classes = useStyles();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* <Typography
            variant="h6"
            className={classes.logoText}
            style={{ flexGrow: 1 }}
          >
            Logo
          </Typography> */}
          <img src={logo} style={{ width: '180px' }} />
        </Link>

        <div style={{ flexGrow: 1 }} />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" component={Link} to="/favorites">
            <Badge color="secondary" variant="dot">
              <Favorite />
            </Badge>
          </IconButton>
          {isUserLoggedIn ? (

            <Button
              color="inherit"
              variant="contained"
              onClick={() => navigate("/logout")}
              className={classes.loginButton}
              style={{ backgroundColor: '#4caf50', marginRight: ".5rem" }}
            >
              <span style={{ color: 'white' }}>Logout</span>
            </Button>

          ) : (
            <>
              <Button
                color="inherit"
                variant="contained"
                onClick={() => navigate("/login")}
                className={classes.loginButton}
                style={{ backgroundColor: '#4caf50' }}
              >
                <span style={{ color: 'white' }}>Login</span>
              </Button>
              <Button
                color="inherit"
                variant="contained"
                onClick={() => navigate("/register")}
                className={classes.registerButton}
                style={{
                  backgroundColor: '#4caf50',
                  marginLeft: '5px',
                  marginRight: '10px',
                }}
              >
                <span style={{ color: 'white' }}>Cadastro</span>
              </Button>
            </>
          )}
          { shouldSearchWork && (
            <div className={classes.searchInput}>
              <IconButton className={classes.searchIcon} color="inherit">
                <Search />
              </IconButton>
              <InputBase
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'search' }}
                style={{
                  flex: 1,
                  marginLeft: '5px',
                }}
                onChange={handleSearchChange}
                value={searchValue}
              />
            </div>
          )}
          <IconButton color="inherit" disabled>
            <Brightness4 />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
