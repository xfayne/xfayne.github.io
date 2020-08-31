import React from 'react'
import profilePic from '../linkedin_pic.png'
import styled from 'styled-components'

const Styled = styled.p`
	color: #424242;
	:hover {
		color: #b71c1c;
		cursor: pointer;
	}
`
export const BioImage = () => <img src = {profilePic} alt = '' style={{maxWidth:' 100%',maxHeight: '100%'}}/>

const socialButton = (platform)=>{
  const iconClass = `fa fa-${platform} fa-stack-1x fa-inverse`
  return(
      <Styled className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" ></i>
        <i className={iconClass}></i></Styled>
        )
    }

const Footer = ()=>
<footer className = "row">
    <a href="https://www.linkedin.com/in/or-fayne-988a81190/" > {socialButton('linkedin')}</a>
    <a href="https://www.instagram.com/xfayne/" >{socialButton('instagram')}</a>
    <a href="https://www.facebook.com/or.fayne"> {socialButton('facebook')}</a>
    <a href="mailto:xfayne@gmail.com">{socialButton('envelope')}</a>
</footer>

export default function BioText() {
    return (
        <div>
            <h4 className = "light white-text">My name is Or Fayneh and I am a junior software engineer </h4>
            <p className = "light white-text" style={{fontSize:'17px'}}>I was born and raised in Israel, a breeding pool of technology and innovation. I first started programming at the age of 14, trying to learn how to hack my PlayStation Portable so that I could play free games - and very quickly found myself hacking other people PSP's for money after school. Through the PSP hacking community, I learned about the vast potential surrounding computers, programming, and the internet.
            <br/> <br/>
            I graduated from the Tel Aviv University studying bachelor's program in Computer Science and Psychology - emphasizing
            neuroscience from the computational aspects, and now willing to start my first steps in the software development field.
            <br/><br/>
            I have knowloadge in JAVA, Javascript (including Node JS, React, Redux), Python, C, HTML, CSS and MongoDB.
            <br/><br/>
            Scrolling down you can see some of my works, please feel free to use any of the social links below to contact me.
            </p>
            <div className= "center"><Footer /></div>
    </div>
    )
}
