import {Card,Input, Button,Label} from '../Components/ui'
import {Link ,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
function LoginPage() {
const navigate = useNavigate()
  const {signin,errors,isAuth} = useAuth()
  const {register,handleSubmit} = useForm()
  
  const onSubmit = handleSubmit(async (data) => {
   const user = await signin(data)
   //navigate('/profile')  
    if (user){
      navigate('/profile')
    }
   
  })

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
    <Card>
      {errors &&
      ( errors.map(err=> (<p className='text-red-500 text-center'>{err}</p>
      )
      )
    )
      }


      <h1 className='text-4xl font-bold my-2 text-center'>Sign In </h1>
        <form  onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
        <Input type ="email" placeholder = "Email"
        {...register("email",{required:true}) }></Input>
        <Label htmlFor="password">Password</Label>
        <Input type ="password" placeholder = "password" 
        {...register("password",{required:true}) }></Input>
        <Button>Sign In</Button>

        <div className='flex justify-between my-4'>
          <p>
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