
import { ICategoria } from '@/interfaces/categorias';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';


interface Props {
    categorias: ICategoria[]
}
export const CategoriasList:FC<Props> = ({ categorias }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>

                <TableCell align="left">ID</TableCell>
                <TableCell align="right">Nombre</TableCell>
                
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    categorias.map((categoria: ICategoria) => (
                        <TableRow key= { categoria.id } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { categoria.id }
                            </TableCell>
                            <TableCell align="right">{categoria.nombre}</TableCell>
                            
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}