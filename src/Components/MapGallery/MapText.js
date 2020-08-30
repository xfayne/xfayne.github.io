import React from 'react'

export default function MapText() {
    return (
        <div>
            <h4 className = "light white-text"> Interactive Drive Gallery </h4>
            <p className = "light white-text" style={{fontSize:'17px'}}>
            We all have our photos from our lovely trips stash in folders somewhere on the hard drive or in the cloud.
            But when we want to enjoy the memories, and watch them ourself or together with friends - the regular 
            folders interface is clearly not the most fun thing. <br/><br/>
            As someone who really loves both travel and photography this problem was very close to me, so
            I wanted to create the ultimate photo gallery for my needs;
            Divided by countries around the globe, so that in each country where I traveled the photos are arranged by their locations 
            on a map, and the locations are displayed on the map as a chronological route by dates. In addition in some places the 
            images are rearranged in sub-locations routes.<br/><br/>
            The app is synced with my Google Drive account so if I travel to a new place and upload new pictures
            the gallery will be updated immediately.
            <br/><br/>
            In this project I used React and Redux, and it's actually the front-end side of a larger project that I work on 
            right now - an web interface wich
            others can connect with their Google account and in a few steps will get their own friendly gallery like mine.</p>
            
            <a href="https://gallery-website.herokuapp.com/" className="grey darken-3 waves-effect waves-light btn right" style={{marginRight:'40px'}}>
               <i className="material-icons right">web</i>visit</a>
        </div>
    )
}
