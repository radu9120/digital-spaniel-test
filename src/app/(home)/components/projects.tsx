"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { PageWidth } from "@/components/page-width";
import {
  BusinessHeadline,
  BusinessHeadlinePrimary,
  BusinessHeadlineSecondary,
  CallToAction,
  Paragraph,
} from "@/components/topography";
import Image from "next/image";

const ProjectsSection = styled.section`
  padding: 80px 0;
  background-color: white;
`;

const HeaderContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledBusinessHeadline = styled(BusinessHeadline)`
  margin-bottom: 40px;
`;

// Tab Navigation
const TabNavigation = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 40px;
`;

const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  color: ${(props) =>
    props.$active ? "var(--pink)" : "var(--medium-blue-gray)"};
  padding: 12px 24px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--pink);
    opacity: ${(props) => (props.$active ? 1 : 0)};
  }

  &:hover {
    color: var(--dark-blue);
  }
`;

// Project Grid
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Top Row Cards - All the same size
const ProjectCard = styled.div`
  position: relative;

  overflow: hidden;
  height: 280px;
  background-color: var(--dark-blue);

  &:hover .overlay {
    opacity: 1;
  }
`;

// Bottom Row - First card spans 2 columns
const LargeProjectCard = styled(ProjectCard)`
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 41, 59, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
`;

const ProjectTitle = styled.h3`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 12px;
  color: white;
`;

const ProjectDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  color: white;
`;

const ProjectLink = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  align-self: flex-start;
  padding-bottom: 2px;

  &:hover {
    opacity: 0.85;
  }
`;

// Navigation Controls
const NavigationControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ArrowControls = styled.div`
  display: flex;
  gap: 10px;
`;

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Colorful Boots",
      description: "Vibrant brand identity for a bold fashion company.",
      image: "/projects/boots.png",
      category: "Branding",
      wide: false,
    },
    {
      id: 2,
      title: "Make Ideas Happen",
      description:
        "A local paper with big ideas needed a sharp new brand to inspire readers.",
      image: "/projects/newspaper02.png",
      category: "Branding",
      wide: false,
    },
    {
      id: 3,
      title: "Tinned Fish Packaging",
      description: "Creative packaging design for premium seafood products.",
      image: "/projects/makerek.png",
      category: "Web Design",
      wide: false,
    },
    {
      id: 4,
      title: "Dinamo Magazine",
      description: "Bold publishing design for a youth culture magazine.",
      image: "/projects/newspaper.png",
      category: "Digital Marketing",
      wide: true,
    },
    {
      id: 5,
      title: "3D Character Design",
      description: "Playful characters for an animated short film.",
      image: "/projects/rider01.png",
      category: "Web Design",
      wide: false,
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <ProjectsSection>
      <PageWidth>
        <HeaderContainer>
          <StyledBusinessHeadline>
            <BusinessHeadlinePrimary>Some of our</BusinessHeadlinePrimary>
            <BusinessHeadlineSecondary>
              recent projects
            </BusinessHeadlineSecondary>
          </StyledBusinessHeadline>
        </HeaderContainer>

        <TabNavigation>
          <Tab
            $active={activeTab === "All"}
            onClick={() => setActiveTab("All")}
          >
            All
          </Tab>
          <Tab
            $active={activeTab === "Branding"}
            onClick={() => setActiveTab("Branding")}
          >
            Branding
          </Tab>
          <Tab
            $active={activeTab === "Web Design"}
            onClick={() => setActiveTab("Web Design")}
          >
            Web Design
          </Tab>
          <Tab
            $active={activeTab === "Digital Marketing"}
            onClick={() => setActiveTab("Digital Marketing")}
          >
            Digital Marketing
          </Tab>
        </TabNavigation>

        <ProjectGrid>
          {filteredProjects.map((project) =>
            project.wide ? (
              <LargeProjectCard key={project.id}>
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                />
                <ProjectOverlay className="overlay">
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLink href={`/projects/${project.id}`}>
                    Full project
                  </ProjectLink>
                </ProjectOverlay>
              </LargeProjectCard>
            ) : (
              <ProjectCard key={project.id}>
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={280}
                />
                <ProjectOverlay className="overlay">
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLink href={`/projects/${project.id}`}>
                    Full project
                  </ProjectLink>
                </ProjectOverlay>
              </ProjectCard>
            )
          )}
        </ProjectGrid>

        <NavigationControls>
          <CallToAction href="/work">See all work</CallToAction>
          <ArrowControls>
            <NavButton aria-label="Previous projects">←</NavButton>
            <NavButton aria-label="Next projects">→</NavButton>
          </ArrowControls>
        </NavigationControls>
      </PageWidth>
    </ProjectsSection>
  );
};
