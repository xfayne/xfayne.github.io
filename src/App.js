import React, { useState } from 'react';
import KebabScreen from './Components/KebabKing/KebabScreen'
import KebabText from './Components/KebabKing/KebabText'
import MapScreen from './Components/MapGallery/MapScreen'
import MapText from './Components/MapGallery/MapText'
import EmailyText from './Components/eMaily/EmailyText'
import EmailyScreen from './Components/eMaily/EmailyScreen'
import UniText,{UniScreen} from './Components/UniProject/UniText'
import ScrollAnimation from 'react-animate-on-scroll'
import BioText,{BioImage} from './Components/BioText'

function App() {

  const [fade,setFade] = useState(false)

  function ScreenBox (props) {
    const {grid, color1, color2} = props
    const leftBox = `col ${grid==="left"?"s5":"s7"} ${color1}`
    const rightBox = `${props.align} col ${grid==="left"?"s7":"s5"} ${color2}`
    const textStyle = {height: '100vh',marginBottom:'-20px'}
    const screenStyle ={height: '100vh',marginBottom:'-20px',padding:'0'}
    return(
      <div className="row">
        <div className={leftBox} style = {grid==="left"?textStyle:screenStyle}>
            {grid==="left"?props.TextComp():<props.ScreenComp fade ={fade}/>}
          </div>
  
        <div className={rightBox} style = {grid==="right"?textStyle:screenStyle}>
            {grid==="right"?props.TextComp():<props.ScreenComp fade ={fade}/>} 
        </div>
      </div> 
    )
  }

  return (
<div className="App">
      <ScreenBox grid = 'left' color1 ='indigo darken-4' color2 ='white' TextComp={BioText} ScreenComp={BioImage}/>
      <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <ScreenBox grid = 'right' color1 ='white' color2 ='deep-orange darken-4' TextComp={MapText} ScreenComp={MapScreen}/>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <ScreenBox grid = 'left' color1 ='teal' color2 ='white' TextComp={EmailyText} ScreenComp={EmailyScreen}/>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <ScreenBox grid = 'right' color1 ='grey lighten-1' color2 ='grey lighten-1' TextComp={UniText} ScreenComp={UniScreen}/>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' animateOnce={true} afterAnimatedIn={()=>setFade(true)} >
        <ScreenBox grid = 'left' color1 ='amber accent-4' color2 ='grey darken-4' TextComp={KebabText} ScreenComp={KebabScreen} align="valign-wrapper"/>
      </ScrollAnimation>
    </div>
  )
}

export default App;
