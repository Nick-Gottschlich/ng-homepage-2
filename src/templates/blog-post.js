// NPM
import React from 'react';
import styled from 'styled-components';

// Local
import { mainColor } from '../utils/constants';

const PaddingWrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;

const BlogPostTitle = styled.h1`
  margin: 0;
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

const BlogContent = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 7rem;
  padding-right: 7rem;
  @media (max-width: 850px) {
    padding-left: 0;
    padding-right: 0;
  }
  > * {
    margin: 0;
    padding-top: 0.5rem;
    > img {
      ${'' /* because apparently max-width doesn't work?? hacky but it does the job */} padding-left: 10rem;
      padding-right: 10rem;
      @media (max-width: 700px) {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <PaddingWrapper>
      <BlogPostTitle>{post.frontmatter.title}</BlogPostTitle>
      <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <script
        src="https://schnack.nickpgott.com/embed.js"
        data-schnack-slug={post.frontmatter.actualUrl}
        data-schnack-target=".comments-section"
      />
      <div className="comments-section" />
    </PaddingWrapper>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        actualUrl
      }
    }
  }
`;
