import React from 'react';
import Searchbar from '../components/Searchbar.jsx';

function NotFound() {
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
      <Searchbar />
      <article>
        <h1> 404 Page Not Found </h1>
      </article>
    </>
  );
}

export default NotFound;