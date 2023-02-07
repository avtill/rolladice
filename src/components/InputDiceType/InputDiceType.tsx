import React from 'react' 
import { TextField, Fab, Box} from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import Switch from '@mui/material/Switch';


//Do poprawy
// const WhitchDice = () => {
//     let inputValue = TextField.value; 
//     let rollResult = Math.floor(Math.random()* `${inputValue}` +1 ) //inputrequest//
       
// return rollResult
// }


const InputDiceType = () => {
    return (<div style={{margin:"10px"}}>
    <Box>
  <Switch defaultChecked color="success" /> 
    <TextField id="outlined-basic" label="?dice" variant="outlined" sx={{mt:2}} />
    </Box>
    <Box>
 <Switch defaultChecked color="success" /> 
    <TextField id="outlined-basic" label="dice?" variant="outlined" sx={{mt:2}} />
    </Box>
    <Box>
  <Switch defaultChecked color="success" />
    <TextField id="outlined-basic" label="MOD?" variant="outlined" sx={{mt:2}}/>
    </Box>
  <br />
      <Fab size="small" color="secondary" aria-label="add"sx={{margin:2}}>
       <CasinoIcon  />
  {/* onClick={WhitchDice} */}
  </Fab>
    </div>
  )
}

export default InputDiceType