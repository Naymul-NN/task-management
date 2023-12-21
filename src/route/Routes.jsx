import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Register from "../signup/Register";

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
        }
      ]
    },
  ]);

  export default router;