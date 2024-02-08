import React from 'react'
import {AppBar, Toolbar, Typography, Stack,ListItemButton} from '@mui/material'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

    let location = useLocation();

  return (
    <>
    <AppBar  sx={{bgcolor:'white', color: "black", position:'static'}} >
        <Toolbar>
            <Typography variant='h5' component='div' sx={{flexGrow: 1, fontFamily:'cursive', color:'#900603'}}>Resume Builder</Typography>
            <Stack direction='row' spacing={2}>
                 
                <ListItemButton selected={location.pathname === '/' ? true : false} ><Link to='/' style={{textDecoration:"none", color:"black"}} >Resume Templates</Link></ListItemButton>
            
                <ListItemButton selected={location.pathname === '/myresume' ? true : false}><Link to='/myresume' style={{textDecoration:"none", color:"black"}}>My Resume</Link></ListItemButton>
                <ListItemButton selected={location.pathname === '/about' ? true : false}><Link to='/about' style={{textDecoration:"none", color:"black"}}>About us</Link></ListItemButton>

               
              
            </Stack>

        </Toolbar>
    </AppBar>
    
    
    </>
  )
}

export default Navbar
