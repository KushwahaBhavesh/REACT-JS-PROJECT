const renderTask = ({ toDoName, toDoDate , btnHandle  }) => {
  return <div className="d-flex mt-2 w-100 ">
    <div className="col-6 bg-light rounded-3 fs-5">
      {toDoName}
    </div>
    <div className="col-4 ms-3 bg-light rounded-3 fs-5">{toDoDate}
      
    </div>
    <div className="col-2 ms-2 ">
      <input type='button' value="Delete" className='btn btn-danger text-light fw-bolder' onClick={()=>btnHandle(toDoName)} />
    </div>
  </div>
}
export default renderTask;