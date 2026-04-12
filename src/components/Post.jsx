const Post=({id,content,image,user})=>{
  return (
  <>
     <li key={id}>
          <p>{content}</p>
      {image && (
  <img
    src={URL.createObjectURL(image)}
    alt="post"
    style={{ width: 100 }}
  />
)}

    </li>
    <span>{user}</span>
  </>
  );
}

export default Post;