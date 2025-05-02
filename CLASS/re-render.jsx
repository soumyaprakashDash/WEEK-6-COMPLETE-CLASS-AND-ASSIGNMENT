 //                    **************QUESTION -1************
// // RE -RENDER : REACT DID WORK TO CALCULATE  WHAT ALL SHOULD  UPADATE IN HIS COMPPONENET  , TGE COMPONENT  ACTUALLY  GOT  CALLED 
// // IT HAPPENMS WHEN :
// // 1= A STATE VARIABLE  THAT IS BEING IS USED  INSIDE A COMPPONENT CHANGES .
// // 2= A PARENT COMPONENT RE-RENDER TRIGGER ALL CHILDREN RE-RENDERING

  /* CREATE A REACT APP THAT HAS A HEADER COMPONENT THAT TAKES A LITTLE AS A PROPS AND RENDER IT INSIDE A DIV 
  THAT TOP LEVL APP COMPONENT RENDER  HEADER */

import React,{ Fragment} from "react"
import { useState } from "react"

function App() {
const [title, setTitle] = useState(" my name is sonu")
   
   function updateTitle(){
       setTitle (" my name is "+ Math.random());
    }

 return (
 <Fragment>
         <button onClick = {updateTitle}> Update the title</button>  
        <Header title = {title}> </Header>  
         <Header title = " suchi"></Header>        
        <Header title = " cf"></Header>
         <Header title = " fd"></Header>           
         
       </Fragment>
 )
}
  function Header ({title}){

     return <div>
       {title}
      </div>
  
   }
 export default App