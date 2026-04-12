import Post from "./Post";
const PostList=({posts})=>{
  return (
      posts.map((e)=>(
        <Post   id={e.id}{...e}/>
         
          ))
  );
 
}
export default PostList;