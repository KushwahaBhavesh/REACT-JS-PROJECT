import RenderListItem from "./renderListItem"

const ullist=({item})=>{
  return(<>
     <ul className="list-group">
      {item.map((item) =>
      <RenderListItem 
      item={item}
      key={item}  
      />)}
      </ul>
  </>)
}

export default ullist
