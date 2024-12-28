import { Link,useLocation } from "react-router-dom";
import { publicRoutes,privateRoutes} from '../navbar/navigation.jsx'
import {Container} from "../ui"
import {useAuth} from "../../context/AuthContext.jsx"
import {twMerge} from "tailwind-merge"
import {BiLogOut} from "react-icons/bi"
function Navbar() {

  const {isAuth,signout,user} = useAuth()
 const location = useLocation()
  return (
    <nav className="bg-zinc-950 ">
     
     
     <Container className="flex justify-between py-3">
    <div className="flex justify-between">
    <Link to ="/">
    <h1 className="font-bold text-2xl">PERN tasks</h1>
    </Link>
    
      
      <ul className="flex  items-center justify-center md:gap-x-2">
        {isAuth ?
        <>{
        privateRoutes.map(({path,name,icon}) => ( 
          <li key={path}>
        <Link 
          className={twMerge("tex-slate-300  flex items-center px-3 py-1 gap-x-1",
            location.pathname === path && "bg-sky-500 ")}
             to={path}>
              {icon}
              <span className="hidden sm:block"> {name}</span>
              </Link>
        </li>

        ))}
        
        <li  
        className="tex-slate-300flex items-center px-3 py-1 hover:cursor-pointer"
   onClick={()=>{
          signout()
        }}>  <BiLogOut  className="w-5 h-5"/> <span className="hidden sm:block"> Logout</span> 

        </li>
        <li className="flex gap-x-1 justify-center items-center">
          <img src={user.gravatar} alt="" className="h-8 w-8 rounded-full"/>
          <span className="font-medium">
            {user.username}
          </span>
        </li>
        </>
        
        :
        
        publicRoutes.map(({path,name}) => (
          <li
  className={twMerge("tex-slate-300flex items-center px-3 py-1",
    location.pathname === path && "bg-sky-500 ")}
  key={path}
>
  <Link to={path}>{name}</Link>
</li>

        ))}
        
        
      </ul>

      </div>
      </Container> 
    </nav>
  );
}

export default Navbar;
