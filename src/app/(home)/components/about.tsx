"use client";
import React, { useState } from "react";
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
  padding: 100px 0;
  background-color: #f9fafb;
`;

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  margin-bottom: 60px;
  max-width: 400px;
`;

const StyledBusinessHeadline = styled(BusinessHeadline)`
  margin-bottom: 40px;
`;

// Image Gallery Layout
const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainImage = styled.div`
  grid-row: 1 / span 2;
  height: 500px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const TopRightImage = styled.div`
  height: 240px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const BottomRightImage = styled.div`
  height: 240px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

// Tabs Navigation
const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  margin-top: 20px;
`;

const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  color: ${(props) =>
    props.$active ? "var(--dark-blue)" : "var(--medium-blue-gray)"};
  padding: 12px 24px;
  cursor: pointer;
  position: relative;
  border-bottom: ${(props) =>
    props.$active ? "2px solid var(--dark-blue)" : "none"};
  margin-bottom: -1px;

  &:hover {
    color: var(--dark-blue);
  }
`;

export const About = () => {
  const [activeTab, setActiveTab] = useState("About");

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
            <MainImage>
              <StyledImage
                src="/about/team-meeting.jpg"
                alt="Team meeting around a wooden table"
                fill
                priority
              />
            </MainImage>

            <TopRightImage>
              <StyledImage
                src="/about/collaboration.jpg"
                alt="Team members collaborating on a project"
                fill
              />
            </TopRightImage>

            <BottomRightImage>
              <StyledImage
                src="/about/office-motivation.jpg"
                alt="Office with 'Punch today in the face' neon sign"
                fill
              />
            </BottomRightImage>
          </ImageGallery>

          <TabsContainer>
            <Tab
              $active={activeTab === "About"}
              onClick={() => setActiveTab("About")}
            >
              About
            </Tab>
            <Tab
              $active={activeTab === "Careers"}
              onClick={() => setActiveTab("Careers")}
            >
              Careers
            </Tab>
          </TabsContainer>

          {/* Tab content would go here - showing placeholder for now */}
          {activeTab === "About" && (
            <div style={{ padding: "30px 0" }}>
              <p>
                Digital Spaniel is a creative design agency focused on helping
                brands stand out in the digital landscape. Our team of
                passionate designers, developers, and marketers work together to
                create compelling brand experiences that connect with audiences
                and drive business growth.
              </p>
            </div>
          )}

          {activeTab === "Careers" && (
            <div style={{ padding: "30px 0" }}>
              <p>
                Join our team of creative thinkers and digital innovators. We're
                always looking for talented individuals who are passionate about
                design, technology, and building amazing digital experiences.
              </p>
            </div>
          )}
        </AboutLayout>
      </PageWidth>
    </AboutSection>
  );
};
