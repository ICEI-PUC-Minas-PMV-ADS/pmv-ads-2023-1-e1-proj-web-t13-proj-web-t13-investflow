import { Link } from 'react-router-dom';

import { AttachMoney, Close, Star, StarBorder } from '@mui/icons-material';
import { Button, IconButton, Modal, Paper, TableCell, TableRow, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css'

export default function AssetRow({ asset, idx, toggleFavorite }) {
    const [open, setOpen] = useState(false);
    const [cryptoRate, setCryptoRate] = useState("");

    const formatPercentage = (value) => {
        if (value === undefined) {
            return 'N/A';
        }
        return value.toFixed(2) + '%';
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
            <TableRow>
                <TableCell sx={{ border: 'none', padding: '0' }}>
                    <IconButton
                        onClick={() => toggleFavorite(asset)}
                        color="inherit"
                    >
                        {asset.isFavorite ? (
                            <Star style={{ color: '#ffd416' }} />
                        ) : (
                            <StarBorder />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell sx={{ border: 'none' }}>
                    <span>{idx + 1}</span>
                </TableCell>
                <TableCell sx={{ border: 'none' }}>
                    <Link
                        to={`/asset/${asset.id}`}
                        style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
                    >
                        <img src={asset.logo} alt={`${asset.name} logo`} style={{ width: '25px', marginRight: '8px' }} />
                        <span style={{ fontWeight: "700" }}>{asset.name}</span>
                        <span style={{ marginLeft: '6px', color: '#868686' }}>{asset.symbol.toUpperCase()}</span>

                    </Link>
                </TableCell>
                <TableCell sx={{ border: 'none' }}>U{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(asset.price)}</TableCell>
                <TableCell sx={{ border: 'none' }}>
                    {formatPercentage(asset.twentyFourHourChange)}
                </TableCell>
                <TableCell sx={{ border: 'none' }}>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{ width: '100%' }}
                        onClick={() => setOpen(true)}
                    >
                        <AttachMoney style={{ marginRight: '8px' }} />
                        <span style={{ color: 'white', }}>Criar Alerta</span>
                    </Button>
                </TableCell>
            </TableRow>

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
                        <img src={asset.logo} alt={`${asset.name} logo`} style={{ height: '65px', marginRight: '24px' }} />
                        <div>

                            <div style={{ display: 'flex' }}>
                                <Typography variant='h2' fontSize={20} fontWeight={500}>{asset.name}</Typography>
                                <span style={{ marginLeft: '6px', color: '#868686', fontSize: '20px' }}>{asset.symbol.toUpperCase()}</span>
                            </div>
                            <Typography variant='h2' fontSize={24} fontWeight={500} marginTop={'8px'}>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(asset.price)}</Typography>
                        </div>
                    </div>
                    <Typography variant='h3' fontSize={16} marginTop={'22px'} fontWeight={500}>Me notifique quando <span style={{ fontWeight: '700' }}>{asset.symbol.toUpperCase()}</span> chegar em:</Typography>

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