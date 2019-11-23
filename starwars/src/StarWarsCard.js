import React from 'react';
import { Card, CardTitle, CardBody, CardText, Col, Row } from 'reactstrap';

function StarWarsCard(props) {
  return (
    <Col sm='6' lg='4'>
      <Card
        body
        inverse
        style={{ backgroundColor: 'rgba(100,225,225,0.5)', borderColor: 'red' }}
      >
        <CardTitle
          inverse
          style={{
            backgroundColor: '#9494b8',
            color: 'black'
          }}
        >
          Name: {props.name}
        </CardTitle>
        <CardBody>Birth Day : {props.birth_year}</CardBody>
        <CardText>gender: {props.gender}</CardText>
        <CardText>height: {props.height}</CardText>
      </Card>
    </Col>
  );
}

export default StarWarsCard;
