import ErrorRender from "./ErrorRender";
import Container from "./container"
import Ullist from "./ullist";
import ItemInput from "./ItemInput";
import { useState } from "react";

function LearningProps() {
  let listItem = ['Mango', 'Banana']
  // let listItem=[];

  let [currentValue,setValue]= useState(listItem);

  const onkeyDown=(e)=>{
    if(e.key==="Enter"){
      let newValue = e.target.value;
      e.target.value="";
      let newInputArray = [...currentValue,newValue];
      setValue(newInputArray);
    }
  }

  return (<div className="d-flex justify-content-center align-items-center vh-100">
    <Container >
      <h1 className="fw-bolder text-center">Fruites Name </h1>
      <ItemInput handleKeyDown={onkeyDown} />
      <ErrorRender item={currentValue} />
      <Ullist item={currentValue}  />
    </Container>


  </div>
  );


}

export default LearningProps;