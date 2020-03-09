import React, { useState } from 'react';

import Footer from "../src/components/Footer";                                                                //Component imports                         

import './App.css';                                                                                           //Style import    


const Header = () => {                                                                                        //Simple header component                          

  return (
    <div className="card__header">
      <div className="card__applogo" >A_NEWSAPP</div>
    </div>
  )
}

const App = () => {

  const [articleArr, setarticleArr] = useState([]);                                                           //State declaration to store results
  const [display, setDisplay] = useState(false);                                                              //State declaration for dark mode
  const URL = "http://newsapi.org/v2/sources?language=en&country=us&apiKey=2768534d73b34ced8491a2091ab81793"  //URL with query params and unique API key 

  React.useEffect(() => {                                                                                     //Equivalent to ComponentDidMount()
    fetch(URL)                                                                                                //Fetching from Endpoint
      .then(response => response.json())                                                                      //json() returning a promise that resolves to JS object
      .then(data => setarticleArr(data.sources))                                                              //storing state with results
      .catch(error => console.log(error))

  }, [])

  const night = {                                                                                             //dark mode inline style object declaration based on state 
    backgroundColor: "#061929"
  }

  return (
    <div className="card">
      <Header />
      <div className="card__feedwrap" style={display ? night : null}>
        <ul className="card__list">
          {
            articleArr.filter((item, index) => index < 24)                                                    //displaying desirables filtering and mapping through state items                      
              .map((item) => (
                <li className="card__item" key={item.id}><a className="card__link" target="__blank" href={item.url}>{item.name}</a></li>
              ))
          }
        </ul>
      </div>
      <div className="card__display" onClick={() => { setDisplay(!display) }}><span role="img" aria-label="eye_emoji">👁️</span></div>
      <div className="card__footwrap">
        <Footer />
      </div>
    </div>
  );
}

export default App;
