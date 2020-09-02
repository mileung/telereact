import React from 'react';
import styled from 'styled-components';
import CenterColumn from './CenterColumn';
import { apply } from '../utils/styles';

const FeatureContainer = styled(CenterColumn).attrs({ className: '' })`
  margin: 1.75rem 0 0.5rem 0;
  ${apply(`
    flex-direction: row;
    justify-content: space-between;
  `).after('40rem')}
`;

const Feature = styled.div.attrs(({ headline, details }) => ({
  className: '',
  children: (
    <>
      <h2 className="tac">{headline}</h2>
      <p className="">{details}</p>
    </>
  ),
}))`
  &:nth-child(2) {
    margin: 0.5rem 0;
  }
  ${apply(`
    max-width: 19.5rem;
    flex: 1;
    :nth-child(2) {
      margin: 0 2rem;
    }
  `).after('40rem')}
`;

const Features = React.memo(() => {
  return (
    <FeatureContainer>
      <Feature
        headline="Lightweight"
        details="The Telereact module is less than 150 lines of code (3kB minified)."
      />
      <Feature
        headline="Simple"
        details={
          <>
            Using Telereact involves three main steps: <code>Provider</code>, <code>connect</code>,
            and <code>setState</code>.
          </>
        }
      />
      <Feature
        headline="Powerful"
        details="Telereact lets components connect to a global state, listen for specific changes, deep merge new state values, and more!"
      />
    </FeatureContainer>
  );
});

export default Features;
