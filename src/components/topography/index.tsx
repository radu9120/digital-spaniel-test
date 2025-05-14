"use client";
import styled from "styled-components";

// Heading (main headline)
export const H1 = styled.h1`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.2;
  color: var(--dark-blue);
  margin-bottom: 1.5rem;
`;

// Secondary heading
export const H2 = styled.h2`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 1.3;
  color: var(--dark-blue);
  margin-bottom: 1.25rem;
`;

// Standard paragraph text
export const Paragraph = styled.p`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--medium-blue-gray);
  margin-bottom: 1rem;
`;

// Category tags (BRAND, DEV, ECOM, MARKETING)
export const Tag = styled.span`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--pink);
  margin-right: 0.5rem;
`;

// Navigation links
export const NavLink = styled.a`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

// Call to action link with underline
export const CallToAction = styled.a`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--dark-blue);
  text-decoration: none;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: var(--pink);
  }

  &:hover {
    opacity: 0.8;
  }
`;

// Business headline
export const BusinessHeadline = styled.h2`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-weight: normal;
  font-size: 2.75rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  span:first-child {
    color: var(--dark-blue);
    display: block;
  }

  span:last-child {
    color: var(--medium-blue-gray);
    display: block;
  }
`;

export const BusinessHeadlinePrimary = styled.span`
  color: var(--dark-blue);
`;

export const BusinessHeadlineSecondary = styled.span`
  color: var(--medium-blue-gray);
`;

// TagGroup for organizing multiple tags
export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;
// Service headline h3 that can be reused
export const H3 = styled.h3`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--dark-blue);
  margin-bottom: 1rem;
`;
