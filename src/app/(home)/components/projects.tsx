"use client";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { PageWidth } from "@/components/page-width";
import {
  BusinessHeadline,
  BusinessHeadlinePrimary,
  BusinessHeadlineSecondary,
  CallToAction,
} from "@/components/topography";
import Image from "next/image";
// Import the data directly from lib
import { projectsData } from "@/lib/data";

// Type definition for project data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  wide: boolean;
}

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

// Tab Navigation - Improved for mobile scrolling
const TabNavigation = styled.div`
  display: inline-block; // Changed to inline-block so it doesn't take full width
  position: relative;
  margin-bottom: 40px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  width: auto; // Auto width based on content
  padding-bottom: 2px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    width: 100%; // Take full width on very small screens for better scrolling
  }
`;
const TabsContainer = styled.div`
  display: flex;
  min-width: min-content;
  position: relative; // Added position relative for the line

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; // This will now be 100% of the tabs container width, not the page width
    height: 1px;
    background-color: #e5e5e5;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  color: ${(props) =>
    props.$active ? "var(--pink)" : "var(--medium-blue-gray)"};
  padding: 12px 32px;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  margin-right: 8px;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--pink);
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});
    transform-origin: center; /* Changed to center for more balanced animation */
    transition: transform 0.3s ease-out; /* Smoother, more professional transition */
    z-index: 2;
  }

  /* Separate hover indicator with different styling */
  &:not($active):hover::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px; /* Slightly thinner for hover state */
    background-color: var(--pink);
    opacity: 0.5;
    transform: scaleX(0.7);
    transform-origin: center;
    transition: transform 0.2s ease, opacity 0.2s ease;
    z-index: 1;
  }

  &:hover {
    color: var(--dark-blue);
  }

  &:hover::before {
    transform: scaleX(0.8);
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 1rem;
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
  border-radius: 4px;

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
  border-radius: 4px;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(30, 41, 59, 0.95) 30%,
    rgba(30, 41, 59, 0.5) 70%,
    rgba(30, 41, 59, 0)
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 20px 40px;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  border-radius: 4px;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 12px;
  color: white;
  text-align: center;
  width: 100%;
`;

const ProjectDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  max-width: 90%;
`;

const ProjectLink = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  padding-bottom: 2px;
  transition: opacity 0.2s ease;
  text-align: center;
  display: inline-block;

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

const ArrowControls = styled.div`
  display: flex;
  gap: 10px;
`;

// Updated NavButton to match case studies
const NavButton = styled.button<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? "#1E293B" : "var(--medium-blue-gray)"};
  color: white;
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: ${(props) => (props.$active ? "pointer" : "default")};
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$active ? 1 : 0.7)};

  &:hover {
    background-color: ${(props) =>
      props.$active ? "var(--dark-blue)" : "var(--medium-blue-gray)"};
  }
`;

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Ensure we have an array, even if the import fails
  const projects = Array.isArray(projectsData) ? projectsData : [];

  // Get unique categories
  const allCategories = [
    ...new Set(projects.map((project) => project.category)),
  ];
  const categories = ["All", ...allCategories];

  // Find the current tab index in the categories array
  const currentTabIndex = categories.indexOf(activeTab);

  // Filter projects by active tab
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // Handle navigation between tabs
  const handlePrevTab = () => {
    if (currentTabIndex > 0) {
      setActiveTab(categories[currentTabIndex - 1]);
    }
  };

  const handleNextTab = () => {
    if (currentTabIndex < categories.length - 1) {
      setActiveTab(categories[currentTabIndex + 1]);
    }
  };

  // Check if navigation is active
  const canGoPrev = currentTabIndex > 0;
  const canGoNext = currentTabIndex < categories.length - 1;

  // Effect to scroll active tab into view
  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      // Calculate the scroll position to center the active tab
      const tabElement = activeTabRef.current;
      const containerElement = tabsRef.current;

      const tabRect = tabElement.getBoundingClientRect();
      const containerRect = containerElement.getBoundingClientRect();

      // Calculate the scroll position to center the tab
      const scrollPosition =
        tabElement.offsetLeft - containerRect.width / 2 + tabRect.width / 2;

      // Scroll with smooth behavior
      containerElement.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }
  }, [activeTab]);

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

        <TabNavigation ref={tabsRef}>
          <TabsContainer>
            {categories.map((category) => (
              <Tab
                key={category}
                $active={activeTab === category}
                onClick={() => setActiveTab(category)}
                ref={activeTab === category ? activeTabRef : null}
              >
                {category}
              </Tab>
            ))}
          </TabsContainer>
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
            <NavButton
              onClick={handlePrevTab}
              $active={canGoPrev}
              disabled={!canGoPrev}
              aria-label="Previous category"
            >
              &#10094;
            </NavButton>
            <NavButton
              onClick={handleNextTab}
              $active={canGoNext}
              disabled={!canGoNext}
              aria-label="Next category"
            >
              &#10095;
            </NavButton>
          </ArrowControls>
        </NavigationControls>
      </PageWidth>
    </ProjectsSection>
  );
};
