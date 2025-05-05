import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFoundContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #005A9C;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const HomeButton = styled(RouterLink)`
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

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <Title>404 - Page Not Found</Title>
        <Message>
          The page you are looking for does not exist or has been moved.
        </Message>
        <HomeButton to="/">Return to Home</HomeButton>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFoundPage;
