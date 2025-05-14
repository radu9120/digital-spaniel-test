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

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background-color: white;
`;

const HeaderContainer = styled.div`
  max-width: 500px;
  margin-bottom: 80px;
`;

const TestimonialSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

interface CardProps {
  $featured?: boolean;
}

const TestimonialCard = styled.div<CardProps>`
  position: relative;
  padding: 40px;
  border-radius: 4px;
  background-color: ${(props) => (props.$featured ? "#1E293B" : "#F1F5F9")};
  color: ${(props) => (props.$featured ? "#FFFFFF" : "#64748B")};
  width: 100%;
  max-width: 380px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    display: ${(props) => (props.$featured ? "flex" : "none")};
    max-width: 500px;
  }
`;

const QuoteMarks = styled.div<CardProps>`
  position: absolute;
  top: 30px;
  left: 30px;
  font-family: "Georgia", serif;
  font-size: 80px;
  line-height: 1;
  opacity: 0.1;
  color: ${(props) => (props.$featured ? "#FFFFFF" : "#1E293B")};
`;

const TestimonialContent = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: auto;
  padding-top: 30px;
  position: relative;
  z-index: 1;
`;

const AuthorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const AuthorImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AuthorName = styled.h3<CardProps>`
  font-family: "ITC Avant Garde Gothic Pro", sans-serif;
  font-size: 1.25rem;
  margin-bottom: 5px;
  color: ${(props) => (props.$featured ? "#FFFFFF" : "#1E293B")};
`;

const AuthorTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
`;

const SliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
`;

const SliderDot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? "#1E293B" : "#CBD5E1")};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$active ? "#1E293B" : "#94A3B8")};
  }
`;

export const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    // First set of testimonials
    [
      {
        id: 1,
        content:
          "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!",
        author: "Paul Simon",
        title: "Founder, MegaCorp",
        image: "/testimonials/paul.jpg",
      },
      {
        id: 2,
        content:
          "Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.",
        author: "Johnny B. Goode",
        title: "CEO, Getting Things Done",
        image: "/testimonials/johnny.jpg",
      },
      {
        id: 3,
        content:
          "We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we've seen a huge response to the product launch.",
        author: "Mary Jane",
        title: "CEO, Design Matters",
        image: "/testimonials/mary.jpg",
      },
    ],
    // Second set of testimonials (you can add more sets)
    [
      {
        id: 4,
        content:
          "The team at Digital Spaniel took our outdated website and transformed it into a modern, user-friendly platform that perfectly represents our brand.",
        author: "Alex Johnson",
        title: "Marketing Director, TechForward",
        image: "/testimonials/alex.jpg",
      },
      {
        id: 5,
        content:
          "Working with Digital Spaniel has increased our online presence dramatically. Their SEO strategies have been game-changing for our business.",
        author: "Sarah Williams",
        title: "Head of Digital, GrowthNow",
        image: "/testimonials/sarah.jpg",
      },
      {
        id: 6,
        content:
          "The branding package Digital Spaniel created for us has received overwhelming positive feedback. Their creativity and attention to detail is unmatched.",
        author: "Michael Thompson",
        title: "Founder, Innovative Solutions",
        image: "/testimonials/michael.jpg",
      },
    ],
    // Add more sets as needed
  ];

  // Handle dot click to change the active slide
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  // Determine which set of testimonials to display
  const currentTestimonials = testimonials[activeSlide];

  return (
    <TestimonialsSection>
      <PageWidth>
        <HeaderContainer>
          <BusinessHeadline>
            <BusinessHeadlinePrimary>Kind words</BusinessHeadlinePrimary>
            <BusinessHeadlineSecondary>
              from our clients
            </BusinessHeadlineSecondary>
          </BusinessHeadline>
        </HeaderContainer>

        <TestimonialSlider>
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              $featured={index === 1} // Middle card is featured
            >
              <QuoteMarks $featured={index === 1}>❝</QuoteMarks>
              <TestimonialContent>{testimonial.content}</TestimonialContent>
              <AuthorSection>
                <AuthorImage>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </AuthorImage>
                <AuthorName $featured={index === 1}>
                  {testimonial.author}
                </AuthorName>
                <AuthorTitle>{testimonial.title}</AuthorTitle>
              </AuthorSection>
            </TestimonialCard>
          ))}
        </TestimonialSlider>

        <SliderNavigation>
          {testimonials.map((_, index) => (
            <SliderDot
              key={index}
              $active={activeSlide === index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </SliderNavigation>
      </PageWidth>
    </TestimonialsSection>
  );
};
