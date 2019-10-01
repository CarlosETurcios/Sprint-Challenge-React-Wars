import React from 'react';

// styled components

function CharaCard(props) {
  return (
    <div className="title">
      <h2>Name:{props.name}</h2>
      <h2>gender:{props.gender}</h2>
      <p>height:{props.height}</p>
    </div>
  );
}

export default CharaCard;
