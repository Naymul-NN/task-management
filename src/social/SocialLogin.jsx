import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handlegooglesignin = () => {
        googleLogin(provider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You are successfully signed up',
                timer: 1500,
              });
        
              navigate('/dashbord');
    }

    return (
        <div className="p-6 flex justify-center items-center">
            <div>
                <button onClick={handlegooglesignin} className="btn hover:bg-red-400">
                    <FaGoogle></FaGoogle>
                    Go with google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;