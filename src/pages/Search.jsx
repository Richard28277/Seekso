import React, { useState, useEffect } from 'react';
import '../App.css';
import Searchbar from '../components/Searchbar.jsx';
import { Helmet } from 'react-helmet';
import TypingEffect from '../components/TypingEffect';
import QueriesBox from '../components/QueriesBox';

async function fetchApiResponse(searchQuery, setMessage) {
  try {
    // Send a GET request to the /generate_url endpoint with the search query
    const response = await fetch(`https://seekso.pythonanywhere.com/generate_url?message=${encodeURIComponent(searchQuery)}`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Extract the chatbot's message from the response
    const chatbotMessage = data.message;

    // Set the chatbot's message in the UI or return it
    setMessage(chatbotMessage);
    return chatbotMessage;
  } catch (error) {
    console.error('Error fetching API response:', error);
    // Handle the error appropriately
  }
}



function Search() {
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get('q');
  const [message, setMessage] = useState(" "); // Set an initial loading message
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Extract the search query from the URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryParam = urlSearchParams.get('q');

    // Set the page title using the search query
    if (queryParam) {
      document.title = `${queryParam} - Seekso Search`;
    } else {
      document.title = 'Seekso Search';
    }
  }, []);
  
  useEffect(() => {
    if (searchQuery) {
    // if (searchQuery && searchQuery.endsWith('?')) {
      fetchApiResponse(searchQuery, setMessage)
        .then((response) => {
          console.log(response);

          setMessage(" "+response + "");
        })
        .catch((error) => {
          console.error('API Request Error:', error);
          // Handle errors here if needed
          setMessage("Error: Unable to fetch response"); // Update with an error message
        });
    } else {
      setMessage(
        'Hello, I am SeeksoAI, your AI-powered search assistant. To activate SeeksoAI, simply add a question mark "?" at the end of your search query.'
      );
    }
  }, [searchQuery]);


  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
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
      .topnav {
          box-shadow: ${hasScrolled ? '0 4px 3px 0.5px rgba(0, 0, 0, 0.1)' : 'none'};
      }
      .gs-title, .gs-snippet {
          font-family: sans-serif;
      }
      .gs-title { 
          font-size: 18px !important;  
      }
      .gs-title b{
        font-size: 18px !important;  
      } 
      .gs-title b, .gs-snippet b {
        font-weight: normal;
        color: red;
      }
      .gs-snippet {
        font-size: 14px !important;  
      }
      .gsc-cursor-page {
        font-size: 1em;
        padding: 2px 4px;
        border: 1px solid #ccc;
        border-radius: 10px 10px 10px 10px;
        border: 2px solid #ffffff !important;
        background: #ECECEC !important;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
      } 
  
      .gsc-control-cse .gsc-option-menu {
        border-radius: 10px 10px 10px 10px;
        -webkit-border-radius: 10px 10px 10px 10px;
        -webkit-appearance: none;
      }
      .gs-label {
        border: 5px !important;
        border-radius: 10px 10px 10px 10px;
        border: 2px solid #E1E1E1 !important;
        background: #E1E1E1 !important;
        text-decoration:none !important;
        color: #6C6C6C  !important;
        margin-left: 5px;
        margine-right: 5px;
      }
      .gs-label:hover {
        background: #C3D4E4  !important;
        transition: 0.3s;
      }
      .gs-per-result-labels {
        margin-top: 7px !important;
        margin-right: 7px !important;
      }
      `}
      </style>
      <Searchbar />
      {/* Content below */}
      <QueriesBox message={message} />
      <div className="results">
        <Helmet>
          <script
            async
            src="https://cse.google.com/cse.js?cx=b5282022c45f54ca1"
          ></script>
        </Helmet>
        <div className="gcse-searchresults-only"></div>
      </div>
    </>
  );
}

export default Search;
