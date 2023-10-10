import React from 'react';
import Searchbar from '../components/Searchbar.jsx';
import releaseNotes from '../assets/changelog.json'

function Changelog() {
  document.title = 'Changelog | Seekso';
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LCCQQ5GS4S"></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LCCQQ5GS4S');
        `}
      </script>
      <style>
        {`
          .release-note {
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
          }
        `}
      </style>
      <Searchbar />
      <article>
        <h1>Release Notes:</h1>
        {releaseNotes.map((note, index) => (
          <div key={index} className="release-note">
            <strong>{note.version}</strong> [{note.date}]: {note.description}
          </div>
        ))}
      </article>
    </>
  );
}

export default Changelog;