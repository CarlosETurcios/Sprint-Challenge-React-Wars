import React, { useState, useEffect } from 'react';
import CharaCard from './CharaCard';
import axios from 'axios';
import styled from 'styled-components';
//styled components
const WrappedDiv = styled.div`
  display: inline-block;
  border: solid black;

  background: lightsteelblue;
  width: 20px 20px 20px;
  margin-right: 5px;
  padding: 1rem;
  margin: 5px;
  border-radius: 8px;
`;
// thsi is the main child for the <App/
function StarWarsL(props) {
  const [starWars, setStarW] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(result => {
        console.log(result.data.results);
        setStarW(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cards">
      {starWars.map(cards => {
        return (
          <WrappedDiv>
            <CharaCard
              name={cards.name}
              gender={cards.gender}
              height={cards.height}
            />
          </WrappedDiv>
        );
      })}
    </div>
  );
}

export default StarWarsL;
