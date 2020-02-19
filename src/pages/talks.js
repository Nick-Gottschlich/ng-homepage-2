// NPM
import React from 'react';
import styled from 'styled-components';

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

const TalkTitle = styled.h2`
  padding-top: 1rem;
  margin: 0;
`;

const TalkSummaryText = styled.p`
  margin: 0;

  color: ${blockTextColor};
`;

export default () => (
  <PaddingWrapper>
    <PageTitle>My talks</PageTitle>
    <SummaryText>
      Links to recordings and slides from tech talks I've done.
    </SummaryText>

    <TalkTitle>
      (Ab)Using Social Media APIs: Python for Privacy's Sake
    </TalkTitle>
    <TalkSummaryText>
      Talk done at the Austin Python Monthly Meetup, April 11th 2019
    </TalkSummaryText>
    <div>
      <a href="https://nickpgott.com/my-files/AbusingSocialMediaAPIs.pdf" target="_blank">Link to Slides</a>
    </div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/wPv_pLofedU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <TalkTitle>
      Absolute Unit Testing with Jest and Enzyme
    </TalkTitle>
    <TalkSummaryText>
      Talk done at the AustinJS Monthly Meetup, Feb 18th 2020
    </TalkSummaryText>
    <div>
      <a href="https://nickpgott.com/my-files/AbsoluteUnitTests.pdf" target="_blank">Link to Slides</a>
      <br/>
      <a href="https://github.com/Nick-Gottschlich/unit-test-talk" target="_blank">Link to Example App</a>
    </div>
  </PaddingWrapper>
);
