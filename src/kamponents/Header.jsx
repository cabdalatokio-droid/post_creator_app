const Header=({user,setUser})=>{
  return(
    <div>
      <span>Welcome {user} Again</span>
     <button onClick={() => setUser("")}>Logout</button>
    </div>

  );
}
export default Header;