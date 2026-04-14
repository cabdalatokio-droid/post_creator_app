import { useContext } from "react";
import { userContext } from "../App";
import { PostContext } from "../App";

const Post=({id,content,image,user})=>{
 const userValue= useContext(userContext);
 let currUser=userValue==user;
 
const{dispatch}=useContext(PostContext);

  const handleDelete=()=>{
    if(!window.confirm("are you sure you want to delete")) return ;
   dispatch({
    type:"DELETE_POST",
    payload:{postId:id}
   })
  }

  return (
  <>
     <li>
          <p>{content}</p>
      {image && (
  <img
    src={URL.createObjectURL(image)}
    alt="post"
    style={{ width: 100 }}
  />
)}
 { currUser &&(
  <button onClick={handleDelete}>Delete</button>
 )}
    </li>
    <span style={{color:currUser ? "green":"inherit"}}>{user}</span>
  </>
  );
}

export default Post;