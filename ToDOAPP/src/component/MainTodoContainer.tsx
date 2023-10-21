import React,{ useState} from 'react'
import AddTodoContainer from './AddTodoContainer'
import TodoListContainer from './TodoListContainer'

interface ITask{
    id:number,
    task:string,
    isEdited:boolean
}

const MainTodoContainer:React.FC = () => {
    const [mainTask,setMainTask] = useState<ITask[]>([]);

    const handleAddTodo = (currTask:string) => {
        if(currTask){
            setMainTask(
                [
                    ...mainTask,
                    {
                        id:mainTask.length+1,
                        task:currTask.trim(),
                        isEdited:false
                    }
                ]
            )
        }
    }

    const handleDeleteTodo = (id:number) => {
        const deleteTaskById = mainTask.filter((task)=>task.id!==id);
        setMainTask(deleteTaskById)
    }

    
    const handleEditChangeTask= (id:number,curEditedTask:string) => {
        const textEdited = mainTask.map((task)=>{
            if(task.id === id){
                task.task = curEditedTask
            }
            return task;
        }); 

        setMainTask(textEdited)
    }

    const handleDoneTask = (id:number) => {
        const newModifiedTask = mainTask.map((task)=>{
            if(task.id === id){
                task.isEdited= false;
            }
            return task
        })
        setMainTask(newModifiedTask)
    }

    const handleEditTask = (id:number) => {
        const editingNewTask = mainTask.map((task)=>{
            if(task.id === id){
                task.isEdited=true;
            }
            return task
        })
        setMainTask(editingNewTask)
    }
    
  return (
    <div className='main-container'>
      <span>TODO APPLICATION</span>
      <AddTodoContainer handleAddTodo={handleAddTodo}/>
      <TodoListContainer 
        mainTask={mainTask} 
        handleDeleteTodo={handleDeleteTodo} 
        handleEditChangeTask={handleEditChangeTask}
        handleDoneTask={handleDoneTask}
        handleEditTask={handleEditTask}
        />
    </div>
  )
}

export default MainTodoContainer
