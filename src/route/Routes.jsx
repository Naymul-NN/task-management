import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Register from "../signup/Register";
import Login from "../login/Login";
import Dashbord from "../layout/Dashboard";

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
      element: <Dashbord></Dashbord>  
    }
  ]);

  export default router;