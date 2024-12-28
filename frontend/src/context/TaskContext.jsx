import { createContext,useState,useContext } from "react"
import { getAllTasksRequest,deleteTaskRequest,createTaskRequest,getTaskRequest,updateTaskRequest } from "../api/tasks.api"

const TaskContext  =createContext()

export const useTasks = ()=> {
const context = useContext(TaskContext)
if (!context) {
    throw new Error("useTasks must be used within a TaskProvider")
}
return context

}
export const TaskProvider = ({children})=> {
    const [tasks, setTasks] = useState([])
    const [errors, setErrors] = useState([])


    const loadTasks = async()=>{    
        const res = await getAllTasksRequest()
        setTasks(res.data)
            
    }
    const loadTask = async(id)=>{
    const res = await getTaskRequest(id)
    return res.data
    }
    const deleteTask = async(id)=>{
        const res = await deleteTaskRequest(id)
        console.log(res)
        if (res.status === 204) {
            const newTasks = tasks.filter((task)=>task.id !== id)
            setTasks(newTasks)
        }
    }

    const createTask = async(task)=>{
        try {
            const response = await createTaskRequest(task);
            setTasks([...tasks,response.data])
            return response.data
            //navigate('/tasks')
            
        } catch (error) {
            if (error.response) {
            setErrors([error.response.data])        
        }}
        }
        const updateTask = async(id,task)=>{
            try {
                const response = await updateTaskRequest(id,task);
               
                return response.data
                //navigate('/tasks')
                
            } catch (error) {
                if (error.response) {
                setErrors([error.response.data])
        }}} 


  return (
     <TaskContext.Provider value={{
        tasks
        ,loadTasks,
        deleteTask,
        createTask,
        loadTask,
        errors,
        updateTask
     }} > 
        {children}
     </TaskContext.Provider>
)
}

export default TaskContext