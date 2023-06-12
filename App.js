// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssetList from './components/AssetList';
import AssetDetails from './components/AssetDetails';
import FavoritesList from './components/FavoritesList';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';


function App() {
  const theme = createTheme();

  theme.spacing(2);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<AssetList />} />
          <Route path="/asset/:id" element={<AssetDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/login" element={<FavoritesList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
