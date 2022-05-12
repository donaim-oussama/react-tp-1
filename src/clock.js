import { useEffect,useState } from "react"

const Clock = () => {
    const [state,setState] =  useState(0)
    
    function renderTime(){
        const time = new Date().toLocaleTimeString()
        setState(time)
    }

    useEffect(()=>{
        setInterval(renderTime, 1000)
        return () => {
            clearInterval(renderTime)
        }
    },[])
    
    return ( 
        state
     );
}

export default Clock;