import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import { Container, Row, Card } from 'reactstrap';
function StarWarsApi() {
  const [starWars, setStarWars] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data.results);
        setStarWars(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row>
        {starWars.map(cards => {
          return (
            <StarWarsCard
              key={Math.random()}
              name={cards.name}
              gender={cards.gender}
              height={cards.height}
              birth_year={cards.birth_year}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default StarWarsApi;
