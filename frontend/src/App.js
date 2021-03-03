import React from 'react'
import Inputpage from "../src/input/input"
import Tabspage from "../src/useTabs"
import TitleUse from "../src/useEffect/useTitle"
import adapter from 'webrtc-adapter'
import './App.css';


 
   
const App = () => { 
  

  return(
  <div>
    <video id="localVideo" autoPlay width="480px"></video>
    <video id="remoteVideo" autoPlay width="480px"></video>
  </div>
  )
}

export default App;
