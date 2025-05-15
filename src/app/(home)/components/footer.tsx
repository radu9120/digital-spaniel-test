"use client";
import React from "react";
import styled from "styled-components";
import { PageWidth } from "@/components/page-width";
import {
  BusinessHeadlinePrimary,
  BusinessHeadlineSecondary,
  BusinessHeadline,
  CallToAction,
} from "@/components/topography";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterSection = styled.footer`
  background-color: #f1f5f9;
  padding: 80px 0 40px;
`;

// Main grid with 2 columns
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  padding-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const LeftColumn = styled.div`
  max-width: 300px;
`;

// Simple flex container for the 3 columns with justify-between
const NavColumns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
  }
`;

const FooterColumn = styled.div`
  flex: 0 1 auto;

  @media (max-width: 768px) {
    flex: 0 0 48%;
    margin-bottom: 30px;
  }

  @media (max-width: 640px) {
    margin-top: 20px;
  }
`;

const ColumnTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  color: var(--dark-blue);
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  font-family: "Open Sans", sans-serif;
  color: var(--medium-blue-gray);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-right: 30px;

  &:hover {
    color: var(--dark-blue);
  }

  &::after {
    content: "❯";
    position: absolute;
    right: 0;
    opacity: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--medium-blue-gray);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    font-size: 12px;
    line-height: 1;
    padding-left: 1px;
    padding-bottom: 1px;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
    background-color: var(--medium-blue-gray);
  }
`;

const ContactText = styled.p`
  font-family: "Open Sans", sans-serif;
  color: var(--medium-blue-gray);
  font-size: 1rem;
  margin-bottom: 15px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Copyright = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #94a3b8;
  font-size: 18px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #94a3b8;
  font-size: 24px;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--dark-blue);
  }
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <PageWidth>
        <FooterContent>
          <LeftColumn>
            <BusinessHeadline>
              <BusinessHeadlinePrimary>We're a brands</BusinessHeadlinePrimary>
              <BusinessHeadlineSecondary>best friend</BusinessHeadlineSecondary>
            </BusinessHeadline>
            <CallToAction href="/contact">Let's talk</CallToAction>
          </LeftColumn>

          <NavColumns>
            <FooterColumn>
              <ColumnTitle>Explore</ColumnTitle>
              <FooterLinks>
                <FooterLinkItem>
                  <FooterLink href="/services">Services</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink href="/work">Work</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink href="/about">About</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink href="/blog">Blog</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink href="/careers">Careers</FooterLink>
                </FooterLinkItem>
              </FooterLinks>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Services</ColumnTitle>
              <FooterLinks>
                <FooterLinkItem>
                  <FooterLink href="/services/brand">Brand</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink href="/services/development">
                    Development
                  </FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink href="/services/marketing">Marketing</FooterLink>
                </FooterLinkItem>
              </FooterLinks>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Questions?</ColumnTitle>
              <ContactText>
                Call Us
                <br />
                <FooterLink href="tel:0121345678">0121 345 678</FooterLink>
              </ContactText>
              <ContactText>
                Email Us
                <br />
                <FooterLink href="mailto:info@digitalspaniel.co.uk">
                  info@digitalspaniel.co.uk
                </FooterLink>
              </ContactText>
            </FooterColumn>
          </NavColumns>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            Copyright © Digital Spaniel {currentYear}. All rights reserved.
          </Copyright>
          <SocialLinks>
            <SocialLink
              href="https://facebook.com/digitalspaniel"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/digitalspaniel"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/digitalspaniel"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/company/digitalspaniel"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </PageWidth>
    </FooterSection>
  );
};
