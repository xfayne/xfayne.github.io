import React from 'react'

export default function EmailyText() {
    return (
        <div>
            <h4 className = "light white-text"> eMaily Web App </h4>
            <p className = "light white-text" style={{fontSize:'17px'}}>
            A self lerning project to build full-stack service using Node.js, MongoDB, React, and more.
            <br/> <br/>
            eMaily is a marketing tool for companies to improve their engagement and grow sales, where they can 
            send bulk email surveys campaigns to many contacts at once and track them simple and easily.
             Once a campaign is underway, the user can track his links with his recipents engagement data that continuously
             collected by the server, and can easily compare the results from his previous campaigns for optimizing his email marketing results. 
             
            <br/><br/>
            Technologies used in this project:</p>
            <ul className = "light white-text" style={{fontSize:'17px', marginLeft:'30px'}}>
                <li>Frontend: React, Redux</li>
                <li>Backend: Node.js, Express, PassportJS, MongoDB</li>
                <li>Authentication: Google OAuth</li>
                <li>Payments: Stripe</li>
                <li>Email handling: SendGrid</li>
            </ul>
           <br/>
           <a href="https://safe-oasis-70897.herokuapp.com/" className="grey darken-3 waves-effect waves-light btn right" style={{marginRight:'2vw'}}>
               <i className="material-icons right">web</i>visit</a>
        </div>
    )
}
