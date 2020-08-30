import React from 'react'
import PredApp from './PredApp.png'

export const UniScreen = () => <img src = {PredApp} alt = '' style={{maxWidth:' 100%',maxHeight: '100%'}}/>

export default function UniText() {
    return (
        <div>
            <h4 className = "light"> RT Predictor of Cognitive Load and Stress - University Project </h4>
            <p className = "light" style={{fontSize:'17px'}}>
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
            <a href = "https://picsor.000webhostapp.com/Project-Booklet.pdf" className="grey darken-3 waves-effect waves-light btn right"><i className="material-icons right">book</i>read more</a>
        </div>
    )
}

