import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img src={user?.photoURL} alt="" />
                <h1>{user?.displayName}</h1>
        </div>
    );
};

export default UserHome;