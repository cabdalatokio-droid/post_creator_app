import { useState,useEffect } from 'react'; // Don't forget to import useState!
import { createRoot } from 'react-dom/client';
import { nanoid } from "nanoid";

// const users = [
//   { id: 1, name: "ali", age: 24, role: "developer" },
//   { id: 2, name: "moha", age: 29, role: "manager" },
//   { id: 3, name: "daahir", age: 27, role: "ceo" },
//   { id: 4, name: "You", age: 25, role: "React Pro" } 
// ];

// function ProfileCard(props){
// const [likes,setLikes]=useState(0);
// return (<div style={{
//      backgroundColor: "lightblue",
//       fontSize: 18,
//       border: "1px solid gray",
//       padding: 20,
//       borderRadius: "10px",
//       width: "200px",
//       textAlign: "center"
// }}>
//   <h1>{props.name}</h1>
//   <p>{props.age}</p>
//   <p>{props.role}</p>
//   <button onClick={()=>setLikes(likes+1)}>
//         ❤️ {likes}
//   </button>

// </div>
// );
// }

// function App(){
//   return (
//   <div style={{
//     display:'flex',
//     justifyContent:"center",
//     gap:"20px",
//     flexWrap:"wrap",
//     padding:"20px"
//   }}>
//   {users.map((user,index)=>(
//   <ProfileCard
//   key={index}{...user}
//   />
//   ))};

//   </div>
//   );
// }




const endPoint="https://jsonplaceholder.typicode.com/posts";

const Apppp = () => {
  
  const[post,setPost]=useState(null);
  const[loading,setloading]=useState(true);
 
 useEffect(()=>{
    setloading(true);
   const fetchData= async()=>{
  const response= await fetch(endPoint);
  const  data=await response.json();
  setPost(data);
  setloading(false);
   };
   fetchData();

  
 },[]);

  if(loading) return <h1>laoding...</h1>
  return (
    <>
  {post.map((item) => (
  <li key={item.id}>
    {console.log(item)}
    <h1>{item.id}</h1>
    <h3>{item.title}</h3>
    <p>{item.body}</p>
  </li>
))}
    </>
  
  );
};






// const Apppp=()=>{
//   const [inputValue, setInputValue]=useState("");
//   const [list,setList]=useState([]);
//   const [error,setErrors]=useState("");
//   const [editId,setEditId]=useState(null);

//   const hadnelDelete=(id)=>{
//     setList(list.filter((item)=>item.id!==id));
//   }
//  const handleAddOrUpdate=(id)=>{
//    if (!inputValue.trim()) return;
//    if(editId){
//     setList(list.map(item=> item.id===editId ? {...item,text:inputValue}:item)) ;
//      setEditId(null);
//    }
//    else{setList([...list,{id:nanoid(),text:inputValue}]);
//  }
//   setInputValue("");
//   setErrors("");
// };

//  const hanadleEdit=(id)=>{
//  const iTem=list.find(item=>item.id===id);
//  setInputValue(iTem.text)
//  setEditId(id);
//  }
//   return(
//   <div>
//     <input type="text" placeholder="Add or edit item" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}/>
//     <button onClick={handleAddOrUpdate}>  {editId ? "Update" : "Add"}</button>
//     {error && <p style={{ color: "red" }}>{error}</p>}
   
//       {list.length===0 ?(
//         <p>No items yet</p>
//       ):
//        <ul>
//       {list.map((item)=>(
//      <li key={item.id}>{item.text}
//      <button onClick={()=>hanadleEdit(item.id)}>Edit</button>
//      <button onClick={()=>hadnelDelete(item.id)}>delete</button>
//      </li>
//       ))}
//     </ul>
// }
//   </div>

//   );
// }



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Apppp/>);














// const TodoList=()=>{
//  const[inputValue,setInputValue]=useState("");
//   const [list, setList] = useState([]); 
//   const [editId,setEditId]  =useState(null);

//  const handleButton = (id) => {
//   if (!inputValue.trim()) return;

//   if (editId) {
//     setList(list.map(item => 
//       item.id ===editId ? { ...item, text: inputValue } : item
//     ));
//     setEditId(null);
//   } else {
//     setList([...list, { id: nanoid(), text: inputValue }]);
//   }

//   setInputValue("");
// };
//  const handleEdit=(id)=>{
//   const iTem=list.find(e=>e.id===id);

//   setInputValue(iTem.text);
//   setEditId(id);
  
//  }

//  const handleDelete=(id)=>{
//  setList(list.filter((e)=>e.id!==id));
//  }

//  return(
//   <div style={{
//     background: "lightblue",
//   display: "flex",
//   flexDirection: "column",   // 🔥 THIS is what you're missing
//   alignItems: "center",
//   justifyContent: "center",
//   height: "100vh",           // full vertical centering
//   gap: "10px"  
  


//   }}>
//   <input type="text" placeholder="add Item" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
//    <button onClick={handleButton}>{editId ?"Update":"Add"}</button>
//    {list.length===0?(   <p>No items yet</p>)
//    :
//    <ul>
    
//     {list.map((item)=>(
//  <li key={item.id}>{item.text}
//  <button onClick={()=>handleEdit(item.id)}>Edit</button>
//  <button onClick={()=>handleDelete(item.id)}>Delete</button>
//  </li>
//     ))}
//    </ul>
//     }
//   </div>
//  );
// }

