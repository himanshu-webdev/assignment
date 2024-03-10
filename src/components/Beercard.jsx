import React from 'react';

const BeerCard = ({ beer }) => {
  // Function to create a substring with limited characters
  const createLimitedDescription = (description, limit) => {
    if (description.length <= limit) {
      return description;
    }
    return description.substring(0, limit) + '...';
  };

  return (
    <div className="bg-[#2A2B44] bg-opacity-60 w-[350px] cursor-pointer rounded-md overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
      <div className="flex">
        <img 
          src={beer.image_url} 
          alt={beer.name} 
          className="w-24 h-48 object-left m-3 p-3"   
        />
      
        <div className="p-4 flex-1 relative">
          <div className="text-wrap absolute top-[15%] right-[8%]">  
            <h3 className="text-[#FFA500] text-md font-bold">{beer.name}</h3>      
            <p className="mt-2 text-[#FFFF00] text-opacity-80">
              {createLimitedDescription(beer.description, 90)}  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
