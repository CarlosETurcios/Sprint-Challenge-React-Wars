import React from 'react';
import styled from 'styled-components';

export default styled.h1`
  font-family: ${props => [props.Headers.color]};
`;
