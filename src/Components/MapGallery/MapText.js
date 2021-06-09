import React from 'react'
import { Textfit } from 'react-textfit';

export const mapHeader = <h4 className = "light white-text"> Interactive Drive Gallery </h4>
const height = (window.screen.width/window.screen.height) >1? '100vh' : undefined
export default function MapText() {
    return (
        <div style = {{position: 'relative', zIndex: '0',height:height}}>
            <div className ="hide-on-small-only light white-text" style={{fontSize:'5.5vh'}}>Travelbook<br/>
            <div style={{fontSize:'11px'}}>Tech used: React, Redux, Node.js, Express, PassportJS, MongoDB, Google API's, Bootstrap</div></div>
            
            <Textfit mode="multi" className = "light white-text" style={{height:'85%'}}> 
              
            <p>
            In recent years, we face significant growth in the amount of data people create during their travels for the sake of 
            document their memories and sharing them with others. 
            Nevertheless, there is no convenient representation of the information and easy way to share these documentations.
            Also, Nowadays, travelers worldwide tend to plan their trips deeply, to make
            it as match as possible for them. Even though, no clever use is currently made
            of documentation from previous trips of the user and the traveling community in
            order to plan for the user a future trip and a unique personal experience.
            </p>

            <p>The above made me dedicate myself to improve the way people document, plan, and share their trips
            based on their personal preferences and experiences.</p>

            <p> Travelbook is a social network for travelers, integrates AI, that let you document, share, and plan your trips in a personally tailored way. 
            Our goal is to give our users a designed travel blog, very easy to maintain, on top of their regular cloud storage, connect them with 
            a community by exploring trips and itineraries uploaded by other bloggers and help them plan their next trip by processing their
            travel preferences and fit it a unique trip based on our trips database.</p>

            
            
            {/* <p>During recent years I traveled a lot and took loads of photos that were slowly pilling up in my 
            cloud storage folders. When I wanted to watch my photos by myself or with others, I found out that using the regular 
            storage folders interface is not the most fun experience (especially compared to the nostalgic film albums) but 
            nonetheless it can serve as a good base for a real blog. </p> */}

            {/* After an easy setup, we offer you a customizable design blog based on your cloud folders pictures. The photos 
            from each folder are arranged as a dated path on an interactive map, making it fun to navigate between 
            and inside trips. The blog is being updated behind the scenes when new pictures are added to the cloud. 
            You can connect with your friends and follow their travel experiences, or you can be inspired by other 
            travelers and reveal new trips and itineraries that were done by real people. In the future it is planned 
            to integrate algorithms that learn the users and offer new trips based on their past. */}
           </Textfit>
            <br/><br/>
            <div style={{position:'absolute',zIndex: '1',right:'0px',bottom:'1vh'}}>
               <a target="_blank" rel="noopener noreferrer" href="https://travelbloggers.herokuapp.com/user=KKB1LRsnz" className="grey darken-3 btn" style={{marginRight:'0.3vw'}}>
               <i className="material-icons right">camera_alt</i>example blog</a>
            <a target="_blank" rel="noopener noreferrer" href="https://travelbloggers.herokuapp.com/" className="grey darken-3 btn">
               <i className="material-icons right">web</i>visit</a><br/> 
            </div>
            
        </div>
    )
}
