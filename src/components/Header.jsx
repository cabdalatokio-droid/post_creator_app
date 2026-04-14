import { useContext } from "react";
import { userContext } from "../App";
const Header=({setUser})=>{
  const user=useContext(userContext);
  return (
    <div>
      <span>welocome {user}</span>
      <button onClick={()=>setUser("")}>Logout</button>
    </div>
  );
 
}
export default Header;
