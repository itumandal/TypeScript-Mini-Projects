import React,{useState} from 'react'

interface IAddTodoContainerProps{
    handleAddTodo: (currTask:string) => void
}

const AddTodoContainer:React.FC<IAddTodoContainerProps> = ({handleAddTodo}) => {
   const [currTask, setCurrTask] = useState<string>("")

  return (
    <div className='todo-add'>
      <input type="text" value={currTask} onChange={(e)=> setCurrTask(e.target.value)} />
      <button className='default-btn' role='button'
      onClick={()=>{
        handleAddTodo(currTask)
        setCurrTask("")
      }}
      >ADD TODO</button>
    </div>
  )
}

export default AddTodoContainer
