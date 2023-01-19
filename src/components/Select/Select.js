import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper role="menu">
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>

      <Display>
        {displayedValue}
        <Chevron id='chevron-down' strokeWidth="2"/>
      </Display>
    </Wrapper>
  );
};
const StyledSelect = styled.select`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

const Display = styled.div`
  font-family: 'Roboto';
  font-size: ${16/16}em;
  color: ${COLORS.gray700};

  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  
  border-radius: 8px;

  ${StyledSelect}:focus + & {
    outline: 2px solid ActiveText;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${StyledSelect}:hover + & {
    color: ${COLORS.black}
  }

`

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const Chevron = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  height: 24px;
  margin: auto;
  pointer-events: none;
`

export default Select;
