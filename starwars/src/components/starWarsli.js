import React from 'react';

function CharaCard(props) {
  return (
    <div className="title">
      <h2>Title:{props.films}</h2>
      <h2>Name:{props.name}</h2>
      <p>{props.homeworl}</p>
    </div>
  );
}

export default CharaCard;
