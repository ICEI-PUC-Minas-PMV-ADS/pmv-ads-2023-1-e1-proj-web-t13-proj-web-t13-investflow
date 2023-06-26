import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AssetRow from "./AssetRow";

export default function AssetTable({ data, toggleFavorite }) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell width={"1%"} sx={{ border: 'none', padding: '0' }}></TableCell>
                        <TableCell width={"1%"} sx={{ border: 'none' }}>#</TableCell>
                        <TableCell sx={{ border: 'none' }}>Moeda</TableCell>
                        <TableCell align='right' width={"1%"} sx={{ border: 'none' }}>Preço</TableCell>
                        {/* <TableCell sx={{ border: 'none' }}>1 h</TableCell> */}
                        <TableCell sx={{ border: 'none' }}>24 h</TableCell>
                        <TableCell sx={{ border: 'none', minWidth: '200px' }} width={"15%"}  align="center">Alerta de Preço</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((asset, idx) => {
                        return (
                            <AssetRow key={asset.id} asset={asset} idx={idx} toggleFavorite={toggleFavorite} />
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}