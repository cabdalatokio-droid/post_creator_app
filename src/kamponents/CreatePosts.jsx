import { useState ,useRef} from "react";
import { nanoid } from "nanoid";

const CreatePosts=({setPosts,posts,user})=>{
   
   const[content,setContent]=useState("");
   const[image,setImage]=useState(null);

   const contentREf=useRef();
   const imageReff=useRef();
   const handle=(e)=>{
   e.preventDefault();
   const newposts={content,image,id:nanoid(),user};
   setPosts([newposts,...posts]);
   console.log(posts);
   setContent("");
   setImage(null);
   imageReff.current.value="";
   contentREf.current.focus();

   }
  return(
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handle}>
        <input type="text" placeholder="Create a post" value={content} ref={contentREf} onChange={(e)=>setContent(e.target.value)}/>
        <input type="file" ref={imageReff} onChange={(e)=>setImage(e.target.files[0])}/>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default CreatePosts;