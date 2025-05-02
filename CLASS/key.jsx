 // **************QUESTION -2************
  /* a :LETS CREATE A SIMPLE TODO  APP THAT RENDER 3 TODOS .
     b: CREATE A TODO COMPONENT THAT ACCEPT TITLE,DESCRIPTION AS INPUT INITALIZE A STATE ARRAY THAT HAS 3 TODOS
     ITERATE OVER THE ARRAY TO RENDER ALL THE TODOS  .
     c: A BUTTON IN THE TOP LEVEL APP COMPONENT TO ADD A NEW TODO . */ 

import React,{ Fragment} from "react"
import { useState } from "react"
let counter = 4;

function App() {
const [todos ,setTodos] = useState([{
   id:1,
   title:"go to gym",
   description:"eat food"
}, {
   id:1,
   title:"go to market",
   description:"eat food"
},{
   id:1,
   title:"go to class",
   description:"eat food"
}])

function addTodo (){
   setTodos([...todos,{
       id:counter++,
       title:Math.random(),
       description:Math.random ()
   }])

}
 
 return (
   <div>
       <button onClick = {addTodo}>Add a todo</button>
       {todos.map(todo => <Todo key ={todo.id}  title = {todo.title} description = {todo.description}/>)}

   </div>
 )
}

function Todo ({title,description}){
   return <div>
       <h1>
           {title}
       </h1>
       <h5>
       {description}
       </h5>
   </div>
}

 export default App

