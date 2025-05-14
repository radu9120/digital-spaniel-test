"use client";
import React from "react";
import styled from "styled-components";
import { PageWidth } from "@/components/page-width";
import Link from "next/link";

const FooterSection = styled.footer`
  background-color: #f1f5f9;
  padding: 80px 0 40px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 30px;
  padding-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;

const Heading = styled.h2`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  color: var(--dark-blue);
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 40px;
  max-width: 300px;
`;

const FooterCTA = styled.a`
  font-family: "Open Sans", sans-serif;
  color: var(--dark-blue);
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  display: inline-block;

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
    opacity: 0.9;
  }
`;

const FooterColumn = styled.div`
  @media (max-width: 640px) {
    margin-top: 20px;
  }
`;

const ColumnTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  color: var(--dark-blue);
  font-size: 1.125rem;
  font-weight: 600;
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

  &:hover {
    color: var(--dark-blue);
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
  border-top: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Copyright = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #94a3b8;
  font-size: 0.875rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #94a3b8;
  font-size: 1.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--dark-blue);
  }
`;

export const Footer = () => {
  return (
    <FooterSection>
      <PageWidth>
        <FooterContent>
          <LeftColumn>
            <Heading>We're a brands best friend</Heading>
            <FooterCTA href="/contact">Let's talk</FooterCTA>
          </LeftColumn>

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
              0121 345 678
            </ContactText>
            <ContactText>
              Email Us
              <br />
              <FooterLink href="mailto:info@digitalspaniel.co.uk">
                info@digitalspaniel.co.uk
              </FooterLink>
            </ContactText>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            Copyright © Digital Spaniel 2019. All rights reserved.
          </Copyright>
          <SocialLinks>
            <SocialLink
              href="https://facebook.com/digitalspaniel"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink
              href="https://twitter.com/digitalspaniel"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink
              href="https://instagram.com/digitalspaniel"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/company/digitalspaniel"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </PageWidth>
    </FooterSection>
  );
};
