"use client";
import React from "react";
import styled from "styled-components";
import { PageWidth } from "@/components/page-width";
import {
  BusinessHeadline,
  BusinessHeadlinePrimary,
  BusinessHeadlineSecondary,
} from "@/components/topography";
import Image from "next/image";
import Link from "next/link";

const AboutSection = styled.section`
  background-color: #f9fafb;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: white;
    z-index: 0;
  }
`;

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 100px 0 50px;
`;

const HeaderContainer = styled.div`
  margin-bottom: 60px;
  max-width: 400px;
`;

const StyledBusinessHeadline = styled(BusinessHeadline)`
  margin-bottom: 40px;
`;

// Revised image gallery with smaller sizes
const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-gap: 16px;
  max-width: 95%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

const MainImage = styled.div`
  height: 380px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 280px;
  }
`;

const RightColumn = styled.div`
  display: grid;
  grid-template-columns: 360px 230px;
  grid-template-rows: 190px 1fr;
  grid-gap: 12px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 190px 190px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 170px);
  }
`;

const TopHorizontalImage = styled.div`
  grid-column: 1;
  grid-row: 1;
  position: relative;
  overflow: hidden;
`;

const RightVerticalImage = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  height: 330px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    grid-row: 1;
    height: 190px;
  }

  @media (max-width: 768px) {
    height: 170px;
  }
`;

const BottomSquareImage = styled.div`
  grid-column: 1;
  grid-row: 2;
  height: 250px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 190px;
  }

  @media (max-width: 768px) {
    height: 170px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

// Links container
const LinksContainer = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 20px;
  padding-top: 20px;
  padding-left: 2.5%;
`;

const StyledLink = styled(Link)`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--dark-blue);
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: var(--pink);
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const About = () => {
  return (
    <AboutSection>
      <PageWidth>
        <AboutLayout>
          <HeaderContainer>
            <StyledBusinessHeadline>
              <BusinessHeadlinePrimary>What are</BusinessHeadlinePrimary>
              <BusinessHeadlineSecondary>
                we all about?
              </BusinessHeadlineSecondary>
            </StyledBusinessHeadline>
          </HeaderContainer>

          <ImageGallery>
            {/* Left column - large horizontal image */}
            <MainImage>
              <StyledImage
                src="/about/office01.png"
                alt="Team meeting around a wooden table"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
            </MainImage>

            {/* Right column with 3 images */}
            <RightColumn>
              {/* Top horizontal image */}
              <TopHorizontalImage>
                <StyledImage
                  src="/about/office03.png"
                  alt="Office with 'Punch today in the face' neon sign"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 360px"
                />
              </TopHorizontalImage>

              {/* Right vertical image */}
              <RightVerticalImage>
                <StyledImage
                  src="/about/office02.png"
                  alt="Team members collaborating on a project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 230px"
                />
              </RightVerticalImage>

              {/* Bottom square image */}
              <BottomSquareImage>
                <StyledImage
                  src="/about/office04.png"
                  alt="Office hallway with glass partitions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 250px"
                />
              </BottomSquareImage>
            </RightColumn>
          </ImageGallery>

          <LinksContainer>
            <StyledLink href="/about">About</StyledLink>
            <StyledLink href="/careers">Careers</StyledLink>
          </LinksContainer>
        </AboutLayout>
      </PageWidth>
    </AboutSection>
  );
};
