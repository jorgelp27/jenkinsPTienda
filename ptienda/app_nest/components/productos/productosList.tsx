// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { FC } from 'react';
// import { IProducto } from "@/interfaces/productos"


// interface Props {
//     productos: IProducto[]
// }
// export const ProductosList:FC<Props> = ({ productos }) => {
//   return (
//     <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//             <TableRow>
//                 <TableCell align="left">ID</TableCell>
//                 <TableCell align="right">Modelo</TableCell>
//                 <TableCell align="right">Precio</TableCell>
//                 <TableCell align="right">Fabricante</TableCell>
//                 <TableCell align="right">Descripcion</TableCell>
//                 <TableCell align="right">idCliente</TableCell>
//                 <TableCell align="right">idCategoria</TableCell>
//                 <TableCell align="right">idProveedor</TableCell>
                
//             </TableRow>
//         </TableHead>

//         <TableBody>
//                 { 
//                     productos.map((producto: IProducto) => (
//                         <TableRow key= { producto.id } 
//                                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row">
//                                 { producto.id }
//                             </TableCell>
//                             <TableCell align="right">{producto.modelo}</TableCell>
//                             <TableCell align="right">{producto.precio}</TableCell>
//                             <TableCell align="right">{producto.fabricante}</TableCell>
//                             <TableCell align="right">{producto.descripcion}</TableCell>
//                             <TableCell align="right">{producto.cliente?.nombre}</TableCell>
//                             <TableCell align="right">{producto.categoria?.nombre}</TableCell>
//                             <TableCell align="right">{producto.proveedor?.nombre}</TableCell>

//                         </TableRow>
//                     )
//                 )}
                
//             </TableBody>
//         </Table>
//     </TableContainer>
//   )
// }

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { FC } from 'react';

// import Grid from '@mui/material/Grid'; // Grid version 1
// import { IProducto } from '@/interfaces/cesta';



// interface Props {
//     productos: IProducto[]
// }
// export const ProductosList: FC<Props> = ({ productos }) => {
//     return (
//         <Grid container spacing={24} direction="row">

//         {productos.map((producto: IProducto) => (
//             <Grid item>
//                     <Card sx={{ maxWidth: 330 }} >
//                         <CardHeader
//                             avatar={
//                                 <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                                     R
//                                 </Avatar>
//                             }
//                             action={
//                                 <IconButton aria-label="settings">
//                                     <MoreVertIcon />
//                                 </IconButton>
//                             }
//                             title={producto.fabricante}
//                             subheader={producto.id}
//                         />
//                         <CardMedia
//                             component="img"
//                             height="194"
//                             image={producto.imagen}
//                             alt="Paella dish"
//                         />
//                         <CardContent>
//                             <Typography variant="body2" color="text.secondary">
//                                 {producto.descripcion}
//                             </Typography>
//                         </CardContent>
//                         <CardActions disableSpacing>
//                             <IconButton aria-label="add to favorites">
//                                 <FavoriteIcon />
//                             </IconButton>
//                             <IconButton aria-label="share">
//                                 <ShareIcon />
//                             </IconButton>
//                         </CardActions>
//                         <CardContent>

//                             <Typography paragraph>Categoria:</Typography>
//                             <Typography>
//                                {producto.categoria?.nombre}
//                             </Typography>
//                             <Typography>                              
//                               Precio: {producto.precio}
//                             </Typography>

//                         </CardContent>
//                     </Card>
//             </Grid>
//         )

//         )
//         }
//         </Grid>


//     )
// }


import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IProducto } from '@/interfaces/cesta';
interface Props {
    productos: IProducto[]
}
export const ProductosList:FC<Props> = ({productos}) => {
  
  const colums: GridColDef[] = [
        { field: 'id', headerName: 'id', width: 130},
        { field: 'modelo', headerName:'Modelo', width: 300 },
        { field: 'precio', headerName: 'Precio', width: 100 },
        { field: 'fabricante', headerName: 'Fabricante', width: 100 },
        { field: 'descipcion', headerName: 'Descripcion', width: 100 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: () => (
              <>
                <ModeEditOutlineTwoToneIcon sx={{ color: 'red'}} />
                <ClearIcon  sx={{ color: 'blue'}} />
              </>
            ) 
        }
  ];
  const rows = productos;
  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
              </Box>
               
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '80%',
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}>
                 <DataGrid 
                    columns={colums} rows={rows}
                    pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: IProducto ) => row.fabricante}
                  />
               </Grid>
            </Grid>
  )
}