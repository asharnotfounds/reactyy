import { Navigate } from "react-router-dom";
import { signOut, auth } from '../services/firebase';

async function Logout() {
    try {
        await signOut(auth)
        return <Navigate to={"/"}></Navigate>
    } catch (error) {
        alert("There is some issue contact Developer")
    }
}

export default Logout;
