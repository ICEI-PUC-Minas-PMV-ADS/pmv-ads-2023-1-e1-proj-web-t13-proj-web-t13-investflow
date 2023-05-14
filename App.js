// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssetList from './components/AssetList';
import AssetDetails from './components/AssetDetails';
import FavoritesList from './components/FavoritesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssetList />} />
        <Route path="/asset/:id" element={<AssetDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </Router>
  );
}

export default App;
