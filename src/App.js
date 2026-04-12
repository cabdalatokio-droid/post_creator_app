import Login from './components/Login';
import { useState,useEffect} from 'react';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

const App=()=>{
 const[user,setUser]=useState(()=>localStorage.getItem("username"||null));
 const[posts,setPosts]=useState([]);

  useEffect(() => {
    if(user){
      localStorage.setItem('username',user);
    }
  document.title = user ? `${user}'s feed` : "please login";
}, [user]);

  if(!user) return <Login setUser={setUser}/>

  return(
    <div>
        <Header setUser={setUser} user={user}/>
        <CreatePost user={user} setPosts={setPosts} posts={posts}/>
        <PostList posts={posts}/>
        
   </div>
  );
};

export default App;