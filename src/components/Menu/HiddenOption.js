import React from 'react';
import styled from 'styled-components';

const HiddenOptionEl = styled.option`
  display: none;
`;

const HiddenOptionComponent = ({ children }) => (
  <HiddenOptionEl value={children}>{children}</HiddenOptionEl>
);

export default HiddenOptionComponent;
