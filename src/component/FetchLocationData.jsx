import React, { useState, useEffect } from 'react';

const FetchLocationData = () => {
  // Declare a state variable to hold the location data
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://location.mlmprotec.com/location')
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Store the fetched data in the state
        setLocationData(data);
        
      })
      .catch((error) => {
        // Set error state if there was an issue with the fetch
        setError(error.message);
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array means it runs once when the component mounts

  

  return (
    <div className="row">
      <div className="d-flex justify-content-start flex-row align-items-center">
        {/* Assuming you have a valid country flag URL or it's passed dynamically */}
        <img
          className="imageContainer small"
          src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${locationData?.countryCode?.toLowerCase()}.svg`}
          alt="Country Flag"
        />
        <p className="flag-text">{locationData?.country}</p>
      </div>
    </div>
  );
};

export default FetchLocationData;
