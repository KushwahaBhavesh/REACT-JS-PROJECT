import { useState } from 'react';
import './TodoApp.css'

function TodoInput({onInputHandle}) {

  const [currName,setname]=useState();
  const [currDate,setdate]=useState();

  const onInputName=(event)=>{
    setname(event.target.value);
  }

  const onInputDate=(event)=>{
    setdate(event.target.value)
  }
  const onButtonHandle=()=>{
    onInputHandle(currName,currDate)
    setdate("")
    setname("")
  }


  return (<>
    <div className="row  justify-content-center w-100 ms-1 ">
      <div className="col-6  d-flex justify-content-center">
        <input type='text'
          placeholder='Enter text'
          className=' w-100 p-3'
          onChange={onInputName}
          value={currName} />
      </div>
      <div className="col-4 d-flex justify-content-center ">
        <input type='date' className='p-3 w-100' onChange={onInputDate} />
      </div>      
      <div className="col-2 d-flex justify-content-center ">
      <input type='button' value="ADD" className='btn btn-success text-light fw-bolder' onClick={onButtonHandle} />
      </div>
    </div>
    
  </>);
}
export default TodoInput;