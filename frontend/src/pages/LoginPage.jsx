import {Card,Input, Button,Label} from '../Components/ui'
import {Link ,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
function LoginPage() {
const navigate = useNavigate()
  const {signin,errors:loginErrors,isAuth} = useAuth()
  const {register,handleSubmit,formState:{errors}} = useForm()
  
  const onSubmit = handleSubmit(async (data) => {
   const user = await signin(data)
   //navigate('/profile')  
    if (user){
      navigate('/tasks')
    }
   
  })

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
    <Card>
      {loginErrors &&
      ( loginErrors.map(err=> (<p className='text-red-500 text-center'>{err}</p>
      )
      )
    )
      }


      <h1 className='text-4xl font-bold my-2 text-center'>Sign In </h1>
        <form  onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
        <Input type ="email" placeholder = "Email"
        {...register("email",{required:true}) }></Input>
            {errors.email && <p className="text-red-500">email is required</p>}


        <Label htmlFor="password">Password</Label>
        <Input type ="password" placeholder = "password" 
        {...register("password",{required:true}) }></Input>
            {errors.password && <p className="text-red-500">password is required</p>}

        <Button>Sign In</Button>

        <div className='flex justify-between my-4'>
          <p className='mr-4'>
            Don't have an account? 
          </p>
          <Link to="/register" className="text-blue-500 font-bold">Register</Link>
        </div>
        </form>
      
    </Card>
    </div>

  )
}

export default LoginPage