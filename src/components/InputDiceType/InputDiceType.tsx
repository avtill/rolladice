import { useForm } from "react-hook-form";
import CasinoIcon from '@mui/icons-material/Casino';
import { Fab, colors } from "@mui/material";
import { useState } from "react";


interface DiceInputValues{
  howMany: number,
  diceType: number,
  mod: number,
}

const InputDiceType = () => {
  const {register, handleSubmit} =useForm<DiceInputValues>();
  const [diceInfo, setDiceInfo] =useState({
    howMany: 1,
    diceType: 0,
    mod: 0,
  });
  
  const diceInfoToMath = (data: DiceInputValues) => {
    setDiceInfo(data)
  };

  const diceResult =({howMany, diceType, mod}:DiceInputValues) => {
    let sumDiceRandomResult = 0;    
    let criticalFail = 0;
    let criticalSuccess = 0;
for (let i = 0; i<howMany; i++) {
  let diceRandomResult = Math.floor(Math.random()*(diceType - 1) +1);
sumDiceRandomResult = sumDiceRandomResult + diceRandomResult;
    if(diceRandomResult === 6) {
      criticalSuccess = criticalSuccess +1;
    }
    else if (diceRandomResult === 1) {
      criticalFail = criticalFail +1
    }
}
    const toReturn = sumDiceRandomResult + (howMany * mod);

    console.log(howMany, sumDiceRandomResult, mod);
    console.log(toReturn);

    return toReturn 
  }

    return  (<>
     <form onSubmit={handleSubmit(diceInfoToMath)}>
      <input placeholder="How many dice?" {...register("howMany", {required: true})} style={{display:"block", margin:"auto"}} type="number"/>
      <input placeholder="Dice type" {...register("diceType", {required: true})} style={{display:"block", margin:"auto"}} type="number"/>
      <input placeholder="mod?" {...register("mod", {required: true})} style={{display:"block", margin:"auto"}}type="number" /><br />
      <Fab size="small" color="secondary" aria-label="add" sx={{margin:2}} type="submit" >
<CasinoIcon  />
</Fab> 
    </form>
    <span>{diceResult({...diceInfo})}</span>
    </>
)  
}

export default InputDiceType