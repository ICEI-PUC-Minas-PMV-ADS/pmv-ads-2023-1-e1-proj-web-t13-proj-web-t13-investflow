// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssetList from './components/AssetList';
import AssetDetails from './components/AssetDetails';
import FavoritesList from './components/FavoritesList';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';
import TermsAndConditions from './pages/TermsAndConditions';

import { ToastContainer } from 'react-toastify';

function App() {

  const theme = createTheme();
  theme.spacing(2);

  const [shouldSearchWork, setShouldSearchWork] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar shouldSearchWork={shouldSearchWork} onSearchChange={handleSearchChange} isUserLoggedIn={isUserLoggedIn} />
      <Routes>
        <Route path="/" element={<AssetList setShouldSearchWork={setShouldSearchWork} searchValue={searchValue} />} />
        <Route path="/asset/:id" element={<AssetDetails setShouldSearchWork={setShouldSearchWork} />} />
        <Route path="/favorites" element={<FavoritesList setShouldSearchWork={setShouldSearchWork} />} />
        <Route path="/login" element={<Login setShouldSearchWork={setShouldSearchWork} setIsUserLoggedIn={setIsUserLoggedIn} />} />
        <Route path="/register" element={<Register setShouldSearchWork={setShouldSearchWork} />} />
        <Route path="/logout" element={<Logout setShouldSearchWork={setShouldSearchWork} setIsUserLoggedIn={setIsUserLoggedIn} />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions setShouldSearchWork={setShouldSearchWork} />} />
      </Routes>
    </Router>
    <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
