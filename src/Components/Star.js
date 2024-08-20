import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StarContainer = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ size }) => size * 10}px;
  height: ${({ size }) => size * 10}px;
  background-color: transparent;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background-color: white;
  animation: ${({ isBlinking, delay }) =>
    isBlinking
      ? css`${blinkAnimation} 1s infinite ${delay}s`
      : 'none'};

  &:hover {
    background-color: #ffcc00;
    box-shadow: 0 0 10px 5px rgba(255, 204, 0, 0.7);
  }
`;

const InfoBox = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
  font-size: 0.9em;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Star = ({ size, top, left, info }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const delay = Math.random() * 2;

  useEffect(() => {
    setIsBlinking(!isHovered);
  }, [isHovered]);

  return (
    <>
      <StarContainer
        size={size}
        top={top}
        left={left}
        delay={delay}
        isBlinking={isBlinking}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <InfoBox isVisible={isHovered}>
        {info.split('<br>').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </InfoBox>
    </>
  );
};

export default Star;