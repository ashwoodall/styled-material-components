import React from 'react';
import styled from 'styled-components';
import withRipple from '../../enhancers/withRipple';

const Option = styled.li`
  aria-hidden: true;
`;
const RippleOption = withRipple(Option);

const selectItem = (event, children, select, cancel) => {
  const currItem = document.activeElement;
  if (event.keyCode === 38) { // up arrow
    currItem.previousSibling ? currItem.previousSibling.focus() : currItem.focus();
  }
  if (event.keyCode === 40) { // down arrow
    currItem.nextElementSibling ? currItem.nextElementSibling.focus() : currItem.focus();
  }
  if (event.keyCode === 27) { // esc
    if (cancel) {cancel();}
  }
  if (event.keyCode === 13) { // return
    if (select) {select();}
  }
};

const MenuOptionComponent = ({ className, children, handleSelect, handleClose }) => (
  <RippleOption
    className={`${className}`}
    onClick={() => (handleSelect ? handleSelect() : () => {})}
    tabIndex="0"
    onKeyDown={(e) => {selectItem(e, children, handleSelect, handleClose);}}>
    <div className="smc-option-content" >
      {children}
    </div>
  </RippleOption>
);

const MenuOption = styled(MenuOptionComponent)`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 0px 40px 0px 16px;
  z-index: 15;
  transition-duration: 0.3s;
  &:hover {
    background-color: rgba(232, 232, 232, 1);
    cursor: pointer;
  }

  &:focus {
    background-color: rgba(232, 232, 232, 1);
    outline: none;
  }

  > .smc-option-content {
    width: auto;
  }
`;

export default MenuOption;
