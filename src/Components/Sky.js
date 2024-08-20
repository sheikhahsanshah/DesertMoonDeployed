import React from 'react';
import styled from 'styled-components';
import Star from './Star';
import Moon from './Moon';
import Desert from './Desert';

const SkyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #0d1b2a, #1b263b, #415a77);
  overflow: hidden;
`;

const generateStarInfo = () => {
  const names = ['Sirius', 'Canopus', 'Rigil Kentaurus', 'Arcturus', 'Vega', 'Capella', 'Rigel', 'Procyon', 'Achernar', 'Betelgeuse'];
  const types = ['Main Sequence', 'Giant', 'Supergiant', 'White Dwarf', 'Neutron Star'];
  const temperatures = ['3,000K', '5,000K', '10,000K', '20,000K', '30,000K'];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    type: types[Math.floor(Math.random() * types.length)],
    temperature: temperatures[Math.floor(Math.random() * temperatures.length)],
    distance: `${Math.floor(Math.random() * 1000)} light years`
  };
};

const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 1.5 + 0.5;
    const top = Math.random() * 50 + '%';
    const left = Math.random() * 100 + '%';
    const info = generateStarInfo();

    if (!(parseFloat(top) > 5 && parseFloat(top) < 25 && parseFloat(left) > 50 && parseFloat(left) < 70)) {
      stars.push(
        <Star 
          key={i} 
          size={size} 
          color="white" 
          top={top} 
          left={left} 
          info={`Name: ${info.name}<br>Type: ${info.type}<br>Temperature: ${info.temperature}<br>Distance: ${info.distance}`}
        />
      );
    }
  }
  return stars;
};

const Sky = () => {
  return (
    <SkyContainer>
      <Moon />
      {generateStars(100)}
      <Desert />
    </SkyContainer>
  );
};

export default Sky;