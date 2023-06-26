// FavoriteList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoinGeckoAPI from '../services/CoinGeckoAPI';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Container,
} from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import Navbar from './Navbar';
import AssetTable from './AssetTable';

function FavoritesList({ setShouldSearchWork }) {
  setShouldSearchWork(false);
  const [favorites, setFavorites] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    async function fetchAssets() {
      const data = await CoinGeckoAPI.getAssets();
      const formattedData = data.map((asset) => ({
        id: asset.id,
        name: asset.name,
        logo: asset.image,
        symbol: asset.symbol,
        price: asset.current_price,
        oneHourChange: asset.price_change_percentage_1h_in_currency,
        twentyFourHourChange: asset.price_change_percentage_24h,
        sevenDayChange: asset.price_change_percentage_7d_in_currency,
        isFavorite: favorites.some((favorite) => favorite.id === asset.id),
      }));
      setAssets(formattedData);
    }
    fetchAssets();
  }, [favorites]);

  const toggleFavorite = (asset) => {
    let newFavorites;

    if (asset.isFavorite) {
      newFavorites = favorites.filter((favorite) => favorite.id !== asset.id);
    } else {
      newFavorites = [...favorites, asset];
    }

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const favoriteAssets = assets.filter((asset) =>
    favorites.some((favorite) => favorite.id === asset.id)
  );

  return (

    <Container maxWidth={"xl"} style={{ marginTop: "24px" }} >
      <Typography variant="h1" fontSize={30} fontWeight={700} marginBottom={"8px"}>
        Lista de Favoritos
      </Typography>

      <AssetTable data={favoriteAssets} toggleFavorite={toggleFavorite} />
    </Container>
  );
}

export default FavoritesList;
