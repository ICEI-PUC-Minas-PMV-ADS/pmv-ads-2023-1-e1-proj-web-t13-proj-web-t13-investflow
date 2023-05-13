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
} from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import Navbar from './Navbar';

function FavoritesList() {
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
        price: asset.current_price,
        oneHourChange: asset.price_change_percentage_1h_in_currency,
        twentyFourHourChange: asset.price_change_percentage_24h_in_currency,
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

  const formatPercentage = (value) => {
    if (value === undefined) {
      return 'N/A';
    }
    return value.toFixed(2) + '%';
  };

  const favoriteAssets = assets.filter((asset) =>
    favorites.some((favorite) => favorite.id === asset.id)
  );

  return (
    <div>
      <Navbar />
      <Box mt={2} ml={2}>
        <Typography variant="h4" gutterBottom>
          Lista de Favoritos
        </Typography>
        <Paper elevation={3}>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Moeda</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>1 h</TableCell>
                  <TableCell>24 h</TableCell>
                  <TableCell>7 d</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favoriteAssets.map((asset) => {
                  return (
                    <TableRow key={asset.id}>
                      <TableCell>
                        <IconButton
                          onClick={() => toggleFavorite(asset)}
                          color="inherit"
                        >
                          {asset.isFavorite ? (
                            <Star style={{ color: 'yellow', marginTop: 4 }} />
                          ) : (
                            <StarBorder />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Link
                          to={`/asset/${asset.id}`}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {asset.name}
                        </Link>
                      </TableCell>
                      <TableCell>US$ {asset.price.toFixed(2)}</TableCell>
                      <TableCell>
                        {formatPercentage(asset.oneHourChange)}
                      </TableCell>
                      <TableCell>
                        {formatPercentage(asset.twentyFourHourChange)}
                      </TableCell>
                      <TableCell>
                        {formatPercentage(asset.sevenDayChange)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
}

export default FavoritesList;
