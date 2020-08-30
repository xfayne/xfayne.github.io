import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import background from './background.png'
import table from './table.png'
import ars from './ars.png'
import giant from './giant.png'
import girl from './girl.png'
import etiopi from './etiopi.png'

const styles = (z,left)=>({maxWidth:' 70%',maxHeight: '70%',position: 'absolute', zIndex: z, top:'0px', left:left})

export default function KebabScreen() {
    return (
        
        <div style = {{position: 'relative', zIndex: '0'}}>
            <img src = {background} alt = '' style={{maxWidth:' 100%',maxHeight: '100%'}}/>
            <img src = {ars} alt = '' style={styles('2','200px')}/>      
            <img src = {etiopi} alt = '' style={styles('3','300px')}/>       
            <img src = {girl} alt = '' style={styles('4','600px')}/>  
            <img src = {giant} alt = '' style={styles('1','400px')}/>
            
            <img src = {table} alt = '' style={{maxWidth:' 100%',maxHeight: '100%',position: 'absolute', zIndex: '5', top:'0px', left:'0px'}}/>
        </div>
                      

    )
}
