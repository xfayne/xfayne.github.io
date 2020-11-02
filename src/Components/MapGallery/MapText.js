import React from 'react'
export const mapHeader = <h4 className = "light white-text"> Interactive Drive Gallery </h4>
const height = (window.screen.width/window.screen.height) >1? '100vh' : undefined
export default function MapText() {
    return (
        <div style = {{position: 'relative', zIndex: '0',height:height}}>
            <div className ="hide-on-small-only light white-text" style={{fontSize:'5.5vh'}}>TravelBloggers (in progress)<br/>
            <div style={{fontSize:'2vh'}}>Tech used: React, Redux, Node.js, Express, PassportJS, MongoDB, Google OAuth, Bootstrap</div></div>
            
            <p className = "light white-text" style={{fontSize:'2.6vh'}}>    
            During recent years I traveled a lot and took tens of thousands of photos that were slowly pilling up in 
            folders on my cloud storage. When I wanted to enjoy and watch my photos by myself or with others, I found out that the regular 
            storage folders interface is clearly not the most fun thing for that could be. <br/><br/>

            As a result I've created TravelBloggers - a platform that turn your regular cloud storage into beautiful travel blog and a 
            community for exploring itineraries and trips uploaded by other bloggers.
            <br/><br/>
            After an easy setup, we offer the user a customizable design blog based on his cloud folders pictures,
            the photos from each folder are arranged as a dated itinerary on an interactive map, making it 
            fun to navigate between and inside trips. The blog is being update behind the scences when new pictures adding to the cloud.
            <br/><br/>
            We offer users that like to plan their next trip to be inspired by other travelers and search for trips and itineraries that done by real people. If the user
            is also maintaining a blog, our algorithms can offer new trips based on his past.
           </p>
            <br/><br/>
            <div style={{position:'absolute',zIndex: '1',right:'0px',bottom:'1vh'}}>
               <a href="https://mytravelsblog.herokuapp.com/5f5a39d1b94c4c105c885fc2" className="grey darken-3 btn" style={{marginRight:'0.3vw'}}>
               <i className="material-icons right">camera_alt</i>my blog</a>
            <a href="https://travelbloggers.herokuapp.com/" className="grey darken-3 btn">
               <i className="material-icons right">web</i>visit</a><br/> 
            </div>
            
        </div>
    )
}
