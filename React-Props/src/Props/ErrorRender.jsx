
const ErrorRender = ({item}) => {

  return <>
    {/* using Ternary operator */}
    {item.length===0?<h3>List item is empty</h3>:null}
  </>

}
export default ErrorRender