import Button from "./Buttons";
import './Calc.css'
import Input from "./Input"
import { useState } from "react"

const Calc = () => {

  let [CalVal, setCalVal] = useState("")

  let onButtonClick = (buttonText) => {
    if(buttonText ==='C'){
      setCalVal("");
    }else if(buttonText==='='){
      const result = eval(CalVal);
      setCalVal(result);
    }
    else{
      let newValue = CalVal + buttonText;
      setCalVal(newValue)
    }
  }

  return (
    <div className="calculator vh-100  d-flex justify-content-center align-items-center">
      <div className="inner-div " >
        <Input CalVal={CalVal} />
        <Button onButtonClick={onButtonClick} />
      </div>
    </div>);
}

export default Calc;