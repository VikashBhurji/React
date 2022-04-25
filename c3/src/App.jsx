import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./Routes/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element ={<Home/>}></Route>
        <Route exact path="/employees" element ={<EmployeeList/>}> </Route>
        <Route exact path="/employees/:id" element ={<EmployeeDetails/>}> </Route>
        <Route exact path="/admin" element ={<Admin/>}> </Route>
        <Route exact path="/login" element ={<Login/>}> </Route>
        <Route exact path="/logout" element ={<Logout/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
