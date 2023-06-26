// AssetList.js

import React, { useEffect, useState } from 'react';

import CoinGeckoAPI from '../services/CoinGeckoAPI';
import {
  Typography,
  Container,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AssetTable from './AssetTable';

function AssetList({ setShouldSearchWork, searchValue }) {

  setShouldSearchWork(true);

  const [assets, setAssets] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    async function fetchAssets() {
      const data = await CoinGeckoAPI.getAssets();
      console.log(data)
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

  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const useStyles = makeStyles(theme => ({
    container: {
      marginTop: theme.spacing(3),
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth={"xl"} className={classes.container} >
        <Typography variant="h1" fontSize={30} fontWeight={700} marginBottom={"8px"}>
          Preço dos ativos por Market Cap
        </Typography>
        <Typography variant='h2' fontSize={18} marginBottom={"20px"}>A capitalização global de mercado para criptomoedas no dia de hoje é de $1 bilhão.</Typography>
        <AssetTable data={filteredAssets} toggleFavorite={toggleFavorite} />
      </Container>
    </div>
  );
}

export default AssetList;
