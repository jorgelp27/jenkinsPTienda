import { ICesta } from '@/interfaces/cesta';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';


interface Props {
    cestas: ICesta[]
}
export const CestasList:FC<Props> = ({ cestas }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>

                <TableCell align="left">ID</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">fecha</TableCell>
                <TableCell align="right">idProducto</TableCell>
                <TableCell align="right">User</TableCell>
                
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    cestas.map((cesta: ICesta) => (
                        <TableRow key= { cesta.id } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { cesta.id }
                            </TableCell>
                            <TableCell align="right">{cesta.cantidad}</TableCell>
                            <TableCell align="right">{cesta.fecha}</TableCell>
                            <TableCell align="right">{cesta.producto?.modelo}</TableCell>
                            <TableCell align="right">{cesta.user?.email}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}