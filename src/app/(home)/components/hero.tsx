"use client";
import { PageWidth } from "@/components/page-width";
import {
  BusinessHeadline,
  BusinessHeadlinePrimary,
  BusinessHeadlineSecondary,
  CallToAction,
  Paragraph,
  Tag,
} from "@/components/topography";
import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  height: 100%;

  @media (min-width: 768px) {
    min-height: 600px;
  }
`;

const TextContent = styled.div`
  max-width: 100%;
  padding-right: 20px;

  @media (min-width: 768px) {
    max-width: 40%;
  }
`;

const StyledTag = styled(Tag)`
  display: inline-block;
  margin-bottom: 24px;
`;

const StyledBusinessHeadline = styled(BusinessHeadline)`
  margin-bottom: 32px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;
`;

const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 960px;
  height: 100vh;
  background: transparent url("hero.png") 0% 0% no-repeat padding-box;
  z-index: 1;

  @media (max-width: 1200px) {
    right: -300px;
  }

  @media (max-width: 768px) {
    opacity: 0.3;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroImageContainer />
      <PageWidth>
        <HeroContainer>
          <TextContent>
            <StyledTag>BRAND, DEV, ECOM, MARKETING</StyledTag>
            <StyledBusinessHeadline>
              <BusinessHeadlinePrimary>We unleash</BusinessHeadlinePrimary>
              <BusinessHeadlineSecondary>
                business potential
              </BusinessHeadlineSecondary>
            </StyledBusinessHeadline>
            <StyledParagraph>
              We create brand experiences which are memorable and distinct. Our
              experienced team create and develop brands with personality and
              resonance.
            </StyledParagraph>
            <CallToAction href="/contact">Let's talk</CallToAction>
          </TextContent>
        </HeroContainer>
      </PageWidth>
    </HeroSection>
  );
};
