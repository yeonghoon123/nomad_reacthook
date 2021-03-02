import React,{useState} from "react"

const useInput = (initialvalue, validator) =>{
    const [value,setValue] = useState(initialvalue)
    const onChange = event =>{
        const {
            target : {value}
        } = event;
        let willUpdate = true;
        if(typeof validator === "function"){
            willUpdate = validator(value)
        }
        if(willUpdate) {
            setValue(value)
        }
    }
    return{value, onChange}
}

const Inputpage = () =>{
    const maxLen = value => value.length <= 10
    const name = useInput("mR",maxLen)
    return(
    <div>
        <h1>hello</h1>
        <input placeholder="name"  {...name} />    
    </div>)
}

export default Inputpage