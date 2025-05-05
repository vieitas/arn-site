import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #005A9C;
`;

const Content = styled.div`
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #333;
`;

const BackButton = styled(RouterLink)`
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

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <AboutContainer>
        <Title>About Travel + Leisure B2B</Title>
        <Content>
          <Paragraph>
            Travel + Leisure B2B (formerly Alliance Reservations Network) is a leading provider of
            innovative solutions for the travel and sports event management industry.
          </Paragraph>
          <Paragraph>
            Our main products include Trip Authority and Playbook365, designed to help businesses
            streamline their operations and provide exceptional experiences for their customers.
          </Paragraph>
        </Content>
        <BackButton to="/">Back to Home</BackButton>
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage;
