import React from 'react'
import profilePic from '../linkedin_pic.png'
import styled from 'styled-components'

const Styled = styled.p`
	color: #424242;
    :hover {color: #b71c1c; cursor: pointer;}`

const desktopScreen = (window.screen.width/window.screen.height) >1
const imageStyle = {maxWidth:'100%',maxHeight: '100%'}

export const BioImage = () => 
    <div style ={desktopScreen?{display:'flex', height:'100vh'}:undefined}>
        <img src = {profilePic} alt = '' style={desktopScreen?{...imageStyle, marginTop:'auto'}:imageStyle}/>
    </div>

const socialButton = (platform)=>
    <Styled className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" ></i>
        <i className={`fa fa-${platform} fa-stack-1x fa-inverse`}></i>
    </Styled>

const Footer = ()=>
<div className = "row center" style={{display:'0px'}}>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/or-fayne-988a81190/" > {socialButton('linkedin')}</a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/xfayne/" >{socialButton('instagram')}</a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/or.fayne"> {socialButton('facebook')}</a>
    <a target="_blank" rel="noopener noreferrer" href="mailto:xfayne@gmail.com">{socialButton('envelope')}</a>
</div>

export const BioHeader = <h4 className = "light white-text">My name is Or Fayne and I am a junior software engineer </h4>

export default () =>
    <div>
    <div className ="hide-on-small-only light white-text" style={{fontSize:'5vh',marginBottom:'1vh'}}>
        My name is Or Fayne and I am a junior software engineer</div>
    <div className = "light white-text" style={{fontSize:'2.7vh'}}>I was born and raised in Israel, 
    a breeding pool of technology and innovation. I first started programming at the age of 14, trying to 
    learn how to hack my PlayStation Portable so that I could play free games - and very quickly found myself 
    hacking other people PSP's for money after school. Through the PSP hacking community, I learned about 
    the vast potential surrounding computers, programming, and the internet.
    <br/> <br/>
    I graduated from the Tel Aviv University studying bachelor's program in Computer Science and Psychology - emphasizing
    neuroscience from the computational aspects, and now willing to start my first steps in the software development field.
    <br/><br/>
    I have knowledge in JAVA, Javascript (including Node JS, React, Redux), Python, C, HTML, CSS and MongoDB. In my free time, 
    I like to practice it by developing code projects on areas that interest me, scrolling down you can see some of my works. 
    <Footer />
    </div>
    
</div>
