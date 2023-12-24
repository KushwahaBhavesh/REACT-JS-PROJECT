import RenderTask from "./renderTask";

const TodoTask = ({ ToDoItem , DeleteBtnHandle}) => {
  return (<>
  <div className="row justify-content-center ps-3 pe-4  mt-3">
    {ToDoItem.map((item) => <RenderTask toDoName={item.name} toDoDate={item.date} btnHandle={DeleteBtnHandle}/> )}
    </div>
  </>
  );
}
export default TodoTask;