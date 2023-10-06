import React from 'react';
import Searchbar from '../components/Searchbar.jsx';

function AboutUs() {
  return (
    <>  
      <meta charSet="utf-8" />  
      <meta name="viewport" content="width=device-width" />  
      <Searchbar />  
      <article>  
        <h1> About Us </h1>  
        <div className="profile">  
        <img src="Infinite_Study_color.png" width="300" height="120" />
          <h2> What is Seekso? </h2>  
          <p> Seekso is a search engine for students and researchers. Seekso only searches within a filtered list of websites that are known to be reliable sources so you can find the right information with ease.  </p>  
        </div>  
        
      </article>  
    </>  
  );
}

export default AboutUs;