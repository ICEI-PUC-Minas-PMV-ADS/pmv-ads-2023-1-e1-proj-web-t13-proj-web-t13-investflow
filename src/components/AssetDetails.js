// AssetDetails.js

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import CoinGeckoAPI from '../services/CoinGeckoAPI';
import { Breadcrumbs, Button, Container, IconButton, Modal, Paper, Typography } from '@mui/material';
import { AttachMoney, Close, Star, StarBorder } from '@mui/icons-material';

import { toast } from 'react-toastify';

// This is the custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ border: `solid 2px ${payload[0].color}`, padding: '8px 16px', backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <p style={{ fontWeight: 'bold' }}>{payload[0].payload.time}</p>
        <p className="label">
          <span style={{ fontWeight: 'bold' }}>Price: </span>
          {`${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(payload[0].value)}`}
        </p>
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
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    const doesFavoriteMatch = parsedFavorites.some(favorite => favorite.id === id);
    return doesFavoriteMatch;
  });

  const [open, setOpen] = useState(false);
  const [cryptoRate, setCryptoRate] = useState("");

  useEffect(() => {
    async function fetchAsset() {
      const data = await CoinGeckoAPI.getAsset(id);
      setAsset(data);
      setIsLoading(false);
    }

    async function fetchChartData() {
      const data = await CoinGeckoAPI.getAssetChartData(id, 'usd', 7);
      const formattedData = data.prices.map((entry) => {
        const date = new Date(entry[0]);

        return {
          time: date.toDateString(),
          price: entry[1]
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

  function triggerToast(message) {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: 'success1'
     });
}

  function handleSubmit() {
    setOpen(false);
    triggerToast("Alerta criado com sucesso!");
    setCryptoRate("");
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '450px',
    padding: '40px',
    bgcolor: '#FFF',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {!isLoading && (
        <Container maxWidth={"xl"} style={{ marginTop: "24px" }} >
          <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: '16px' }}>
            <Link underline="hover" style={{ textDecoration: 'none', color: "#0fa37f" }} color="inherit" to="/">
              Home
            </Link>
            <Typography>{asset.name}</Typography>
          </Breadcrumbs>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '22px' }}>


            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={asset?.image?.thumb} alt={`${asset.id} logo`} style={{ width: '28px', marginRight: '8px' }} />
              <Typography variant='h2' fontSize={30} fontWeight={700} >{asset.name}</Typography>
              <Typography variant='span' color={'#868686'} fontSize={30} fontWeight={700} marginLeft={'8px'}>{asset?.symbol?.toUpperCase()}</Typography>
              <IconButton onClick={handleToggleFavorite}>
                {isFavorite ? <Star style={{ color: '#ffd416' }} /> : <StarBorder />}
              </IconButton>
            </div>

            <Button
              color="primary"
              variant="contained"
              style={{}}
              onClick={() => setOpen(true)}
            >
              <AttachMoney style={{ marginRight: '8px' }} />
              <span style={{ color: 'white', }}>Criar Alerta</span>
            </Button>
          </div>
          <div style={{ padding: '30px', border: 'solid 2px #000', borderRadius: '4px' }}>
            <Typography variant='h3' fontSize={30} fontWeight={700}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(asset?.market_data?.current_price?.usd)}</Typography>
            <span style={{ display: 'block', height: '3px', width: '100%', maxWidth: '120px', background: '#000', margin: '25px 0' }}></span>
            <div style={{ width: '100%', height: '400px' }}>
              <ResponsiveContainer>
                <AreaChart
                  width={500}
                  height={400}
                  data={chartData}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* <XAxis dataKey="time" /> */}
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

                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e3f2d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#e3f2d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>


                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#10b980"
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                    activeDot={{ r: 8 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </div>
        </Container>
      )}


      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper style={modalStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='h1' fontSize={22} fontWeight={500}>Crie um alerta de preço</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </div>
          <div style={{ marginTop: '22px', display: 'flex', paddingBottom: '22px', borderBottom: 'solid 1px #dedede' }}>
            <img src={asset?.image?.thumb} alt={`${asset.name} logo`} style={{ height: '65px', marginRight: '24px' }} />
            <div>

              <div style={{ display: 'flex' }}>
                <Typography variant='h2' fontSize={20} fontWeight={500}>{asset.name}</Typography>
                <span style={{ marginLeft: '6px', color: '#868686', fontSize: '20px' }}>{asset?.symbol?.toUpperCase()}</span>
              </div>
              <Typography variant='h2' fontSize={24} fontWeight={500} marginTop={'8px'}>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(asset?.market_data?.current_price?.usd)}</Typography>
            </div>
          </div>
          <Typography variant='h3' fontSize={16} marginTop={'22px'} fontWeight={500}>Me notifique quando <span style={{ fontWeight: '700' }}>{asset?.symbol?.toUpperCase()}</span> chegar em:</Typography>

          <input
            type="number"
            name="cryptoRate" id="cryptoRate"
            placeholder="Digite o valor"
            style={{ padding: "16px", borderRadius: "3px", fontSize: '16px', border: "solid 1px #c2c8d0", margin: "16px 0 22px", width: '100%' }}
            onChange={(e) => setCryptoRate(`${e.target.value}`)}
            value={cryptoRate}
          />

          <button
            type="submit"
            style={{ padding: "16px 64px", borderRadius: "3px", fontSize: '16px', border: "none", cursor: "pointer", background: '#0fa37f', color: '#FFF', margin: '0 auto', display: 'block' }}
            onClick={handleSubmit}
          >
            Confirmar
          </button>
        </Paper>
      </Modal>
    </>
  );
}

export default AssetDetails;
