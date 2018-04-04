import React from 'react';
import { Circular } from './Circular';
import { Image } from './Image';

const createInitials = (name) => {
  if (name.length <= 2) {
    return name;
  }

  const nameArr = name.split(' ');
  const initials = nameArr.length === 1 ? nameArr[0][0] : nameArr[0][0] + nameArr[1][0];
  
  return initials;
};

export const Avatar = Circular.extend.attrs({
  children: props => (props.src ? <Image src={props.src} /> : createInitials(props.name)),
});
