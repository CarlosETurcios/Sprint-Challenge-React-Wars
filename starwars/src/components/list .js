import React, { useState, useEffect } from 'react';
import CharaCard from './starWarsli.js';
import axios from 'axios';
// thsi is the main child for the <App/
function StarWarsL(props) {
  const [starWars, setStarW] = useState([]);

  useEffect(() => {
    axios
      .get('http https://swapi.co/api/people')
      .then(result => {
        console.log(result.data);
        setStarW(result.data.url);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cards">
      {starWars.map(cards => {
        return (
          <CharaCard
            title={starWars.films}
            description={starWars.homeworld}
            name={starWars.name}
          />
        );
      })}
    </div>
  );
}

export default StarWarsL;
