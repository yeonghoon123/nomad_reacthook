import React,{useEffect,useState} from "react"

const TitleUse = (initialtitle) => {
    const [title, setTitle] = useState(initialtitle)
    const titleUpdate = () =>{
        const htmltitle = document.querySelector("title")
        htmltitle.innerText = title
    }
    useEffect(titleUpdate, [title])
    return setTitle
}


const UseTitle = () =>{
    const updateTitle = TitleUse("Loading...")
    setTimeout(() => updateTitle("home"), 5000 )
    return(
        <div>

            <h1>Hello</h1>
        </div>
    )
}

export default UseTitle