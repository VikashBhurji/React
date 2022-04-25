import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { protectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
// import { createContext } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path={"/"} element={<Home></Home>}></Route>
      <Route path={"/login"} element={<Login></Login>}></Route>
      <Route
        path={"/employees"}
        element={<EmployeeList></EmployeeList>}
      ></Route>
      <Route
        path={"/employees/:id"}
        element={<EmployeeDetails></EmployeeDetails>}
      ></Route>
      <Route path={"/admin"} element={<Admin></Admin>}></Route>
      <Route path={"/logour"} element={<Logout></Logout>}></Route>
    </div>
  );
}

export default App;