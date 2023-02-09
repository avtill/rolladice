import React from 'react' 
import { TextField, Fab, Box, colors} from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material';

//Do poprawy
// const WhitchDice = () => {
//     let inputValue = TextField.value; 
//     let rollResult = Math.floor(Math.random()* `${inputValue}` +1 ) //inputrequest//
       
// return rollResult
// }


const InputDiceType = () => {
    return (<><FormGroup style={{margin:"10px"}}>
    <Box sx={{mt:2}}>
  <FormControlLabel sx={{color:'GrayText'}}
  control={<Switch color="success" />} 
  label='więcej niż 1 kość'
  labelPlacement='bottom'
  disabled={false} /> 
    <TextField id="outlined-basic" label="?dice" variant="outlined"  />
    </Box>
    <Box sx={{mt:2}}>
    <FormControlLabel sx={{color:'GrayText'}}
  control={<Switch color="success" />} 
  label='niestandardowa kość'
  labelPlacement='bottom'
  disabled={false} /> 
    <TextField id="outlined-basic" label="dice?" variant="outlined"  />
    </Box>
    <Box sx={{mt:2}}>
    <FormControlLabel sx={{color:'GrayText'}}
  control={<Switch color="success" />} 
  label='modyfikatory?'
  labelPlacement='bottom'
  disabled={false} /> 
    <TextField id="outlined-basic" label="MOD?" variant="outlined"/>
    </Box>
  <br /></FormGroup>
      <Fab size="small" color="secondary" aria-label="add" sx={{margin:2}} >
       <CasinoIcon  />
  {/* onClick={WhitchDice} */}
  </Fab>
    </>
  )
}

export default InputDiceType