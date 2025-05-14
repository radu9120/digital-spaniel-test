"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { PageWidth } from "@/components/page-width";
import {
  BusinessHeadline,
  BusinessHeadlinePrimary,
  BusinessHeadlineSecondary,
  Paragraph,
} from "@/components/topography";
import Image from "next/image";
import Link from "next/link";

const CaseStudiesSection = styled.section`
  padding: 100px 0;
  background-color: white;
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

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Slide = styled.div<{ $active: boolean }>`
  width: 100%;
  display: flex;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  position: ${(props) => (props.$active ? "relative" : "absolute")};
  transition: opacity 0.5s ease;
`;

const CaseImageContainer = styled.div`
  flex: 1;
  position: relative;
  height: 450px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CaseImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const CaseContent = styled.div`
  flex: 1;
  background-color: #1e293b;
  color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

const CaseTitle = styled.h3`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-size: 2.25rem;
  margin-bottom: 20px;
  color: white;
`;

const CaseDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #e2e8f0;
`;

const ReadMoreLink = styled(Link)`
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  color: white;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 2px solid white;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 10px;
`;

const NavButton = styled.button<{ $active: boolean }>`
  background-color: ${(props) => (props.$active ? "#1E293B" : "#E2E8F0")};
  color: ${(props) => (props.$active ? "white" : "#94A3B8")};
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: ${(props) => (props.$active ? "pointer" : "default")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.$active ? "#334155" : "#E2E8F0")};
  }
`;

export const CaseStudies = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Branding for Financial App",
      description:
        "Short project description goes here. To explain what the project is all about and how we helped the client achieve their goals.",
      image: "/case-studies/branding.jpg",
      slug: "branding-financial-app",
    },
    {
      id: 2,
      title: "Medical Dashboard UI/UX",
      description:
        "Patient management dashboard designed to streamline healthcare processes and improve accessibility for medical professionals.",
      image: "/case-studies/medical-dashboard.jpg",
      slug: "medical-dashboard",
    },
    {
      id: 3,
      title: "Brand Identity System",
      description:
        "Complete brand identity system with guidelines, visual elements, and marketing collateral for a modern tech startup.",
      image: "/case-studies/brand-identity.jpg",
      slug: "brand-identity",
    },
  ];

  const handlePrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (activeSlide < caseStudies.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const canGoPrev = activeSlide > 0;
  const canGoNext = activeSlide < caseStudies.length - 1;

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
          {caseStudies.map((study, index) => (
            <Slide key={study.id} $active={index === activeSlide}>
              <CaseImageContainer>
                <CaseImage
                  src={study.image}
                  alt={study.title}
                  fill
                  priority={index === 0}
                />
              </CaseImageContainer>
              <CaseContent>
                <CaseTitle>{study.title}</CaseTitle>
                <CaseDescription>{study.description}</CaseDescription>
                <ReadMoreLink href={`/case-studies/${study.slug}`}>
                  Read more
                </ReadMoreLink>
              </CaseContent>
            </Slide>
          ))}

          <NavigationButtons>
            <NavButton
              onClick={handlePrevSlide}
              $active={canGoPrev}
              disabled={!canGoPrev}
              aria-label="Previous case study"
            >
              ←
            </NavButton>
            <NavButton
              onClick={handleNextSlide}
              $active={canGoNext}
              disabled={!canGoNext}
              aria-label="Next case study"
            >
              →
            </NavButton>
          </NavigationButtons>
        </CarouselContainer>
      </PageWidth>
    </CaseStudiesSection>
  );
};
