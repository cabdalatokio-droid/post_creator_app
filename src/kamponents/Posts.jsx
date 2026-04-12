const Posts=({content,image,user})=>{
  return(
    <div>
      <li>
    <p>{
      content}</p>
    { image && (<img src={URL.createObjectURL(image)} alt="post"
    style={{ width: 100 }}/>)}
    </li>
    { user && <span>{user}</span>}
      </div>
  )
}
export default Posts;