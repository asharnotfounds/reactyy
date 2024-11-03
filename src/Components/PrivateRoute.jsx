import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/AuthContext";

export default function PrivateRoute({ children }) {
 const { user } = useContext(Context)
 if(!user) {
    return <Navigate to={"/login"}></Navigate>
 } else {
    return children;
 }
}