import React from 'react';
import styled from 'styled-components';

const DesertContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50vh; /* Adjust height as needed */
  background: linear-gradient(to top, #d2b48c, #f5deb3); /* Earthy sand colors */
  clip-path: polygon(0% 100%, 10% 85%, 20% 90%, 30% 80%, 40% 85%, 50% 75%, 60% 80%, 70% 70%, 80% 80%, 90% 75%, 100% 85%, 100% 100%);
  
  background-size: cover;
  background-repeat: repeat; /* Ensure the texture covers the entire area */
`;




const Desert = () => {
  return <DesertContainer />;
};

export default Desert;
