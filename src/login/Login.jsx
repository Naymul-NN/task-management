import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthProvider";

const Login = () => {
  const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const { userLogin} = useContext(AuthContext);
    const [loginError,setLoginError]= useState("");

    const handleLogin = (e) =>{
      e.preventDefault();
      const email = e.target.email.value; 
      const password = e.target.password.value ;
  
      setLoginError("");

       userLogin(email,password)
       .then(result =>{
        console.log(result.user)
      //   toast.success('log in successfull')
      Swal.fire({
        title: "welcome back ",
        text: "you are login successfull",
        icon: "success"
      });
        navigate(location?.state ? location.state: "/dashbord")
       })
       .catch(error=>{
        console.error(error)
        setLoginError("opps...! Invalid email or password")
       })
  
  }
  

    return (
        <div className="mt-24">
            <div className="hero ">
  <div className="flex gap-6 lg:flex-row-reverse">
    <div className="flex-1">
      <img className="rounded-xl" src="https://i.ibb.co/HKLcWKz/animated-teaser.gif" alt="" />
    </div>
    <div className=" flex-1 shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-red-500 font-bold">{loginError}</p>
      </form>
      <p className="text-center">If you are new here! <Link to='/register' className="text-green-400 font-bold" >Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;