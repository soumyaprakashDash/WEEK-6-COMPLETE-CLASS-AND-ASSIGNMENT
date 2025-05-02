
//(THIS IS REACT RETURNS  )
  import React,{ Fragment} from "react"

function App() {


  return (
  <Fragment>
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