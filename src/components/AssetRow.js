import { Link } from 'react-router-dom';

import { Star, StarBorder } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

export default function AssetRow({ asset, idx, toggleFavorite }) {
    const formatPercentage = (value) => {
        if (value === undefined) {
            return 'N/A';
        }
        return value.toFixed(2) + '%';
    };

    return (
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
                {formatPercentage(asset.oneHourChange)}
            </TableCell>
            <TableCell sx={{ border: 'none' }}>
                {formatPercentage(asset.twentyFourHourChange)}
            </TableCell>
            <TableCell sx={{ border: 'none' }}>
                {formatPercentage(asset.sevenDayChange)}
            </TableCell>
        </TableRow>
    );
}