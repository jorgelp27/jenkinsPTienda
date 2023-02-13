import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ICliente } from '../../interfaces/clientes/IClientes';


interface Props {
    clientes: ICliente[]
}
export const ClientesList:FC<Props> = ({ clientes }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>

                <TableCell align="left">Dni</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Telefono</TableCell>
                <TableCell align="right">Ciudad</TableCell>
                
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    clientes.map((cliente: ICliente) => (
                        <TableRow key= { cliente.dni } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { cliente.dni }
                            </TableCell>
                            <TableCell align="right">{cliente.nombre}</TableCell>
                            <TableCell align="right">{cliente.telefono}</TableCell>
                            <TableCell align="right">{cliente.ciudad}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}