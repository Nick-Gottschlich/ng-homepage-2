// NPM
import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// Local
import { hoverColor, blockTextColor } from '../utils/constants';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${hoverColor};
  }
`;

const PaddingWrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;

const BlogPageTitle = styled.h1`
  padding-top: 3rem;
  @media (max-width: 745px) {
    padding-top: 4.5rem;
  }
  @media (max-width: 391px) {
    padding-top: 6rem;
  }
  margin: 0;

  text-decoration: underline;
`;

const NumPosts = styled.h4`
  padding-top: 0.5rem;
  margin: 0;

  color: ${blockTextColor};
`;

const BlogPostTitle = styled.h3`
  padding-top: 2rem;
  margin: 0;
`;

const BlogPostDate = styled.span`
  font-size: 1rem;
  color: #6f7070;
`;

const BlogPostSummary = styled.p`
  padding-top: 0.5rem;
  margin: 0;

  text-decoration: none;
`;

export default ({ data }) => {
  console.log(data);
  return (
    <PaddingWrapper>
      <BlogPageTitle>Java-off-script</BlogPageTitle>
      <NumPosts>
        {data.allMarkdownRemark.totalCount} Posts (Go ahead, click them!)
      </NumPosts>
      <h2>
        The blog posts from below are archived. You can view my most recent blog posts at <a href="https://dev.to/nickgottschlich">https://dev.to/nickgottschlich</a> and <a href="https://medium.com/@nickpgott">https://medium.com/@nickpgott</a>
      </h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <StyledLink to={node.fields.slug}>
            <BlogPostTitle>
              {node.frontmatter.title}{' '}
              <BlogPostDate>--- {node.frontmatter.date}</BlogPostDate>
            </BlogPostTitle>
            <BlogPostSummary>{node.excerpt}</BlogPostSummary>
          </StyledLink>
        </div>
      ))}
    </PaddingWrapper>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
