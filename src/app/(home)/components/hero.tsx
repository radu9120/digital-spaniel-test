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
import Image from "next/image";

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 80px 0 60px;
  }

  @media (max-height: 600px) {
    min-height: auto;
    padding: 100px 0;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
`;

const TextContent = styled.div`
  max-width: 45%;
  padding-right: 40px; /* Increased padding */
  position: relative;
  z-index: 5;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (min-width: 1400px) {
    max-width: 50%;
    padding-right: 60px; /* Even more space on larger screens */
  }

  @media (max-width: 1200px) {
    max-width: 50%;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 30px 40px 30px 30px; /* Added padding on right */
    color: inherit;
    text-shadow: none;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    padding: 25px;
    max-width: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 0 20px;
    width: calc(100% - 40px);
  }
`;

const StyledTag = styled(Tag)`
  display: inline-block;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    margin-bottom: 16px;
    font-size: 0.875rem;
    display: inline-block;
  }
`;

const StyledBusinessHeadline = styled(BusinessHeadline)`
  margin-bottom: 32px;

  @media (max-width: 767px) {
    margin-bottom: 24px;
    font-size: 2.25rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-bottom: 30px;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 48%; /* Reduced width from 55% */
  height: 100%;
  z-index: 1;
  background-position: right center;
  background-size: cover;
  margin-left: 60px; /* Added margin to create space */

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    width: 55%; /* Reduced width from 65% */
    margin-left: 40px; /* Less margin on smaller screens */
    &:after {
      background: none;
    }
  }

  @media (max-width: 767px) {
    opacity: 0.15;
    width: 100%;
    height: 100%;
    background-position: center;
    margin-left: 0;
    &:after {
      display: none;
    }
  }
`;

const StyledCallToAction = styled(CallToAction)`
  @media (max-width: 767px) {
    margin: 0 auto;
    font-size: 1.05rem;
    display: inline-block;
  }
`;

const MobileWrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroImageContainer style={{ backgroundImage: "url('/hero.png')" }} />
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
            <MobileWrapper>
              <StyledCallToAction href="/contact">
                Let's talk
              </StyledCallToAction>
            </MobileWrapper>
          </TextContent>
        </HeroContainer>
      </PageWidth>
    </HeroSection>
  );
};
