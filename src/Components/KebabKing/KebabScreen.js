import React, { useState, useEffect } from 'react'
import background from './background.png'
import table from './table.png'
import ars from './ars.png'
import giant from './giant.png'
import girl from './girl.png'
import etiopi from './etiopi.png'
import Text,{kebabHeader} from './KebabText'

export const KebabText = Text
export const KebabHeader = kebabHeader
const sizes = {maxWidth:' 70%',maxHeight: '70%',position: 'absolute', top:'0px',transition: 'all 2s ease-out'}

export default function KebabScreen(props) {
    const [arsPos,setArsPos] = useState('0px')
    const [girlPos,setGirlPos] = useState('-30vh')
    const [giantPos,setGiantPos] = useState('0px')
    const [etpoiPos,setEtiopiPos] = useState('-30vh')

    useEffect(() => {
        if(props.fade===true){
            let timer = setTimeout(() => setArsPos('15vw'), 2000)
            timer = setTimeout(() => setGirlPos('0px'), 2500)
            timer = setTimeout(() => setEtiopiPos('20vw'), 3500)
            timer = setTimeout(() => setGiantPos('32vw'), 5000)
        }
        //return () => clearTimeout(timer);
      }, [props]);

    return (
        <div style = {{position: 'relative', zIndex: '0'}}>
            
            <img src = {background} alt = '' style={{maxWidth:' 100%',maxHeight: '100%'}}/>
            <img src = {ars} alt = '' style={{...sizes, zIndex:'2', left: arsPos}}/>      
            <img src = {etiopi} alt = '' style={{...sizes, zIndex:'3',transition: 'all 6s ease-out', right: etpoiPos}}/>       
            <img src = {girl} alt = '' style={{...sizes, zIndex: '4', right: girlPos}}/>  
            <img src = {giant} alt = '' style={{...sizes, zIndex:'1',transition: 'all 5s ease-out', left: giantPos}}/>
            
            <img src = {table} alt = '' style={{maxWidth:' 100%',maxHeight: '100%',position: 'absolute', zIndex: '5', top:'0px', left:'0px'}}/>
        </div>
    )
}
