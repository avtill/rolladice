import React from 'react' 
import { TextField, Fab } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';

const WhitchDice = () => {
    
return 
}

const InputDiceType = () => {
  return (<div style={{margin:"10px"}}>
    <TextField id="outlined-basic" label="dice?" variant="outlined" />
    <Fab size="small" color="secondary" aria-label="add"sx={{ml:2}}>
  <CasinoIcon onClick={WhitchDice} />
  </Fab>
    </div>
  )
}

export default InputDiceType