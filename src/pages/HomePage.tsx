import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #005A9C;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Button = styled(RouterLink)`
  display: inline-block;
  background-color: #005A9C;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004a80;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeContainer>
        <Hero>
          <Title>Welcome to Travel + Leisure B2B</Title>
          <Subtitle>
            Providing innovative solutions for the travel and sports event management industry
          </Subtitle>
          <Button to="/about">Learn More</Button>
        </Hero>
      </HomeContainer>
    </Layout>
  );
};

export default HomePage;
