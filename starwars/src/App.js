import React from 'react';
import './App.css';
import StarWarsL from './components/StarWarsL';
// import styled from 'styled-component';

// const Headers = styled.div`
//   color: yellow;
// `;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // const [starWatsP, setStarWarsP] = useState('');
  // const [cardlist, setCardList] = useState('character-List');
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsL />
    </div>
  );
};

export default App;
