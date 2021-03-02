import React,{useState} from 'react'
import './App.css';

 const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event =>{ 
      const {
        target: {value}
      } = event;
      let willUpdate = true;
      if(typeof validator === "function"){
          willUpdate = validator(value)
        }
      if(willUpdate) {
        setValue(value);     
      }
    }
    return { value, onChange }
   }

   
function App() {
  const name = useInput("Mr.")
  return (
    <div className="App">
      <h1>hello </h1>
      <input placeholder="Name" {...name}/>
    </div>
  );
}

export default App;
