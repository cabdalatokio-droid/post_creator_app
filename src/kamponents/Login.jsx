import { useState } from "react";

const Login=({setUser})=>{
  const[userName,setUsername]=useState("");
   const HandleLogin=(event)=>{
   event.preventDefault();
   setUser(userName)
   }
  return(
    <div>
    <form onSubmit={HandleLogin}>
     <input type="text" placeholder="enter your userName"
     onChange={(e)=>setUsername(e.target.value)}/>
     <button type="submit">Login</button>
    </form>
    </div>

  );
  
}
export default Login;