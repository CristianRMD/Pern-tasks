import {Card,Input,Label,Textarea,Button} from "../Components/ui";
import {useForm}  from "react-hook-form";
import { useNavigate,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { set } from "zod";
function TaskFormPage() {
const navigate = useNavigate()
const {register,handleSubmit,formState:{errors},setValue} = useForm()
const {createTask,loadTask,errors:tasksErrors,updateTask} = useTasks()
const params = useParams()
console.log(params)
const onSubmit = handleSubmit(async(data)=>{
  let task ;
  if (!params.id) {
   task =await createTask(data)

}else {
  console.log('edit mode')
  task = await updateTask(params.id,data)
} 
navigate('/tasks')

  
})




useEffect(() => {
  if(params.id){
    console.log('edit mode')
    loadTask(params.id).then((data)=>{
      console.log(data)
      setValue('title',data.title)
      setValue('description',data.description)
    })
  }
}, [])


  return (
    <div className="flex h-[80vh] justify-center items-center">
    <Card>{
      tasksErrors.map((error,i)=>(
        <p className="text-red-500" key ={i}>{error}</p>
      ))
      }
      <h2 className="text-3xl font-bold my-4">{
      params.id ? 'Edit Task' : 'Create Task'
      }</h2>
    <form onSubmit={onSubmit}>
      <Label htmlFor="title">Title</Label>
    <Input type="text" placeholder ="title" autoFocus
    {...register("title",{required:true,})}
    ></Input>
    {tasksErrors.title && (<span className="text-red-500">Title is required</span>)}
    
    <Label htmlFor="description">description</Label>
    <Textarea placeholder ="description" rows={3}
    {...register("description")}
    ></Textarea>
    {tasksErrors.description && <span className="text-red-500">This field is required</span>}
<Button>
  {params.id ? 'Edit Task' : 'Create Task'}
</Button>
    </form>

    </Card>

    </div>
  )
}

export default TaskFormPage