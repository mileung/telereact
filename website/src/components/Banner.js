import React from 'react';
import styled, { keyframes } from 'styled-components';
import A from './A';
import { apply } from '../utils/styles';
import SpacedContainer from './SpacedContainer';
import CenterColumn from './CenterColumn';

const Header = styled.div.attrs({ className: '' })`
  align-items: flex-start;
  code {
    margin-bottom: 0.5rem;
  }
  ${apply(`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    code {
      margin-bottom: 0;
    }
  `).after('35rem')}
`;

const gradient = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const Container = styled.div.attrs({ className: '' })`
  padding: 2rem 1.5rem;
  min-height: 20rem;
  background: red;
  background: linear-gradient(45deg, #b51971, #784ba0, #2b85c5, #2cb9e0);
  background-size: 400% 100%;
  animation: ${gradient} 15s ease infinite;
  color: white;
`;

const HireMe = styled(A).attrs({
  href: 'mailto:telereact@gmail.com',
  children: <span className="bold">Hire me!</span>,
})`
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  margin-top: 2.75rem;
  font-weight: 800;
`;

const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

const Banner = React.memo(() => {
  return (
    <Container>
      <CenterColumn>
        <Header>
          <span>
            <code>npm install telereact</code>
          </span>
          <SpacedContainer row className="">
            <A href="https://www.npmjs.com/package/telereact">npm</A>
            <A href="https://github.com/MiLeung/telereact">GitHub</A>
            <HireMe />
          </SpacedContainer>
        </Header>
        <Title>Telereact</Title>
        <SubTitle>The most elegant state manager for React apps</SubTitle>
      </CenterColumn>
    </Container>
  );
});

export default Banner;
