import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizeVariants = {
  small:{
    lineWidth: 1,
    height: 24,
    iconSize: 16,
    font: 14,
  },
  large: {
    lineWidth: 2,
    height: 36,
    iconSize: 24,
    font: 18,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {

  const sizes = sizeVariants[size] ?? sizeVariants.small;

  return <Wrapper>
    <VisuallyHidden>label</VisuallyHidden>
    <IconWrapper sizes={sizes} >
      <Icon id={icon} size={sizes.iconSize} strokeWidth={sizes.lineWidth} />
    </IconWrapper>
    <Input width={width} sizes={sizes}{...delegated}/>
    <Underline lineWidth={sizes.lineWidth} />
  </Wrapper>
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  width: fit-content;

  :hover {
    color:  ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: 2px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${p => p.sizes.iconSize}px;
  cursor: text;
`

const Input = styled.input`
  width: ${p => p.width}px;
  height: ${p => p.sizes.height/16}rem;
  border: 0;
  padding-left:  ${p => p.sizes.height}px;
  font-size: ${p => p.sizes.font/16}rem;
  color: inherit;
  font-weight: 700;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const Underline = styled.div`
  position: absolute;
  bottom: 2px;
  left: 2px;
  right: 2px;
  height: ${p => p.lineWidth}px;
  border-radius: 1px;
  background: black;
`

export default IconInput;
