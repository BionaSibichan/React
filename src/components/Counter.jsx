import{useState} from "react"

function Counter(){
    let[num,setNum]=useState(1)
function increment(){
    num++
    setNum(num)
}
function decrement(){
    setNum(num--)
    
}
    return(
        <>
        <b>Count: {num}</b>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default Counter;