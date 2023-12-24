const ItemInput = ({handleKeyDown}) => {


  return (<>
    <input
     type="text" 
     placeholder="Enter Fruit Name"
     className="form-control p-2 mb-2 "
     onKeyDown={handleKeyDown}
      />
  </>)
}

export default ItemInput