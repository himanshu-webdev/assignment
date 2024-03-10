import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './Beercard';
import Spinner from './Spinner'

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [loading, setLoading] = useState(true); // State variable for loading

  useEffect(() => {
    
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => {
        setBeers(response.data);
        setFilteredBeers(response.data);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const handleSearch = () => {
    const filtered = beers.filter(beer =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  return (
    <div className="mt-1 mb-2 mx-auto">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search beers..."
          value={searchTerm}
          id="searchField"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-transparent border-2 focus:outline-none placeholder-gray-400 text-white p-2 rounded-md cursor-text"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Display loader when loading state is true */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">  
          {filteredBeers.map(beer => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BeerList;
