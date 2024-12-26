import { Routes, Route } from "react-router-dom";
import AboutPage from "./assets/pages/AboutPage.jsx";
import LoginPage from "./assets/pages/LoginPage.jsx";
import ProfilePage from "./assets/pages/ProfilePage.jsx";
import HomePage from "./assets/pages/HomePage.jsx";
import RegisterPage from "./assets/pages/RegisterPage.jsx";
import TasksPage from "./assets/pages/TasksPage.jsx";
import TaskFormPage from "./assets/pages/TaskFormPage.jsx"; 

function App() {
  return (
    <Routes>
      <Route path ="/" element = {<HomePage/>}> </Route>
      <Route path ="/about" element = {<AboutPage/>} ></Route>
      <Route path ="/login" element = {<LoginPage/>}> </Route>
      <Route path ="/register" element = {<RegisterPage/>}> </Route>

      <Route path ="/tasks" element = {<TasksPage/>}> </Route>
      <Route path ="/tasks/new" element = {<TaskFormPage/>}> </Route>
      <Route path ="/tasks/1/edit" element = {<TaskFormPage/>}> </Route>
      <Route path ="/profile" element = {<ProfilePage/>}> </Route>

    </Routes>
  );
}

export default App;
