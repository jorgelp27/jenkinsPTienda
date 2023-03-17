import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import NextLink  from 'next/link';
import { IProducto } from "@/interfaces/productos";

interface Props {
    producto: IProducto;
}
export const ProductoCard:FC<Props> = ({ producto }) => {
  return (
    <Grid item xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/productos/${producto.id}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ producto.imagen } alt={ producto.modelo } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{producto.precio} €</Typography>
                        
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{producto.fabricante}</Typography>
            <Typography fontWeight={500}>{producto.precio}</Typography>
            <Typography fontWeight={500}>{producto.descripcion}</Typography>
        </Box>
    </Grid>
  )
}