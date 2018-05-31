// NPM
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

// Local
import { blockTextColor, hoverColor } from '../utils/constants';

const PaddingWrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;

const PageTitle = styled.h1`
  padding-top: 3rem;
  @media (max-width: 745px) {
    padding-top: 4.5rem;
  }
  @media (max-width: 391px) {
    padding-top: 6rem;
  }
  margin: 0;
  margin: 0;

  text-decoration: underline;
`;

const SummaryText = styled.h4`
  padding-top: 0.5rem;
  margin: 0;

  color: ${blockTextColor};
`;

const ProjectLink = styled.a`
  color: ${blockTextColor};

  &:hover {
    text-decoration: none;
    color: ${hoverColor};

    > * {
      color: ${hoverColor};
    }
  }
`;

const ProjectTitle = styled.h2`
  padding-top: 1rem;
  margin: 0;
`;

const ProjectSummaryText = styled.p`
  margin: 0;

  color: ${blockTextColor};
`;

const ProjectImage = styled.div`
  min-width: 100px;
  padding-right: 1rem;
  @media (max-width: 700px) {
    margin: 0 auto;
  }
`;

const ProjectContainer = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }

  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export default ({ data }) => (
  <div>
    <PaddingWrapper>
      <PageTitle>My projects</PageTitle>
      <SummaryText>
        Click on the titles to be wisked away to project bliss.
      </SummaryText>
      {/* Social Amnesia */}
      <ProjectLink
        href="https://github.com/Nick-Gottschlich/Social-Amnesia"
        target="_blank"
      >
        <ProjectTitle>Social Amnesia</ProjectTitle>
      </ProjectLink>
      <ProjectContainer>
        <ProjectImage>
          <Img sizes={data.shrugImage.sizes} />
        </ProjectImage>
        <ProjectSummaryText>
          Social Amensia is an application to help you manage your social media
          accounts. It will wipe out posts older than a certain date unless you
          choose to white list them. It is under active development but is
          currently functional for reddit. It is written in Python.
        </ProjectSummaryText>
      </ProjectContainer>
      {/* Tril */}
      <ProjectLink
        href="https://chrome.google.com/webstore/detail/tril/dkneemnajjjblcgpdfpmcmihdjclpopj?hl=en-US&gl=US"
        target="_blank"
      >
        <ProjectTitle>Tril</ProjectTitle>
      </ProjectLink>
      <ProjectContainer>
        <ProjectImage>
          <Img sizes={data.trilImage.sizes} />
        </ProjectImage>
        <ProjectSummaryText>
          I wanted to learn how browser extensions work, so I built a{' '}
          <a
            href="https://chrome.google.com/webstore/detail/tril/dkneemnajjjblcgpdfpmcmihdjclpopj?hl=en-US&gl=US"
            target="_blank"
          >
            chrome extension
          </a>{' '}
          and a corresponding{' '}
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/tril/"
            target="_blank"
          >
            firefox extension
          </a>{' '}
          that swaps @realDonaldTrump and @dril tweets around, inspired by{' '}
          <a
            href="http://nymag.com/selectall/2016/05/dril-should-be-trumps-vice-president.html"
            target="_blank"
          >
            this article
          </a>. I, uh, apologize for the image.{' '}
          <a href="https://github.com/Nick-Gottschlich/Tril" target="_blank">
            Source code here
          </a>.
        </ProjectSummaryText>
      </ProjectContainer>
      {/* cliTerm2 */}
      <ProjectLink
        href="https://github.com/Nick-Gottschlich/cliTerm2"
        target="_blank"
      >
        <ProjectTitle>cliTerm2</ProjectTitle>
      </ProjectLink>
      <ProjectContainer>
        <ProjectImage>
          <Img sizes={data.cliTerm2Image.sizes} />
        </ProjectImage>
        <ProjectSummaryText>
          I hope to eventually grow this into a full fledged customization suite
          for{' '}
          <a href="https://iterm2.com/" target="_blank">
            iTerm2
          </a>{' '}
          that is accesible right in the terminal window through simple
          commands. Right now it has the ability to query reddit for random
          images from subreddits to change the theme of the iTerm2 window.
        </ProjectSummaryText>
      </ProjectContainer>
      {/* Binary Bros */}
      <ProjectLink
        href="https://nickpgott.com/files/WebBuild/WebBuild.html"
        target="_blank"
      >
        <ProjectTitle>Binary Bros</ProjectTitle>
      </ProjectLink>
      <ProjectContainer>
        <ProjectImage>
          <Img sizes={data.binaryBrosImage.sizes} />
        </ProjectImage>
        <ProjectSummaryText>
          A co-op M.C. Escher style puzzle-platformer where you act as a bit in
          a computer, and must work with your binary bit brother to fulfill the
          user's requests. This game was made with fellow engineering students
          while studying in the Computer Science program at the University of
          Michigan, and it's full code is{' '}
          <a
            href="https://github.com/Nick-Gottschlich/QuantumC"
            target="_blank"
          >
            open-source
          </a>.
        </ProjectSummaryText>
      </ProjectContainer>
      {/* SPARQL tutorial */}
      <ProjectLink
        href="https://docs.data.world/tutorials/sparql/index.html"
        target="_blank"
      >
        <ProjectTitle>data.world SPARQL tutorial</ProjectTitle>
      </ProjectLink>
      <ProjectContainer>
        <ProjectImage>
          <Img sizes={data.sparqlImage.sizes} />
        </ProjectImage>
        <ProjectSummaryText>
          Have you ever wanted to use the baddest data-science query langauge in
          the land? Well now you can! While I was working at data.world I led
          the development of their{' '}
          <a href="https://en.wikipedia.org/wiki/SPARQL" target="_blank">
            SPARQL
          </a>{' '}
          tutorial. Check it out!
        </ProjectSummaryText>
      </ProjectContainer>
      {/* PPMadness */}
      <ProjectLink
        href="https://github.com/Nick-Gottschlich/PPMadness"
        target="_blank"
      >
        <ProjectTitle>Party Parrot Madness</ProjectTitle>
      </ProjectLink>
      <ProjectContainer>
        <ProjectImage>
          <Img sizes={data.parrotImage.sizes} />
        </ProjectImage>
        <ProjectSummaryText>
          I wanted to learn react native so I made an simple app that spawns
          random{' '}
          <a href="http://cultofthepartyparrot.com/" target="_blank">
            party parrots
          </a>{' '}
          on your screen wherever you tap. It's useless but awesome.
        </ProjectSummaryText>
      </ProjectContainer>
    </PaddingWrapper>
  </div>
);

export const query = graphql`
  query GatsbyImageQueryProjects {
    binaryBrosImage: imageSharp(id: { regex: "assets/binaryBros.jpg/" }) {
      sizes {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    sparqlImage: imageSharp(id: { regex: "assets/sparql_logo.png/" }) {
      sizes {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    trilImage: imageSharp(id: { regex: "assets/tril.jpg/" }) {
      sizes {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    parrotImage: imageSharp(id: { regex: "assets/parrot.jpg/" }) {
      sizes {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    cliTerm2Image: imageSharp(id: { regex: "assets/iterm2.png/" }) {
      sizes {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    shrugImage: imageSharp(id: { regex: "assets/shrug.jpg/" }) {
      sizes {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
