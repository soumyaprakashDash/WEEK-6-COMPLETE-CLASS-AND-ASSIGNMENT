/*  HOOKS  : THESE FUNCTION THAT START WITH USE ARE CALLED HOOKS 
 =.> HOOKA ARE CREATE IN REACT FUNCTION THAT ALLOW YOU TO " HOOK INTO " REACT RESTART 
  AND LIFECYCLE FEATURES FROM WHEN -
  START COMPPONENTS 
   1= USE EFFECT( DATA FETCHING ,RENRENDRING,SUBSCRIPTION OR MANUALLY DONE IN DOOM MANIPULATION = > 'COMPONENTDidmount) 
    2 = USE MEMO ()
    3 = USE CALLBACKS ()
    4 = USE REF ()
     5 = USE REDUCE(),
     6= USECONTEXT(),
     7= LAYOUTEFFECT ()*/

     // use Effect

import {useEffect} from 'react';

function App (){

    useEffect(function () {
        alert ('hi')
    },[])
    return <div>
        hello sonu
    </div>
}
 export default App 
