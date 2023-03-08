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
  let toReturn = {
    criticalFail:0,
    criticalSuccess: 0,
    sumDiceRandomResult: 0,
    sumToReturn: 0,
    resultArray: [0]
  }  
  const diceResult =({howMany, diceType, mod}:DiceInputValues) => {
for (let i = 0; i<howMany; i++) {
  let diceRandomResult = Math.floor(Math.random()*(diceType - 1) +1);
 
  toReturn.sumDiceRandomResult = toReturn.sumDiceRandomResult + diceRandomResult;
  toReturn.resultArray.push(diceRandomResult);
    if(diceRandomResult === 6) {
      toReturn.criticalSuccess = toReturn.criticalSuccess +1;
    }
    else if (diceRandomResult === 1) {
      toReturn.criticalFail = toReturn.criticalFail +1
    }
}
    toReturn.sumToReturn = toReturn.sumDiceRandomResult + (howMany * mod);
    toReturn.resultArray = toReturn.resultArray.slice(1);
    console.log(toReturn);

    return toReturn 
  }

    return  (<>
     <form onSubmit={handleSubmit(diceInfoToMath)} >
      <input placeholder="How many dice?" {...register("howMany", {required: true})} style={{display:"block", margin:"auto"}} type="number"/>
      <input placeholder="Dice type" {...register("diceType", {required: true})} style={{display:"block", margin:"auto"}} type="number"/>
      <input placeholder="mod?" {...register("mod", {required: true})} style={{display:"block", margin:"auto"}}type="number" /><br />
      <Fab size="small" color="secondary" aria-label="add" sx={{margin:2}} type="submit" >
<CasinoIcon  />
</Fab> 
    </form>
    <div>
      <h2>Result</h2>
      <table style={{margin:"auto", border: "1px solid"}} {...diceResult({...diceInfo})}>
        <tr>
          <td style={{border: "1px solid"}}>How many dice</td>
          <td style={{border: "1px solid"}}>{diceInfo.howMany}</td>
        </tr>
        <tr>
          <td style={{border: "1px solid"}}>Dice type</td>
          <td style={{border: "1px solid"}}>{diceInfo.diceType}</td>
        </tr>
        <tr>
          <td style={{border: "1px solid"}}>MOD?</td>
          <td style={{border: "1px solid"}}>{diceInfo.mod > 0? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td style={{border: "1px solid"}}>Total result</td>
          <td style={{border: "1px solid"}}><strong>{toReturn.sumToReturn} </strong></td>
        </tr>  
        <tr>
          <td style={{border: "1px solid"}}>How many critical Success</td>
          <td style={{border: "1px solid"}}>{toReturn.criticalSuccess}</td>
        </tr>
        <tr>
          <td style={{border: "1px solid"}}>How many critical Failures</td>
          <td style={{border: "1px solid"}}>{toReturn.criticalFail}</td>
          </tr>
        <tr>
          <td style={{border: "1px solid"}}>All results</td>
          <td style={{border: "1px solid"}}>{toReturn.resultArray}</td>
        </tr>
      </table>
    </div>
    {/* <span>{diceResult({...diceInfo})}</span> */}
    </>
)  
}

export default InputDiceType