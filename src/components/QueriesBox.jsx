import React, { useState, useEffect } from 'react';
import '../App.css';
import TypingEffect from '../components/TypingEffect';
import '../assets/style/queriesbox.css'

const QueriesBox = ({ message }) => {
  useEffect(() => {
    // Get a reference to the 'x' button and the 'queries' div
    const closeButton = document.getElementById("closeButton");
    const queriesBox = document.getElementById("queries");

    // Add a click event listener to the 'x' button
    closeButton.addEventListener("click", function() {
      // Hide the 'queries' box by setting its display property to 'none'
      queriesBox.style.display = "none";
    });
  }, []);

  return (
    <div id="queries">
        <button id="closeButton">x</button>
        <b>Seekso AI🔍</b>
        <br />
        <TypingEffect message={message} />
    </div>
  );
}

export default QueriesBox;
