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
    const diceRandomResult = Math.floor(Math.random()*(diceType - 1) +1);
    const toReturn = howMany * (diceRandomResult + mod)
    console.log(howMany, diceType, mod, diceRandomResult)
    return toReturn
  }

    return  (<>
     <form onSubmit={handleSubmit(diceInfoToMath)}>
      <input placeholder="How many dice?" {...register("howMany", {required: true})} style={{display:"block", margin:"auto"}}/>
      <input placeholder="Dice type" {...register("diceType", {required: true})} style={{display:"block", margin:"auto"}}/>
      <input placeholder="mod?" {...register("mod", {required: true})} style={{display:"block", margin:"auto"}}/><br />
      <Fab size="small" color="secondary" aria-label="add" sx={{margin:2}} type="submit" >
<CasinoIcon  />
</Fab> 
    </form>
    <span>{diceResult({...diceInfo})}</span>
    </>
)  
}

export default InputDiceType