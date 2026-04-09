import Login from './components/Login';
import { useState,useEffect} from 'react';
import Header from './components/Header';

const App=()=>{
 const[user,setUser]=useState(null);

  useEffect(() => {
  document.title = user ? `${user}'s feed` : "please login";
}, [user]);

  if(!user) return <Login setUser={setUser}/>

  return(
   <Header setUser={setUser} user={user}/>
  );
};

export default App;