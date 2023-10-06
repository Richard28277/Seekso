import React, { useState, useEffect } from 'react';
import '../assets/style/cursor.css'

const TypingEffect = ({ message }) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = -1;
    const intervalId = setInterval(() => {
      currentIndex++;
      setText((prevText) => prevText + message[currentIndex]);

      if (currentIndex >= message.length - 1) {
        clearInterval(intervalId);
      }
    }, 30); // Adjust the interval duration (typing speed) here

    return () => {
      clearInterval(intervalId);
    };
  }, [message]);

  useEffect(() => {
    const cursorIntervalId = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Adjust the cursor blink speed here

    return () => {
      clearInterval(cursorIntervalId);
    };
  }, []);

  return (
    <p className="grey-text">
      {text}
      <span className={`cursor ${showCursor ? 'show' : ''}`}></span>
    </p>
  );
};

export default TypingEffect;
