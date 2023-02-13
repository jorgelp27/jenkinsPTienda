import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import Image from "next/image";

export const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor:'green'}}>
         <Toolbar>

            <Image src="/logo.png" width={80} height={60}  alt="logo" />

            <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/productos' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Productos</Button>
                </Link>
                <Link href='/categorias' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Categorias</Button>
                </Link>
                <Link href='/proveedor' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Provedor</Button>
                </Link>

                <Link href='/cesta' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>cesta</Button>
                </Link>

                <Link href='/clientes' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>clientes</Button>
                </Link>

                <Link href='/auth' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Auth</Button>
                </Link>
                <Box flex={1} />
            </Box>
                <Box flex={1} />
                <Link href='/auth/login' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Login</Button>
                </Link>
                <Box flex={1} />
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    color="inherit"
                    sx={{  }}
                >
                    <MenuIcon />
                </IconButton>
        </Toolbar>
    </AppBar>
  )

  }