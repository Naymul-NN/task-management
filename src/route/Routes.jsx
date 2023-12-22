import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Register from "../signup/Register";
import Login from "../login/Login";
import Dashbord from "../layout/Dashboard";
import UserHome from "../listarea/UserHome";
import Addnew from "../listarea/Addnew";
import ManageTask from "../listarea/ManageTask";
import Wellcome from "../listarea/Welcome";
import About from "../home/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },  
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
    {
      path: "dashbord",
      element: <Dashbord></Dashbord> , 
      children:[
        {
          path: 'wellcome',
          element: <Wellcome></Wellcome>
        },
        {
            path:"userHome",
            element:<UserHome></UserHome>
        },
        {
          path:"addtodo",
          element:<Addnew></Addnew>
        },
        {
          path:"managetask",
          element:<ManageTask></ManageTask>
        }
      ]
    }
  ]);

  export default router;