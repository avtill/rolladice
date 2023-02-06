import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CasinoIcon from '@mui/icons-material/Casino';



const Navbar = () => {
  return (
    <AppBar position="sticky">
    <Toolbar variant="dense" sx={{background: "darkgreen"}}>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <CasinoIcon sx={{mx: 2}} />
      <Typography variant="h6" color="inherit" component="div">
        Roll a dice
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar