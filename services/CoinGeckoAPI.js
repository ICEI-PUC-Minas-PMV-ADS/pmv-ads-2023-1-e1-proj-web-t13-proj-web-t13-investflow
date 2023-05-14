// CoinGeckoAPI.js

import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

const CoinGeckoAPI = {
  async getAssets() {
    const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
      params: { vs_currency: 'usd', per_page: 100, page: 1 },
    });
    return response.data;
  },

  async getAsset(id) {
    const response = await axios.get(`${API_BASE_URL}/coins/${id}`);
    return response.data;
  },

  async getAssetChartData(id) {
    const response = await axios.get(
      `${API_BASE_URL}/coins/${id}/market_chart`,
      {
        params: { vs_currency: 'usd', days: 30, interval: 'daily' },
      }
    );
    return response.data;
  },
};

export default CoinGeckoAPI;
