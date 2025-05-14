"use client";
import React from "react";
import styled from "styled-components";
import { PageWidth } from "@/components/page-width";
import {
  BusinessHeadline,
  BusinessHeadlinePrimary,
  BusinessHeadlineSecondary,
  CallToAction,
  Paragraph,
  H3,
} from "@/components/topography";

const ServicesSection = styled.section`
  background-color: var(--light-gray);
  padding: 80px 0;
`;

const ServicesLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HeadingContainer = styled.div`
  max-width: 400px;

  @media (min-width: 768px) {
    width: 35%;
  }
`;

const StyledBusinessHeadline = styled(BusinessHeadline)`
  margin-bottom: 40px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;
`;

const ServicesContainer = styled.div`
  margin-top: 60px;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0;
  }
`;

const ServicesRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ServiceCategory = styled.div`
  padding: 10px 0;
`;

const CategoryTitle = styled(H3)`
  font-size: 1.25rem;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  margin-bottom: 20px;
`;

const ServiceLink = styled.a`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  color: var(--medium-blue-gray);
  text-decoration: none;
  font-size: 1.125rem;
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
export const Services = () => {
  return (
    <ServicesSection>
      <PageWidth>
        <ServicesLayout>
          <HeadingContainer>
            <StyledBusinessHeadline>
              <BusinessHeadlinePrimary>What are</BusinessHeadlinePrimary>
              <BusinessHeadlineSecondary>
                we capable of
              </BusinessHeadlineSecondary>
            </StyledBusinessHeadline>

            <StyledParagraph>
              By focusing on design as an enabler and putting a huge emphasis on
              our clients as co-producers, we create innovative, sustainable
              marketing that enhances brand experience and user engagement.
            </StyledParagraph>
            <CallToAction href="/process">Our process</CallToAction>
          </HeadingContainer>

          <ServicesContainer>
            {/* First row: Brand and Marketing side by side */}
            <ServicesRow>
              <ServiceCategory>
                <CategoryTitle>BRAND</CategoryTitle>
                <ServicesList>
                  <ServiceItem>
                    <ServiceLink href="/services/brand-strategy">
                      Brand Strategy
                    </ServiceLink>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceLink href="/services/logo-and-name">
                      Logo & Name
                    </ServiceLink>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceLink href="/services/identity-and-collateral">
                      Identity & Collateral
                    </ServiceLink>
                  </ServiceItem>
                </ServicesList>
              </ServiceCategory>

              <ServiceCategory>
                <CategoryTitle>MARKETING</CategoryTitle>
                <ServicesList>
                  <ServiceItem>
                    <ServiceLink href="/services/digital">Digital</ServiceLink>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceLink href="/services/market-research">
                      Market Research
                    </ServiceLink>
                  </ServiceItem>
                </ServicesList>
              </ServiceCategory>
            </ServicesRow>

            {/* Second row: Development alone */}
            <ServicesRow>
              <ServiceCategory>
                <CategoryTitle>DEVELOPMENT</CategoryTitle>
                <ServicesList>
                  <ServiceItem>
                    <ServiceLink href="/services/ecommerce">
                      eCommerce
                    </ServiceLink>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceLink href="/services/web-development">
                      Web Development
                    </ServiceLink>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceLink href="/services/mobile-apps">
                      Mobile Apps
                    </ServiceLink>
                  </ServiceItem>
                </ServicesList>
              </ServiceCategory>
            </ServicesRow>
          </ServicesContainer>
        </ServicesLayout>
      </PageWidth>
    </ServicesSection>
  );
};
