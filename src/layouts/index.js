// NPM
import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// Local
import { mainColor } from '../utils/constants.js';

const PageWrapper = styled.div`
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  z-index: 999;

  padding-bottom: 0.5rem;

  background-color: ${mainColor};
`;

const HomeLink = styled.h3`
  color: white;

  margin: 0;
  padding-top: 0.5rem;
  padding-right: 1.5rem;
  padding-left: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderLink = styled.h3`
  color: white;

  margin: 0;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-left: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ({ children, data }) => (
  <PageWrapper>
    <Header>
      <Link to={`/`}>
        <HomeLink>Nick Gottschlich's Homepage</HomeLink>
      </Link>
      <HeaderLinks>
        <Link to={`/`}>
          <HeaderLink>About</HeaderLink>
        </Link>
        <Link to={`/blog`} style={{ textUnderline: 'none' }}>
          <HeaderLink>Blog</HeaderLink>
        </Link>
        <Link to={`/projects`}>
          <HeaderLink>Projects</HeaderLink>
        </Link>
      </HeaderLinks>
    </Header>
    {children()}
  </PageWrapper>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
