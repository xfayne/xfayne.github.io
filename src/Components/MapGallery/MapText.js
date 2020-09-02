import React from 'react'
export const mapHeader = <h4 className = "light white-text"> Interactive Drive Gallery </h4>
const height = (window.screen.width/window.screen.height) >1? '100vh' : undefined
export default function MapText() {
    return (
        <div style = {{position: 'relative', zIndex: '0',height:height}}>
            <div className ="hide-on-small-only light white-text" style={{fontSize:'5.5vh'}}>Interactive Drive Gallery</div>
            <p className = "light white-text" style={{fontSize:'2.65vh'}}>
            We all have our photos from our lovely trips piled up in folders somewhere on the hard drive or in the cloud.
            But when we want to enjoy the memories, and watch them ourselves or with others - the regular storage 
            folders interface is clearly not the most fun thing. <br/><br/>
            As someone who enjoys both travel and photography this problem was very close to me, so I wanted to make 
            the ultimate photo gallery for my needs;
            Divided by countries around the globe, so that in each country where I traveled the photos are arranged by their locations 
            and their sub-locations on a map, and chronological routes by dates displayed on the map as well.<br/><br/>
            The app is synced with my Google Drive account so if I travel to a new place and upload new pictures
            the gallery will be updated immediately.
            <br/><br/>
            In this project I used React and Redux, and it's actually the front-end side of a larger project that I work on 
            right now - an web interface wich
            others can connect with their Google account and in a few steps will get their own friendly gallery like mine.</p>
            <br/><br/>
            <a href="https://gallery-website.herokuapp.com/" className="grey darken-3 btn" style={{position:'absolute',zIndex: '1',right:'0px',bottom:'1vh'}}>
               <i className="material-icons right">web</i>visit</a><br/>
        </div>
    )
}
