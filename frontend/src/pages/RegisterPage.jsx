import { Card,Input,Button,Label } from "../Components/ui"
import {useForm} from "react-hook-form"
import {useAuth} from "../context/AuthContext"
import {Link,useNavigate} from "react-router-dom"
function RegisterPage() {

  const {register,handleSubmit,formState:{errors}} = useForm()

    const navigate = useNavigate()
  const {signup,errors :signupErrors} = useAuth()
  const onSubmit = handleSubmit(async (data) => {

      const user =await signup(data)    // con axios se faciliita mucho el envio de datos al servidor
      if (user){
        navigate('/profile')
      }

  });
  

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
     <Card>
     {signupErrors &&
      ( signupErrors.map(err=> (<p className='text-red-500 text-center'>{err}</p>
      )
      )
    )
      }
     <h3 className="text-2xl font-bold">REGISTER</h3>
      
      <form onSubmit={onSubmit} >
      <Label htmlFor="username">Full Name</Label>
      <Input placeholder ="Enter full name"
      {...register("username",{required:true})}
      ></Input>
    {errors.name && <p className="text-red-500">name is required</p>}
      <Label htmlFor="email">Email</Label>
      <Input type ="email" placeholder ="Enter your email"
            {...register("email",{required:true})}

      ></Input>
    {errors.email && <p className="text-red-500">email is required</p>}
      <Label htmlFor="password">Password</Label>
      <Input type ="password" placeholder ="Enter your password"
                  {...register("password",{required:true})}

      ></Input>
    {errors.password && <p className="text-red-500">password is required</p>}


        <Button> Register </Button>
        <div className='flex justify-between my-4'>
          <p>
            Already have an account?
          </p>
          <Link to="/login" className="text-blue-500 font-bold">Login</Link>
        </div>
        
      </form>

     </Card>
    </div>
  );
}

export default RegisterPage;
