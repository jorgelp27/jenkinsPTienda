
import { IProveedor } from '@/interfaces/proveedor';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';

interface Props {
    proveedor: IProveedor[]
}
export const ProveedorList:FC<Props> = ({ proveedor }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>

                <TableCell align="left">Dni</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Telefono</TableCell>
                
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    proveedor.map((proveedor: IProveedor) => (
                        <TableRow key= { proveedor.dni } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { proveedor.dni }
                            </TableCell>
                            <TableCell align="right">{proveedor.nombre}</TableCell>
                            <TableCell align="right">{proveedor.email}</TableCell>
                            <TableCell align="right">{proveedor.telefono}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}