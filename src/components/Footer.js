import React from "react"

import "./Footer.css"

const Footer =() =>{

    const Day = () => {                                                                                 //Function to determine day of the week
        const arr = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
        var today = new Date();
        var currentDay = today.getDay();
        return (arr[currentDay])
    }

    return(
        <div className="card__footer">
            <div className="footer__greet">HAVE A GREAT {<Day />}</div>
            <div className="footer__copyright">created using <a target="__blank" href="https://newsapi.org/" className="footer__link">newsapi.org</a></div>
        </div>
    )
}


export default Footer