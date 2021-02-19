import React from 'react'
export const kebabHeader = <h4 className = "light white-text"> Kebab King iOS and Android game </h4>

const height = (window.screen.width/window.screen.height) >1? '100vh' : undefined
export default function KebabText() {
    return (
        <div style = {{position: 'relative', zIndex: '0',height:height}}>
            <div className = "hide-on-small-only light" style={{fontSize:'5vh'}}><strong>Kebab King</strong> iOS and Android game</div>
            <p className = "light" style={{fontSize:'2.7vh'}}>
            After I finished my military service I had some ideas for mobile games that I wanted to make. 
            I used a platform called GameSalad which is a visual editor (drag and drop) that provides the outer 
            shell of development and is based on behavior and logic, events and object oriented.
            <br/> <br/>
            I published a few games to Apple and Android stores and really enjoyed the whole process of creation, 
            the process of a raw idea I had in mind slowly becomes a real thing, and also changes along the way, 
            eventually becoming a product that people enjoy.
            <br/><br/>
            My favorite game was a game called 'The Kebab King' - an arcade game where you have to serve impatient customers at a kebab stand, similar to an old and nostalgic game called 
            "Falafel King". <br/><br/>The game reached the top 10 of the games in Israel in the Android Play store for a while and had over 50,000 downloads there.</p>
            <br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=FGOeqZzsAFE" className="grey darken-3 btn" style={{position:'absolute',zIndex: '1',right:'0px',bottom:'1vh'}}>
                <i className="material-icons right">movie</i>demo</a>
                
        </div>
    )
}
