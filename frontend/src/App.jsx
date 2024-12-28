import { Routes, Route } from "react-router-dom";

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
function App() {
  return (
    <>
    <Navbar/>
    <Container className="py-5">
      <Routes>
      <Route path ="/" element = {<HomePage/>}> </Route>
      <Route path ="/about" element = {<AboutPage/>} ></Route>
      <Route path ="/login" element = {<LoginPage/>}> </Route>
      <Route path ="/register" element = {<RegisterPage/>}> </Route>

      <Route path ="/tasks" element = {<TasksPage/>}> </Route>
      <Route path ="/tasks/new" element = {<TaskFormPage/>}> </Route>
      <Route path ="/tasks/1/edit" element = {<TaskFormPage/>}> </Route>
      <Route path ="/profile" element = {<ProfilePage/>}> </Route>
      <Route path ="*" element={<NotFound/>}></Route>
    </Routes>
    </Container>
      
    </>
 );
}

export default App;
