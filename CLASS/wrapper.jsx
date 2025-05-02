 function App (){
    return <div>
        <Cardwrapper innerComponent ={<TextComponent/>} />
    </div>
 }
  function Cardwrapper({innerComponent}){
     return <div style = {{border : "2px solid black"}}></div>
     {innerComponent}
     }
      function TextComponent (){
        return <div>
            hi there
            </div>

      }
       export default App
  