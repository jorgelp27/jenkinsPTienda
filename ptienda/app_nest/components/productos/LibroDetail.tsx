import { Box, Button, Grid, Typography } from '@mui/material';
import Image,{ImageLoader} from 'next/image';
import React, { FC, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { IProducto } from '@/interfaces/productos/IProductos';
import { AuthContext } from '../../context';


interface Props {
    producto: IProducto
}

const myLoader:ImageLoader = ({src, width, quality}) =>{
  // return `https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/`
  return `${src}?s=${width}`
}
export const ProductoDetail:FC<Props> = ({producto}) => {
    console.log(producto);
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    const { user } =  useContext(AuthContext);
    
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} sx={{ border:0, width:'100%' }} >
        <Box display='flex' flexDirection='row'  >
          <Image
            loader={myLoader}
            src= {producto.imagen}
            alt={producto.modelo}
            width={300}
            height={300}
          />
          <Box display='flex' flexDirection='column' sx={{  width: '40%', p:3}} >
            <Typography variant='h5' component='h5'
                        sx={{ fontSize: '20px', textAlign: 'center', mb: '10px'}}
            > { producto.modelo}</Typography>
            <Box display='flex' flexDirection='row' >
              <Typography sx={{width: '40%'}}  variant='subtitle1' > ID </Typography>
              <Typography sx={{width: '60%'}}> {producto.id} </Typography>
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Fabricante </Typography>
              <Typography sx={{width: '60%'}}> {producto.fabricante} </Typography>
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Precio </Typography>
              <Typography sx={{width: '60%'}}> {producto.precio} </Typography>
            </Box>
          </Box>
          <Box  sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
            <Typography variant='h4' component='h4'> { producto.precio } </Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a la cesta
            </Button>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a favoritos
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Descripcion" value="1" />
                {/* <Tab label="Sinpsis" value="2" />
                <Tab label="Estado" value="3" /> */}
              </TabList>
            </Box>
            <TabPanel value="1">{producto.descripcion}</TabPanel>
            {/* <TabPanel value="2">{producto.descripcion}</TabPanel>
            <TabPanel value="3">{producto.fabricante}</TabPanel> */}
          </TabContext>
        </Box>
        {/* <Box sx={{ width: '100%' }}>
              <Typography  variant='subtitle1' > Sinpsis </Typography>
              <Typography> {libro.shortDescription} </Typography>
        </Box> */}


      </Grid>
    </Grid>

  )
}