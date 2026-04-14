import { PostContext } from "../App";
import Post from "./Post";
import { useContext } from "react";
const PostList=()=>{

  const {state}=useContext(PostContext);
  return (
      state.posts.map((e)=>(
        <Post   key={e.id}{...e}/>
         
          ))
  );
 
}
export default PostList;