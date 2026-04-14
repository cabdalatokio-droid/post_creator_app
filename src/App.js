
    import Login from './components/Login';
    import { useState,useEffect,createContext,useContext,useReducer} from 'react';
    import Header from './components/Header';
    import CreatePost from './components/CreatePost';
    import PostList from './components/PostList';
    import postReducer from './postReduce';

    export const userContext=createContext();
    export const PostContext=createContext({
      posts:[]
    });


    const App=()=>{
    const[user,setUser]=useState(null) ;
    const instialPostState=useContext(PostContext)
    const [state,dispatch]=useReducer(postReducer,instialPostState);

      useEffect(() => {
      
      document.title = user ? `${user}'s feed` : "please login";
    }, [user]);

      if(!user) return <Login setUser={setUser}/>

      return(
      <PostContext.Provider value={{state,dispatch}}>
        < userContext.Provider value={user}>
            <Header setUser={setUser}/>
            <CreatePost user={user}/>
            <PostList />
            
          </userContext.Provider>
      </PostContext.Provider>
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












