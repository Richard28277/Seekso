import React, { useState } from 'react';
import '../App.css';

function Home() {
  document.title = 'Seekso';
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchQuery)
    window.location.href = `/search?q=${searchQuery}`;
  };
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LCCQQ5GS4S"
      ></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LCCQQ5GS4S');
      `}
      </script>
      <style>
        {`
        #queries {
          font-size: 14px;
          font-family: sans-serif;
          color: grey;
        }
        #queries a {
          color: grey;
          text-decoration: none;
        }
        #queries a:hover {
          color: lightcoral;
          text-decoration: underline;
        }
      `}
      </style>
      {/* menu bar */}
      <div className="topnav">
        <a href="https://infinitestudy.weebly.com/">Learn</a>
        <a href="https://volunhour.vercel.app/">VolunHour</a>
        <a href="https://github.com/Richard28277/">Contact</a>
        {/* Right menu bar */}
        <div className="topnav-right">
          <a href="/changelog">Changelog</a>
          <a href="/about">About</a>
        </div>
      </div>

      {/* Content below */}
      <div className="island">
        <img
          src= '/Infinite_Study_color.png'
          alt="Infinite Study Logo"
          width="300"
          height="120"
        />
        <div className="searchBar">
          <form name="web search" onSubmit={handleSubmit}>
            <input
              id="search"
              name="q"
              size="75"
              type="text"
              placeholder="Search the web"
              value={searchQuery}
              onChange={handleInputChange}
              required
            />
            <input
              id="rcorners"
              value="Search"
              type="submit"
              autoFocus
              style={{ cursor: 'pointer' }}
            />
          </form>
          <center style={{ fontFamily: 'sans-serif' }}>
            The Secure Search Engine for Students and Researchers
            <a href=""></a>
          </center>
        </div>
      </div>
  </>
  );
}


export default Home;
