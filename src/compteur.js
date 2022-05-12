import React, { useState } from "react";
const Compt = () => {

     const [compt, setCompt] = useState(0)
  

    const increm = () => {
        setCompt(compt + 1)
    }
    return ( 
        
        <h2>Compteur: {compt}  
        <button onClick={increm}>incrémenter</button>
        </h2>
     );
}
 
export default Compt;