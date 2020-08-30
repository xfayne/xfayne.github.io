import React from 'react'
import profilePic from '../linkedin_pic.png'
export const BioImage = () => <img src = {profilePic} alt = '' style={{maxWidth:' 100%',maxHeight: '100%'}}/>

const Footer = ()=>
<footer>
  <p>
    <a href="https://www.linkedin.com/in/or-fayne-988a81190/" className="fa-stack fa-lg text">
      <i className="fa fa-circle fa-stack-2x" style={{color:'#424242'}}></i>
      <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
    </a>
    <a href="https://www.instagram.com/xfayne/" className="fa-stack fa-lg text-dark">
      <i className="fa fa-circle fa-stack-2x"style={{color:'#424242'}}></i>
      <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
    </a>
    <a href="https://www.facebook.com/or.fayne" className="fa-stack fa-lg text-dark">
      <i className="fa fa-circle fa-stack-2x"style={{color:'#424242'}}></i>
      <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
    </a>
    <a href="mailto:xfayne@gmail.com" className="fa-stack fa-lg text-dark">
      <i className="fa fa-circle fa-stack-2x"style={{color:'#424242'}}></i>
      <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
    </a>
  </p>
</footer>

export default function BioText() {
    return (
        <div>
            <h4 className = "light white-text">My name is Or Fayneh and I am a junior software engineer </h4>
            <p className = "light white-text" style={{fontSize:'17px'}}>I was born and raised in Israel, a breeding pool of technology and innovation. I first started programming at the age of 14, trying to learn how to hack my PlayStation Portable so that I could play free games - and very quickly found myself hacking other people PSP's for money after school. Through the PSP hacking community, I learned about the vast potential surrounding computers, programming, and the internet.
            <br/> <br/>
            I graduated from the Tel Aviv University studying bachelor's program in Computer Science and Psychology - emphasizing
            neuroscience from the computational aspects, and now wishing to start my first steps in the software development field.
            <br/><br/>
            I have knowloadge in JAVA, Javascript (including Node JS, React, Redux), Python, C, HTML, CSS and MongoDB.
            <br/><br/>
            Scrolling down you can see some of my works, please feel free to use any of the social links below to contact me.</p>
            <div className= "center"><Footer /></div>
    </div>
    )
}
