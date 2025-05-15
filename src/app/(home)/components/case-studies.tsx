"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { PageWidth } from "@/components/page-width";
import { Paragraph } from "@/components/topography";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";

const CaseStudiesSection = styled.section`
  padding: 100px 0;
  background-color: white;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 80px 0 100px; /* More padding at bottom */
    margin-bottom: 20px;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
`;

const SectionHeading = styled.h2`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-weight: bold;
  font-size: 2.75rem;
  color: var(--dark-blue);
  margin-bottom: 24px;
  text-align: center;
`;

const SectionDescription = styled(Paragraph)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.6;
`;

// Enhanced carousel that shows side slides
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;

  @media (max-width: 1200px) {
    overflow: hidden;
  }
`;

const SlidesTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 450px;

  @media (max-width: 1200px) {
    height: auto;
    margin-bottom: 6px;
  }
`;

interface SlideProps {
  $position: "left" | "center" | "right";
}

const Slide = styled.div<SlideProps>`
  position: absolute;
  display: ${(props) => (props.$position === "center" ? "flex" : "block")};
  width: ${(props) => (props.$position === "center" ? "100%" : "280px")};
  height: ${(props) => (props.$position === "center" ? "450px" : "350px")};
  opacity: ${(props) => (props.$position === "center" ? 1 : 0.7)};
  z-index: ${(props) => (props.$position === "center" ? 3 : 1)};
  left: ${(props) => {
    if (props.$position === "left") return "-300px";
    if (props.$position === "right") return "calc(100% + 20px)";
    return "0";
  }};
  transition: left 0.5s ease, opacity 0.5s ease; /* Only transition position and opacity */
  justify-content: space-between;
  gap: 0;

  @media (max-width: 1200px) {
    position: relative; /* Change to relative on mobile */
    display: ${(props) => (props.$position === "center" ? "flex" : "none")};
    width: 100%;
    height: auto;
    left: 0;
    flex-direction: column;
    gap: 0;
  }
`;

const CaseImageContainer = styled.div<{ $isMainSlide?: boolean }>`
  position: relative;
  width: ${(props) => (props.$isMainSlide ? "70%" : "100%")};
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  z-index: 1;

  @media (max-width: 1200px) {
    width: 100%;
    height: 300px;
    margin-right: 0;
  }
`;

const CaseImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const CaseContent = styled.div`
  width: 30%;
  background-color: #1e293b;
  color: white;
  padding: 25px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  align-self: center;
  border-radius: 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: none; /* Remove transitions on the text box */

  @media (max-width: 1200px) {
    position: relative;
    width: 90%;
    margin: -20px auto 0;
    padding: 28px;
    padding-bottom: 40px;
    height: auto;
    z-index: 2;
    right: auto;
  }

  @media (max-width: 768px) {
    width: 85%;
    margin: -20px auto 20px;
    padding: 22px;
  }
`;
const CaseTitle = styled.h3`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-size: 1.3rem;
  margin-bottom: 16px;
  color: white;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const CaseDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #e2e8f0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 18px;
  }
`;

const ReadMoreLink = styled(Link)`
  font-family: "Open Sans", sans-serif;
  font-size: 0.95rem;
  color: white;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 2px solid white;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
const NavigationButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
  }
`;

const NavButton = styled.button<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.6)"};
  color: ${(props) => (props.$active ? "#1E293B" : "#94A3B8")};
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 300;
  cursor: ${(props) => (props.$active ? "pointer" : "default")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)"};
  }
`;

export const CaseStudies = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  // Fixed data reference using caseStudiesData consistently
  const caseStudiesData = Array.isArray(caseStudies) ? caseStudies : [];

  const handlePrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (activeSlide < caseStudiesData.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const canGoPrev = activeSlide > 0;
  const canGoNext = activeSlide < caseStudiesData.length - 1;

  // Helper function to determine slide position
  const getSlidePosition = (index: number): "left" | "center" | "right" => {
    if (index === activeSlide) return "center";
    if (index === activeSlide - 1) return "left";
    if (index === activeSlide + 1) return "right";
    return "right";
  };

  return (
    <CaseStudiesSection>
      <PageWidth>
        <HeaderContainer>
          <SectionHeading>Case Studies</SectionHeading>
          <SectionDescription>
            Every project is different. We like to work collaboratively with our
            clients, tailoring each project to suit the needs of you and your
            business.
          </SectionDescription>
        </HeaderContainer>

        <CarouselContainer>
          <SlidesTrack>
            {caseStudiesData.map((study, index) => {
              // Only render slides that would be visible (current, previous, next)
              if (index < activeSlide - 1 || index > activeSlide + 1) {
                return null;
              }

              const isMainSlide = index === activeSlide;

              return (
                <Slide key={study.id} $position={getSlidePosition(index)}>
                  <CaseImageContainer $isMainSlide={isMainSlide}>
                    <CaseImage
                      src={study.image}
                      alt={study.title}
                      fill
                      priority={isMainSlide}
                    />
                  </CaseImageContainer>

                  {isMainSlide && (
                    <CaseContent>
                      <CaseTitle>{study.title}</CaseTitle>
                      <CaseDescription>{study.description}</CaseDescription>
                      <ReadMoreLink href={`/case-studies/${study.slug}`}>
                        Read more
                      </ReadMoreLink>
                      <NavigationButtons>
                        <NavButton
                          onClick={handlePrevSlide}
                          $active={canGoPrev}
                          disabled={!canGoPrev}
                          aria-label="Previous case study"
                        >
                          &#10094;
                        </NavButton>
                        <NavButton
                          onClick={handleNextSlide}
                          $active={canGoNext}
                          disabled={!canGoNext}
                          aria-label="Next case study"
                        >
                          &#10095;
                        </NavButton>
                      </NavigationButtons>
                    </CaseContent>
                  )}
                </Slide>
              );
            })}
          </SlidesTrack>
        </CarouselContainer>
      </PageWidth>
    </CaseStudiesSection>
  );
};
