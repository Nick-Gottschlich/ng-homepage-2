// NPM
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

// Local
import {
  javascriptIcon,
  reactIcon,
  html5Icon,
  css3Icon,
  pythonIcon,
  gitIcon,
  githubIcon,
  nodejsIcon,
  lessIcon,
  githubContactIcon,
  twitterIcon,
  linkedinIcon,
  jenkinsIcon,
  jestIcon,
  reduxIcon,
} from '../assets/SVGs.js';
import { mainColor, hoverColor, blockTextColor } from '../utils/constants.js';

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

const ProfileImage = styled.div`
  max-width: 450px;
  padding-top: 2rem;
  margin: 0 auto;
`;

const NameText = styled.h1`
  margin: 0 auto;
  padding-top: 0.5rem;
  text-align: center;
`;

const BelowNameText = styled.h3`
  margin: 0 auto;
  padding-top: 0.5rem;
  text-align: center;

  color: ${blockTextColor};
`;

const SummaryText = styled.p`
  margin: 0 auto;
  padding-top: 0.5rem;
  text-align: center;
  max-width: 50rem;

  color: ${blockTextColor};
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${mainColor};
`;

const SkillsText = styled.h2`
  margin: 0 auto;
  padding-top: 0.5rem;
  text-align: center;

  color: white;
`;

const DevIconContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: space-around;

  padding-top: 2rem;
  width: 100%;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 0.5rem;
`;

const ContactIcon = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;

  > * {
    fill: ${mainColor};
    > * {
      fill: ${mainColor};
    }
  }

  &:hover {
    > * {
      fill: ${hoverColor};
      > * {
        fill: ${hoverColor};
      }
    }
  }
`;

const ResumeLinkContainer = styled.h3`
  margin: 0 auto;
  text-align: center;
`;

const ResumeLink = styled.a`
  color: ${mainColor};

  &:hover {
    color: ${hoverColor};
  }
`;

export default ({ data }) => (
  <div>
    <PaddingWrapper>
      <PageTitle>About Me</PageTitle>
      <ProfileImage>
        <Img sizes={data.profileImage.sizes} />
      </ProfileImage>
      <NameText>Nick Gottschlich</NameText>
      <ContactContainer>
        <ContactIcon>
          <a href={'https://github.com/Nick-Gottschlich/'} target="_blank">
            {githubContactIcon}
          </a>
        </ContactIcon>
        <ContactIcon>
          <a href={'https://twitter.com/NickGottschlich'} target="_blank">
            {twitterIcon}
          </a>
        </ContactIcon>
        <ContactIcon>
          <a
            href={'https://www.linkedin.com/in/nicholas-gottschlich/'}
            target="_blank"
          >
            {linkedinIcon}
          </a>
        </ContactIcon>
      </ContactContainer>
      <ResumeLinkContainer>
        <ResumeLink
          href={'https://nickpgott.com/my-files/CVforSite.pdf'}
          target="_blank"
        >
          Resume
        </ResumeLink>
      </ResumeLinkContainer>
      <BelowNameText>
        Software Engineer, Anime and Video Game Nerd, Occasionally Human Being
      </BelowNameText>
      <SummaryText>
        I work at Procore, a company that builds construction management cloud software. 
        My focus is on front-end development.
        In my free time I like to build somewhat
        useless things, absolutely useless things, and sometimes sorta useful
        things.
      </SummaryText>
    </PaddingWrapper>
    <SkillsContainer>
      <PaddingWrapper>
        <SkillsText>Skills</SkillsText>
        <DevIconContainer>
          <SkillsRow>
            <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
              {javascriptIcon}
            </a>
            <a href="https://reactjs.org/">
              {reactIcon}
            </a>
            <a href="https://redux.js.org/">
              {reduxIcon}
            </a>
            <a href="https://www.python.org/">
              {pythonIcon}
            </a>
          </SkillsRow>
          <SkillsRow>
            <a href="https://nodejs.org/en/">
              {nodejsIcon}
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML">
              {html5Icon}
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              {css3Icon}
            </a>
            <a href="http://lesscss.org/">
              {lessIcon}
            </a>
          </SkillsRow>
          <SkillsRow>
            <a href="https://git-scm.com/">
              {gitIcon}
            </a>
            <a href="https://github.com/">
              {githubIcon}
            </a>
            <a href="https://jenkins.io/">
              {jenkinsIcon}
            </a>
            <a href="https://jestjs.io/">
              {jestIcon}
            </a>
          </SkillsRow>
        </DevIconContainer>
      </PaddingWrapper>
    </SkillsContainer>
  </div>
);

export const query = graphql`
  query GatsbyImageQueryIndex {
    profileImage: imageSharp(id: { regex: "assets/mephoto.jpg/" }) {
      sizes {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
