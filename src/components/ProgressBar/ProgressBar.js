/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const rBR = value > 98 ? (value-98)*2 : 0;
  const borderRadius = `4px ${rBR}px ${rBR}px 4px`

  let Wrapper = BaseWrapper;
  if (size === 'large') {
    Wrapper = LargeWrapper;
  } else if(size === 'medium') {
    Wrapper = MediumWrapper;
  } else if(size === 'small') {
    Wrapper = SmallWrapper;
  }

  return <Wrapper role="meter" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" >
    <VisuallyHidden>Progress {value}%</VisuallyHidden>
    <Fill width={`${value}%`} height="100" class="fill" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" borderRadius={borderRadius}>
      <rect x="0" y="0" width='100%' height="100%" fill="currentcolor"></rect>
    </Fill>
  </Wrapper>;
};

const Fill = styled.svg`
 
  height: 100%;
  box-sizing: border-box;
  border-radius: ${p => p.borderRadius};
  color: ${COLORS.primary};
`

const BaseWrapper = styled.div`
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const LargeWrapper = styled(BaseWrapper)`
  border-radius: 8px;
  padding: 4px;
  height: 24px;
`
const MediumWrapper = styled(BaseWrapper)`
  height: 12px;
  position: relative;

  ${Fill} {
    position: absolute;
    left: 0;
    top: 0;
  }
`

const SmallWrapper = styled(BaseWrapper)`
  height: 8px;
  position: relative;

  ${Fill} {
    position: absolute;
    left: 0;
    top: 0;
  }
`



export default ProgressBar;
