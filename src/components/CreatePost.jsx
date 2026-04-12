import { useState,useRef } from "react";
import { nanoid } from "nanoid";
const CreatePost=({setPosts,posts,user})=>{
    const[content,setContent]=useState("")
    const[image,setImage]=useState(null);

    const imageRef=useRef();
     const contentRef=useRef();
    const handleSubmit=(e)=>{
      e.preventDefault();
     
      const newPosts={content,image, id:nanoid(),user};
      setPosts([newPosts,...posts]);
      setContent("");
       setImage(null);
      imageRef.current.value="";
      contentRef.current.focus();
     
      


    }

  return (
  <div>
       <h1>CreatePost</h1>
    <form onSubmit={handleSubmit}>
       <input type="text" placeholder="post content"  value={content} ref={contentRef} onChange={(event)=>setContent(event.target.value)}/>
       <input type="file" ref={imageRef} onChange={(event)=>setImage(event.target.files[0])}/>
       <button>Submit</button>
    </form>
   
  </div>
  );
  
}

export default CreatePost;