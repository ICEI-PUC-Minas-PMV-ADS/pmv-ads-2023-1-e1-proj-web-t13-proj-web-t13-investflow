// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  IconButton,
  InputBase,
  Button,
  Box,
  Container,
  InputAdornment,
} from '@mui/material';

import logo from '../assets/logo.svg';

import { makeStyles } from '@mui/styles';

import {
  Search,
  DarkModeOutlined,
  StarBorderPurple500Outlined,
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
    marginTop: theme.spacing(3),
    display: "flex !important",
    justifyContent: "space-between",

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },

  loginButton: {
    color: '#000 !important',
    backgroundColor: 'transparent',
    boxShadow: "none",
    marginRight: theme.spacing(1),
    padding: '6px 24px',
    borderRadius: '4px',
    borderColor: '#c2c8d0',
    textTransform: 'capitalize',
    transition: 'background-color 0.2s',
    "&:hover": {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: '#c2c8d0',
    }

  },
  registerButton: {
    color: 'white',
    backgroundColor: '#4caf50',
    // marginRight: theme.spacing(2),
    padding: '6px 24px',
    backgroundColor: '#0fa37f',
    borderRadius: '4px',
    boxShadow: 'none',
    textTransform: 'capitalize',
    transition: 'filter 0.2s',
    "&:hover": {
      backgroundColor: '#0fa37f',
      boxShadow: 'none',
      filter: 'brightness(0.9)'
    }
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
  logo: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px'
    }
  },
  actionContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: "flex-end",
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  }
}));


function Navbar({ onSearchChange, shouldSearchWork, isUserLoggedIn }) {
  const [searchValue, setSearchValue] = useState('');

  const classes = useStyles();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <Box>
      <Container maxWidth={"xl"} className={classes.container}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} style={{ width: '180px' }} className={classes.logo} />
        </Link>
        <div className={classes.actionContainer} style={{ }}>
          <div>

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
                  variant="outlined"
                  onClick={() => navigate("/login")}
                  className={classes.loginButton}
                >
                  <span>Login</span>
                </Button>
                <Button
                  color="inherit"
                  variant="contained"
                  onClick={() => navigate("/register")}
                  className={classes.registerButton}
                >
                  <span style={{ color: 'white' }}>Cadastro</span>
                </Button>
              </>
            )}

            {/* <IconButton color="inherit">
              <DarkModeOutlined color='#000' />
            </IconButton> */}

          </div>
          <div style={{ display: "flex", marginTop: "16px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", marginRight: "8px" }}>
              <IconButton color="inherit" component={Link} to="/favorites" style={{ fontSize: "16px", borderRadius: "8px" }}>
                <StarBorderPurple500Outlined />
                <span style={{ marginLeft: "4px" }}>Watchlist</span>
              </IconButton>


            </div>

            {shouldSearchWork && (
              <div className={classes.searchInput}>
                <InputBase
                  placeholder="Procurar"
                  startAdornment={
                    <InputAdornment style={{ marginRight: "4px" }}>
                      <Search />
                    </InputAdornment>
                  }
                  inputProps={{ 'aria-label': 'search' }}
                  style={{
                    // flex: 1,
                    border: "solid 1px #000",
                    borderRadius: "8px",
                    padding: "2px 14px"

                  }}
                  onChange={handleSearchChange}
                  value={searchValue}
                />
              </div>
            )}




          </div>

        </div>

      </Container>
    </Box>
  );
}

export default Navbar;
