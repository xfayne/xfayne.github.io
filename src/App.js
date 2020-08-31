import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import KebabScreen,{KebabText} from './Components/KebabKing/KebabScreen'
import MapScreen,{MapText} from './Components/MapGallery/MapScreen'
import EmailyScreen,{EmailyText} from './Components/eMaily/EmailyScreen'
import UniText,{UniScreen} from './Components/UniProject/UniText'
import BioText,{BioImage} from './Components/BioText'

  function ScreenBox (props) {
    const [fade,setFade] = useState(false)                                      //indicator if fade did finished
    const {grid, color1, color2, ScreenComp, TextComp} = props
    const leftBox = `col ${grid==="left"?"s5":"s7"} ${color1}`
    const rightBox = `${props.align} col ${grid==="left"?"s7":"s5"} ${color2}`
    const textStyle = {height: '100vh',marginBottom:'-20px'}
    const screenStyle ={height: '100vh',marginBottom:'-20px',padding:'0'}
    
    const box = () =>
    <div className="row">
        <div className={leftBox} style = {grid==="left"?textStyle:screenStyle}>
            {grid==="left"?<TextComp/>:<ScreenComp fade ={fade}/>}
          </div>
        <div className={rightBox} style = {grid==="right"?textStyle:screenStyle}>
            {grid==="right"?<TextComp/>:<ScreenComp fade ={fade}/>} 
        </div>
      </div>

    if (color1 ==='indigo darken-4') return box()                             //if bio
    return(<ScrollAnimation animateIn='fadeIn' animateOnce={true} afterAnimatedIn={()=>setFade(true)}>{box()}</ScrollAnimation>)
  }

function App() {
  return (
    <div className="App">
      <ScreenBox grid = 'left' color1 ='indigo darken-4' color2 ='white' TextComp={BioText} ScreenComp={BioImage}/>
      <ScreenBox grid = 'right' color1 ='white' color2 ='deep-orange darken-4' TextComp={MapText} ScreenComp={MapScreen}/>
      <ScreenBox grid = 'left' color1 ='teal' color2 ='white' TextComp={EmailyText} ScreenComp={EmailyScreen}/>
      <ScreenBox grid = 'right' color1 ='grey lighten-1' color2 ='grey lighten-1' TextComp={UniText} ScreenComp={UniScreen}/>
      <ScreenBox grid = 'left' color1 ='amber accent-4' color2 ='grey darken-4' TextComp={KebabText} ScreenComp={KebabScreen} align="valign-wrapper"/>   
    </div>
  )
}

export default App;
