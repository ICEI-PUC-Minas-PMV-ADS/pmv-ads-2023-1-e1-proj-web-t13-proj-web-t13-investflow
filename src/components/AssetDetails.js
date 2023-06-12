// AssetDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from 'recharts';
import CoinGeckoAPI from '../services/CoinGeckoAPI';
import Navbar from './Navbar';
import { IconButton } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

// This is the custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Price : US$ ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

function AssetDetails({ setShouldSearchWork }) {
  setShouldSearchWork(false);

  const { id } = useParams();
  const [asset, setAsset] = useState({});
  const [chartData, setChartData] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function fetchAsset() {
      const data = await CoinGeckoAPI.getAsset(id);
      setAsset(data);
    }

    async function fetchChartData() {
      const data = await CoinGeckoAPI.getAssetChartData(id, 'usd', 7);
      const formattedData = data.prices.map((entry) => {
        const date = new Date(entry[0]);
        const formattedDate = `${date.getDate()}-${date.toLocaleString(
          'en-US',
          { month: 'short' }
        )}`;
        return {
          time: formattedDate,
          price: entry[1],
        };
      });
      setChartData(formattedData);
    }

    fetchAsset();
    fetchChartData();
  }, [id]); // re-run the effect when the id changes

  const handleToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div>
      
      <div
        style={{
          marginTop: '1rem',
          marginLeft: '1rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h2>{asset.name}</h2>
        <IconButton onClick={handleToggleFavorite}>
          {isFavorite ? <Star style={{ color: 'yellow' }} /> : <StarBorder />}
        </IconButton>
      </div>
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis dataKey="price">
          <Label
            angle={-90}
            value="Price (USD)"
            position="insideLeft"
            style={{ textAnchor: 'middle' }}
          />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />{' '}
        {/* use the custom tooltip component */}
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default AssetDetails;
