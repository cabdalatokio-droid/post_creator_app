const Header=({user,setUser})=>{
  return (
    <div>
      <span>welocome {user}</span>
      <button onClick={()=>setUser("")}>Logout</button>
    </div>
  );
 
}
export default Header;
