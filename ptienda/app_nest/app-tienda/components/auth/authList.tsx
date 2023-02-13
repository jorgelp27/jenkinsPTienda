
import { IAuth } from '@/interfaces/cesta';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';


interface Props {
    auths: IAuth[]
}
export const AuthList:FC<Props> = ({ auths }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>

                <TableCell align="left">ID</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">Facebook</TableCell>
                <TableCell align="right">Github</TableCell>
                <TableCell align="right">idCliente</TableCell>
                
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    auths.map((auth: IAuth) => (
                        <TableRow key= { auth.idUser } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { auth.idUser }
                            </TableCell>
                            <TableCell align="right">{auth.email}</TableCell>
                            <TableCell align="right">{auth.facebook}</TableCell>
                            <TableCell align="right">{auth.github}</TableCell>
                            <TableCell align="right">{auth.cliente.nombre}</TableCell>
                            
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}