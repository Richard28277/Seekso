import React, { useEffect, useState } from 'react';

function getSearchQueryFromURL() {
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get('q');

  return searchQuery || ''; // Return the search query or an empty string if it's not found
}

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState(getSearchQueryFromURL());

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/search?q=${searchQuery}`;
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="topnav">
      <a href="/">
        <img
          id="branding"
          src='/Infinite_Study_color.png'
          alt="Infinite Study Logo"
          width="90"
          height="35"
        />
      </a>
      <form name="web search" onSubmit={handleSubmit}>
        <input
          id="search"
          name="q"
          size="75"
          type="text"
          placeholder={searchQuery || "Search the web"}
          value={searchQuery} // Bind the value to the searchQuery state
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
        <div className="topnav-right">
          <a href="/changelog">Changelog</a>
          <a href="/about">About</a>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
