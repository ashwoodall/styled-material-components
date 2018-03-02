import React from 'react';
import styled from 'styled-components';

const Select = styled.ul`
  aria-hidden: true;
`;

const MenuListComponent = ({ className, children }) => (
  <Select className={`${className} smc-menu-list`}>
    {children}
  </Select>
);

const MenuSelect = styled(MenuListComponent)`
  position: relative;
  margin: 8px 0;
  padding: 0;
  list-style: none;
  width: auto;
`;

export default MenuSelect;
