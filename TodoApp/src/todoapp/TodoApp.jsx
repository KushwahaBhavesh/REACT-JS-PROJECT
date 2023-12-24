import ToDoTitle from './ToDoTitle'
import TodoInput from './TodoInput'
import TodoTask from './TodoTask'
import './TodoApp.css'
import { useState } from 'react'
import TodoError from './TodoError'

function TodoApp() {


  const [todoItems, setTodoItems] = useState([]);

  const inputHandle = (currName, currDate) => {
    console.log(currName + currDate);
    const newtoDoData = [...todoItems,{
      name:  currName ,
      date:  currDate 
    }]
    setTodoItems(newtoDoData);
  }

  const HandleDeleteBtn=(toDoName)=>{
    const newtoDoData = todoItems.filter(item=>item.name != toDoName);
    setTodoItems(newtoDoData)
  }

  return (
    <div className='root d-flex justify-content-center align-items-start overflow-hidden'>
      <div className='container d-flex justify-content-center'>
        <div className='outer-border '>
          <ToDoTitle />
          <TodoInput onInputHandle={inputHandle} />
          {todoItems.length === 0 ? <TodoError /> : null}
          <TodoTask ToDoItem={todoItems} DeleteBtnHandle={HandleDeleteBtn}/>
        </div>
      </div>
    </div>
  )
}
export default TodoApp;