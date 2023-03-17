import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NextLink from 'next/link';

export const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
            <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/admin/auth' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Auth</Button>
                </Link>
                <Link href='/admin/categorias' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Categorias</Button>
                </Link>
                <Link href='/admin/productos' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Productos</Button>
                </Link>
                <Link href='/admin/proveedor' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Proveedor</Button>
                </Link>
                <Link href='/clientes' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Clientes</Button>
                </Link>
            </Box>
            <Box flex={1} />
            <Box>
                <Typography>User: Jorge</Typography>
                <Link href='/' component={ NextLink }>
                     <LogoutIcon sx={{ color: 'white'}} />
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
  )

  }