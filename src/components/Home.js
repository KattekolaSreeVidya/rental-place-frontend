import React, { useState } from 'react';
import PropertyList from './PropertyList';

function Home() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <h2>Find Your Dream Rental</h2>
      <input 
        type="text" 
        placeholder="Search for properties..." 
        value={search} 
        onChange={handleSearchChange} 
      />
      <PropertyList search={search} />
    </div>
  );
}

export default Home;
