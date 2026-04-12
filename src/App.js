
import Login from './components/Login';
import { useState,useEffect,createContext} from 'react';
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







// import { useState ,useEffect} from "react"
// import Header from "./kamponents/Header";
// import Login from "./kamponents/Login";
// import CreatePosts from "./kamponents/CreatePosts";
// import PostLists from "./kamponents/PostLists";




// const App=()=>{
//   const [user,setUser]=useState("");
//   const [posts,setPosts]=useState([]);
 
//   useEffect(()=>{
//     document.title=user ?`${user}'s feeds `:"please login";

//   },[user] );
  
//    if(!user) return <Login setUser={setUser}/>
//   return(
//     <div>
//       <Header setUser={setUser} user={user}/>
//       <CreatePosts setPosts={setPosts} posts={posts} user={user}/>
//       <PostLists posts={posts} />
      
//     </div>
    

//   );

// }
// export default App;












