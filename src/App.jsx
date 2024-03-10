import React from 'react';
import BeerList from './components/Beerlist';

const App = () => {
  
  return (
    <div className="min-h-screen w-full  flex flex-col bg-[#4A4E69]">
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        <BeerList />
      </div>
    </div>
  );
};


export default App;
