const renderListItem = ({ item }) => {
  
  const buttonClickHandler = ()=>{
    console.log(`${item} selected`)
  }

  return (<>
        <li
          key={item}
          className="list-group-item  mt-2 rounded-5">
          <span>{item}</span>
          <button 
          className="btn btn-primary float-end w-25 h-75"
          onClick={buttonClickHandler}
          >buy</button>
        </li>
  </>)
}
export default renderListItem