import React from 'react'
import PredApp from './PredApp.png'

export const UniScreen = () => <div>
    <img className ="hide-on-small-only" src = {PredApp} alt = '' style={{width:'100%',height: '100vh'}}/>
    <img className ="hide-on-med-and-up" src = {PredApp} alt = '' style={{width:'100%',height: '100%'}}/></div>
export const UniHeader = 
    <h4 className = "light white-text"> RT Predictor of Cognitive Load and Stress - University Project </h4>

const height = (window.screen.width/window.screen.height) >1? '100vh' : undefined
export default function UniText() {
    return (
        <div style = {{position: 'relative', zIndex: '0',height:height}}>
            <div className ="hide-on-small-only light white-text" style={{fontSize:'5vh'}}>RT Predictor of Cognitive Load and Stress - University Project</div>
            <p className = "light white-text" style={{fontSize:'2.7vh'}}>
            In our stressful world, the maintenance of an optimal cognitive performance is a constant
            challenge. Particularly true in complex and stressful working environments, where cognitive
            performance is crucial, like pilots. This project was done at Neural computation lab cunducting a 
            research where pilots took a flying simulator with diffrent cognitive load and stress levels and mesauring physiological metrics from them.
            <br/><br/>
            The project's code was written in Matlab and Python and is divided to three logical parts: Pre-processing, machine-learning
            classifiers and RT Application.
            The prediction was based on ECG and GSR signals with two trained models from the lab's
            experiment: Random Forest classifier and Basic Neural Network (MLP) for cognitive load and stress predictions.
            The application acquires a stream of data of the signals, do processing like filtering and features extraction,
            and displying the cleared data signals. When finishing accumulating data of a
            complete experiment block session, the app calculating the final prediction and present it on the screen. 
            </p>
            <br/><br/>
            <a target="_blank" rel="noopener noreferrer" href = "https://picsor.000webhostapp.com/Project-Booklet.pdf" className="grey darken-3 btn" style={{position:'absolute',zIndex: '1',right:'0px',bottom:'1vh'}}><i className="material-icons right">book</i>read more</a>
            <br/>
        </div>
    )
}

