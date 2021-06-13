import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import KebabScreen,{KebabText,KebabHeader} from './Components/KebabKing/KebabScreen'
import MapScreen,{MapText,MapHeader} from './Components/MapGallery/MapScreen'
import EmailyScreen,{EmailyText} from './Components/eMaily/EmailyScreen'
import UniText,{UniScreen,UniHeader} from './Components/UniProject/UniText'
import BioText,{BioImage,BioHeader} from './Components/BioText'

  function ScreenBox (props) {
    const [fade,setFade] = useState(false)                                      //indicator if fade did finished
    const {grid, colorTxt, colorScreen, ScreenComp, TextComp} = props
    const leftBox = `${props.align} col ${grid==="left"?"s5":"s7"} ${grid==="left"?colorTxt:colorScreen}`
    const rightBox = `${props.align} col ${grid==="left"?"s7":"s5"} ${grid==="right"?colorTxt:colorScreen}`
    const textStyle = {height: '100vh',marginBottom:'-20px'}
    const screenStyle ={height: '100vh',marginBottom:'-20px',padding:'0'}
    
    const box = () =>
    <div className="row hide-on-small-only">
        <div className={leftBox} style = {grid==="left"?textStyle:screenStyle}>
            {grid==="left"?<TextComp/>:<ScreenComp fade ={fade}/>}
          </div>
        <div className={rightBox} style = {grid==="right"?textStyle:screenStyle}>
            {grid==="right"?<TextComp/>:<ScreenComp fade ={fade}/>} 
        </div>
      </div>

      const mobileBox =() =>
      <div className = "hide-on-med-and-up">
        <div className = {colorTxt} style = {{padding:'10px'}}>
          {props.HeaderComp}
        </div>
        <div className = {colorScreen} style = {{padding:'0',marginBottom: '-1vh'}}>
        <ScreenComp fade ={fade}/>
        </div>
        <div className = {colorTxt} style = {{padding:'30px'}}>
          <TextComp />
        </div>
      </div>

  if (colorTxt ==='indigo darken-4') return <div>{box()}{mobileBox()}</div>                            //if bio
  return(<ScrollAnimation animateIn='fadeIn' animateOnce={true} afterAnimatedIn={()=>setFade(true)}>{box()}{mobileBox()}</ScrollAnimation>)
  }

function App() {
  return (
    <div className="App">
      <ScreenBox grid = 'left' colorTxt ='indigo darken-4' colorScreen ='white' TextComp={BioText} ScreenComp={BioImage} HeaderComp ={BioHeader}/>
      <ScreenBox grid = 'right' colorTxt ='deep-orange darken-4' colorScreen ='white'  TextComp={MapText} ScreenComp={MapScreen} HeaderComp ={MapHeader}/>
      <ScreenBox grid = 'left' colorTxt ='teal' colorScreen ='teal' TextComp={UniText} ScreenComp={UniScreen} HeaderComp ={UniHeader}/>
      <ScreenBox grid = 'right'  colorTxt ='amber accent-2' colorScreen ='grey darken-4' TextComp={KebabText} ScreenComp={KebabScreen} HeaderComp ={KebabHeader} align="valign-wrapper"/>   
      <ScreenBox grid ='left' colorTxt ='blue-grey darken-1' colorScreen ='white' TextComp={EmailyText} ScreenComp={EmailyScreen} />
      <div className = "grey darken-1 white-text center-align">© 2021 Or Fayne</div>
    </div>
  )
}

export default App;
