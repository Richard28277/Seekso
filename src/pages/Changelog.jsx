import React from 'react';
import Searchbar from '../components/Searchbar.jsx';

function Changelog() {
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
        <h1> Release Notes: </h1>
        <p><strong>v3.0.1</strong> [10/6/2023 4:47 p.m.]: Added 404 error warning. </p>
        <p><strong>v3.0.0</strong> [10/5/2023 4:07 p.m.]: Updated web app with React + JavaScript frontend and Python Flask server backend. Introducing SeeksoAI, a search engine assistant powered by LLMs. </p>
        <p><strong>v2.1.0</strong> [9/21/2022 11:37 p.m.]: Brand-new user interface for Seekso.</p>
        <p><strong>v2.0.2</strong> [8/28/2022 10:16 p.m.]: Bug fixes for mobile platform.</p>
        <p><strong>v2.0.1</strong> [8/27/2022 4:11 p.m.]: New user-interface. New search bar redesign.</p>
        <p><strong>v2.0.0</strong> [8/26/2022 9:05 a.m.]: New theme. Infinite Search is now Seekso!</p>
        <p><strong>v1.3.2</strong> [7/15/2022 5:12 p.m.]: Added Google Analytics.</p>
        <p><strong>v1.3.1</strong> [6/6/2022 11:10 a.m.]: Added webkit support.</p>
        <p><strong>v1.3.0</strong> [3/24/2022 9:21 p.m.]: Changed search results interface, including font style, increased font size, and new button style at bottom of results.</p>
        <p><strong>v1.2.4</strong> [3/23/2022 11:09 p.m.]: Added box shadow for search bar and search button. Transition time for search bar set to 0.02s.</p>
        <p><strong>v1.2.3</strong> [3/9/2022 8:25 p.m.]: Lowered font size for trending box from 22px to 20px.</p>
        <p><strong>v1.2.2</strong> [3/2/2022 9:41 p.m.]: Lowered image resolution throughout our homepage for even faster loading speed.</p>
        <p><strong>v1.2.1</strong> [3/2/2022 3:30 p.m.]: Updated filter system. New "Q&A" filter added to help search questions.</p>
        <p><strong>v1.2.0</strong> [2/26/2022 11:36 p.m.]: Introducing mobile version of Infinite Search. Favicon icon changed with new colors and rounded corners.</p>
        <p><strong>v1.1.5</strong> [2/24/2022 12:27 p.m.]: Added box shadow for all "articles." Resized text and spacing.</p>
        <p><strong>v1.1.4</strong> [2/23/2022 7:47 p.m.]: Changed CSS code for trending box and search button.</p>
        <p><strong>v1.1.3</strong> [2/23/2022 3:25 p.m.]: Added trending topics to homepage and search results page. Bug fixes and improvements.</p>
        <p><strong>v1.1.2</strong> [2/19/2022 3:15 p.m.]: Fixed bugs and other known issues.</p>
        <p><strong>v1.1.1</strong> [2/6/2022 2:13 p.m.]: New favicon updated, now with a blue themed logo.</p>
        <p><strong>v1.1.0</strong> [2/3/2022 8:21 p.m.]: New layout for search results page. Navigation menu position fixed to top. New color changes for hover/active links and search button. New font family added for changelog page. Readjusted text alignment. Minor bug fixes and improvements.</p>
        <p><strong>v1.0.3</strong> [1/30/2022 10:57 p.m.]: Changlog box added to homepage. Minor formating adjustments.</p>
        <p><strong>v1.0.2</strong> [1/29/2022 4:08 p.m.]: New layout for search bar. Added color change for hover and active links. Minor bug fixes and improvements.</p>
        <p><strong>v1.0.1</strong> [1/29/2022 8:41 a.m]: Bug fixes. Resized search bar and results page.</p>
        <p><strong>v1.0.0</strong> [1/28/2022 9:30 p.m.]: Created homepage and search results page. Added logo and menu bars.</p>
      </article>
    </>
  );
}

export default Changelog;