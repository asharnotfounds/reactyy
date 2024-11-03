import { useContext } from "react";
import { Context } from "../Context/AuthContext"; 

export default function IsAuthenticated() {
  const { user } = useContext(Context); 
  if (user) {
    // console.log(user);
    return true;
  } else {
    return false;
  }
}