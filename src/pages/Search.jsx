import React, { useState, useEffect } from 'react';
import '../App.css';
import Searchbar from '../components/Searchbar.jsx';
import { Helmet } from 'react-helmet';
import TypingEffect from '../components/TypingEffect';

async function fetchApiResponse(searchQuery, setMessage) {
  const urlResponse = await fetch('https://seekso.pythonanywhere.com/generate_url');
  if (!urlResponse.ok) {
    throw new Error(`API request failed with status ${urlResponse.status}`);
  }

  const urlData = await urlResponse.json();
  const apiUrl = urlData.url;

  const webSocket = new WebSocket(apiUrl);
  let responseString = ''; // Initialize an empty string to store the response
  let finalResponseReceived = false; // Flag to track if the final response is received

  return new Promise((resolve, reject) => {
    webSocket.onopen = () => {
      const requestPayload = {
        header: {
          app_id: 'cdf45631',
          uid: '123123',
        },
        parameter: {
          chat: {
            domain: 'general',
            temperature: 0.5,
            max_tokens: 50,
          },
        },
        payload: {
          message: {
            text: [
              { role: 'user', content: "You are Seekso AI, a search assistant. Provide short one sentence answer in English: " + searchQuery }
                  ],
          },
        },
      };

      webSocket.send(JSON.stringify(requestPayload));
    };

    webSocket.onmessage = (event) => {
      if (finalResponseReceived) {
        // Ignore subsequent responses after the final response is received
        return;
      }

      const response = JSON.parse(event.data);
      console.log('WebSocket message received:', response);

      if (response.payload && response.payload.choices && response.payload.choices.text) {
        const content = response.payload.choices.text[0].content;

        if (content !== undefined) {
          if (responseString === '') {
            responseString += content; // No space before the first content
          } else {
            responseString += `${content}`; // Add a space before subsequent content
          }
        }
      }

      if (response.header && response.header.status === 2) {
        // This is the final result, resolve the promise and set the flag
        finalResponseReceived = true;
        resolve(responseString);
        webSocket.close();
      }
    };

    webSocket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
      if (!finalResponseReceived) {
        // Reject if the final response was not received before closing
        reject(new Error('WebSocket connection closed'));
      }
    };

    webSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      if (!finalResponseReceived) {
        // Reject if the final response was not received before the error
        reject(error);
      }
    };
  });
}


function Search() {
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get('q');
  const [message, setMessage] = useState(" "); // Set an initial loading message

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
    if (searchQuery && searchQuery.endsWith('?')) {
      fetchApiResponse(searchQuery)
        .then((response) => {
          console.log(response);

          setMessage(" "+response);
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
        #queries {
          padding-top: 10px;
          padding-left: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
          float: right;
          border-radius: 15px 15px 15px 15px;
          border: 2px solid white;
          background: white;
          width: 400px;
          margin-top: 50px;
          margin-right: 50px;
          font-size: 14px;
          font-family: sans-serif;
          color: blue;
          position: fixed;
          right: 0;
          top: 10;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
        }
      @media screen and (max-width: 800px) {
        #queries {
        position: static;
      }
        #branding {
          display: none;
        }
     }
      #queries a{
        color: #FFA500;
        text-decoration: none;
      }
      #queries a:hover{
        color:#ff4500;
        text-decoration: underline;
      }
      .topnav {
        box-shadow: 0 4px 3px 0.5px rgba(0, 0, 0, 0.1);
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
      <div className="results">
        <Helmet>
          <script
            async
            src="https://cse.google.com/cse.js?cx=b5282022c45f54ca1"
          ></script>
        </Helmet>
        <div className="gcse-searchresults-only"></div>
      </div>
      <div id="queries"><b>Seekso AI🔍</b>
        <br />
        <TypingEffect message={message} />
      </div>
    </>
  );
}

export default Search;
