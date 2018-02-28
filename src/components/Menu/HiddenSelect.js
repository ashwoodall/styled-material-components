import React from 'react';
import styled from 'styled-components';

const HiddenSelectEl = styled.select`
  display: none;
`;

const HiddenSelectComponent = ({ children }) => (
  <HiddenSelectEl className={`smc-hidden-menu-list`}>
    {children}
  </HiddenSelectEl>
);

const HiddenSelect = styled(HiddenSelectComponent)`
`;

export default HiddenSelect;
