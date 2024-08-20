import React from 'react';
import styled from 'styled-components';

const MoonContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 60%;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle at 30% 30%, #ffffff, #e0e0e0); /* Brighter white moon */
  border-radius: 50%;
  opacity: 0.8; /* Slightly increase opacity to make it more prominent */
`;



const Moon = () => {
  return <MoonContainer />;
};

export default Moon;
