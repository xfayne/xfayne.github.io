import React from 'react'
import Text,{emailyHeader} from './EmailyText'
export const EmailyText= Text
export const EmailyHeader = emailyHeader
const survey1 = {
    answear1 : 512,
    answear2 : 37,
    userAnswers: ["Yes","No"],
    title : "Game Release" ,
    subject : "Thank you for downloading!" ,
    body : "Thank you for downloading our new game! Did you like it so far?",
    dateSent: "15/08/2020"
}

const survey2 = {
    answear1 : 216,
    answear2 : 68,
    answear3 : 45,
    userAnswers: ["Store", "Facebook","friend"],
    title : "Ads targeting" ,
    body : "Hi, we would like some of your input about our game. Where did you hear about it?",
    dateSent: "22/08/2020"
}

const survey3 = {
    answear1 : 35,
    answear2 : 72,
    answear3 : 66,
    answear4 : 20,
    userAnswers: ["0-2", "3-5","6-9","10+"],
    title : "Game Update #1" ,
    body : "We are happy to inform that we just released a new update! now The next of Aghanim's Trials will be set to Grand Magus ascension level. We also fixed a bug where passives would sometimes not update their values from upgrades immediately. How many time did you encounter those problems so far?",
    dateSent: "28/08/2020"
}

function renderSurveys(survey){
    return(
    <div className="col s12 m6 l6">
        <div className="card blue-grey darken-1" >
            <div className="card-content white-text">
            <span className="card-title" style ={{fontSize:'16px'}}>{survey.title}
            <p className ="right" style ={{fontSize:'10px', color:'orange'}}>Sent on {survey.dateSent}</p></span>
            <p style ={{fontSize:'10px'}}>{survey.body}</p>
            </div>
            <div className="card-action" style ={{fontSize:'10px'}}>
                {survey.userAnswers.map((ans,index)=><a key ={index}>{ans}: <div style={{color:'white', display:'inline'}}>{survey[`answear${index+1}`]}</div></a>)}
            </div>
            </div>
    </div>
  )
}

function header(){
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="left brand-logo" style={{paddingLeft:'1vw'}}>eMaily</a>
            <ul id="nav-mobile" className="right ">
                <li key ="1" style= {{backgroundColor: "#4db6ac"}}><a>Add credits</a></li>
                <li key ="4"><a>Credits: 7</a></li>
                <li key = "2"><a >Log Out</a></li>
                <li className ="hide-on-small-only" key = "3"><a>About</a></li>
            </ul>
            </div>
        </nav>
        )
    }

export default function EmailyScreen() {
    return (
        <div>
            {header()}
            <h2 className="header center light orange-text">eMaily Campaigns</h2>
            <br/>
            <div className= "container">
                <div className ="row">{renderSurveys(survey3)}{renderSurveys(survey2)}{renderSurveys(survey1)}
                <button  className="btn-floating left btn-small red" style ={{marginBottom:'10px'}} ><i className = "material-icons">add</i></button ></div>
            </div>    
        </div>
    )
}



