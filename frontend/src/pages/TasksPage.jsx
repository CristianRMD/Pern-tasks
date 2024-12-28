import { useEffect } from "react"
import { TaskCard } from "../Components/tasks/TaskCard"
import { useState } from "react"
import { useTasks } from "../context/TaskContext"
function TasksPage() {
  const {tasks,loadTasks} = useTasks()
console.log(tasks)

useEffect(()=>{
  loadTasks()
},[])

if (tasks.length === 0){
return <div>
  <h1>No hay tareass </h1>
</div>

}
  
return (
    <div  className="grid  md:grid-cols-2 lg:grid-cols-3 gap-2"
    >{tasks.map((task)=>(
       <TaskCard  key={task.id} task ={task}></TaskCard>
    )

    )}

    </div>


    )
      

  }

export default TasksPage