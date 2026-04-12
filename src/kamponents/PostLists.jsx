import Posts from "./Posts";
const PostLists=({posts})=>{
  return(
    posts.map(e=>(
    <Posts key={e.id}{...e}/>
    ))
  )
}
export default PostLists;