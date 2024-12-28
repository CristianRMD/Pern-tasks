import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./Components/navbar/Navbar.jsx";
import {Container} from "./Components/ui"

import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx"; 
import NotFound from "./pages/NotFound.jsx";
import {ProtectedRoute} from "./Components/ProtectedRoute.jsx"

import{useAuth} from "./context/AuthContext.jsx"
import { TaskProvider } from "./context/TaskContext.jsx";

function App() {

  const {isAuth,loading} = useAuth()

  if (loading) return <h1> cargando</h1>
  return (
    <>
    <Navbar/>
    <Container className="py-5">
      <Routes>

      <Route element ={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tasks"/>}>
        <Route path ="/" element = {<HomePage/>}> </Route>
        <Route path ="/about" element = {<AboutPage/>} ></Route>
        <Route path ="/login" element = {<LoginPage/>}> </Route>
        <Route path ="/register" element = {<RegisterPage/>}> </Route>
      </Route>
      
    <Route element ={<ProtectedRoute isAllowed={isAuth} redirectTo="/login"/>}>

        <Route element ={<TaskProvider>
          <Outlet/>

        </TaskProvider>}>
          <Route path ="/tasks" element = {<TasksPage/>}> </Route>
          <Route path ="/tasks/new" element = {<TaskFormPage/>}> </Route>
          <Route path ="/tasks/:id/edit" element = {<TaskFormPage/>}> </Route>

        </Route>
      <Route path ="/profile" element = {<ProfilePage/>}> </Route>
    
    </Route>
  
     <Route path ="*" element={<NotFound/>}></Route>
      
      </Routes>
    </Container>
      
    </>
 );
}

export default App;
