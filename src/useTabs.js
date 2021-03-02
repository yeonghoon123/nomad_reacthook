import React,{useState} from 'react'
const content = [
    {
        tab: "Section1",
        content: "this is Section1"
    },
    {
        tab: "Section2",
        content: "this is Section2"
    }
]

const useTabs = (initialtab, alltab) =>{
    const [currentindex,setCurrentindex] = useState(initialtab)
    return{
        currentitem : alltab[currentindex],
        changeitem : setCurrentindex
    }
}
const Tabspage = () =>{
    const {currentitem, changeitem} = useTabs(0, content)
    return(
        <>
    <div>{content.map((section, index) => (<button onClick={() => changeitem(index)}>{section.tab}</button>))}</div>
    <div>{currentitem.content}</div>
    </>
    )
}

export default Tabspage