import React from 'react'

interface ITodoListContainerProps{
    mainTask :{
        id:number,
        task:string,
        isEdited:boolean
    }[];
    handleDeleteTodo: (id:number)=> void;
    handleEditChangeTask: (id:number, curEditedTask:string) => void;
    handleDoneTask: (id:number) => void;
    handleEditTask: (id:number) => void;
    
}
const TodoListContainer:React.FC<ITodoListContainerProps> = ({mainTask,handleDeleteTodo,handleEditChangeTask,handleDoneTask,handleEditTask}) => {
  return (
    <div>
      {
        mainTask.length > 0 ? (
            mainTask.map((task)=>(
                <div className='todo-list' key={task.id}>
                    {
                        task.isEdited ? (
                            <input type="text" value={task.task} onChange={(e)=> handleEditChangeTask(task.id,e.target.value)} />
                        ): (
                            <span>{task.task}</span>
                        )
                    }
                    <button className='default-btn btn-edit'
                    style={{
                        backgroundColor: task.isEdited ? "yellow" : "green",
                        color: task.isEdited? "black" :"white"
                    }}
                    onClick={()=> task.isEdited? handleDoneTask(task.id) : handleEditTask(task.id)}
                    >
                        {task.isEdited? "DONE" :"EDIT"}
                    </button>
                    <button className ='btn-danger'
                    disabled={task.isEdited}
                    onClick={()=>handleDeleteTodo(task.id)}
                    >Delete</button>
                </div>
            ))
        ): (
            <span>No Task</span>
        )
        
      }
    </div>
  )
}

export default TodoListContainer
