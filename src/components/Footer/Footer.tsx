import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Footer = () => {
  return (

    <Toolbar variant="dense" sx={{position:"fixed", bottom: 0, width:"100%", background: "forestgreen"}}>
            <Typography variant="h6" color="ivory" component="div"  sx={{fontSize:"16px", textAlign:"center", width:"100%"}}>
        Twórca: Joanna Mikulińska
      </Typography>
    </Toolbar>
 
  )
}

export default Footer