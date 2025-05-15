"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "@/components/topography";
import { PageWidth } from "@/components/page-width";
import Link from "next/link";
import { useScrollListener } from "@/hooks/use-scroll-listener";

// Style for the header container with white background when scrolled
const HeaderContainer = styled.header<{ $visible: boolean; $atTop: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) =>
    props.$atTop ? "transparent" : "rgba(255, 255, 255, 0.95)"};
  box-shadow: ${(props) =>
    props.$atTop ? "none" : "0 2px 10px rgba(0, 0, 0, 0.1)"};
  transition: transform 0.3s ease, background-color 0.3s ease,
    box-shadow 0.3s ease;
  transform: translateY(${(props) => (props.$visible ? "0" : "-100%")});
  z-index: 100;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: ${(props) => (props.$atTop ? "20px 0" : "0")};
  }
`;

// Navigation bar content remains unchanged
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Logo styling with responsive size
const Logo = styled.img`
  height: 45px;
  width: auto;

  @media (min-width: 768px) {
    width: 197px;
    height: 90px;
  }
`;

// Desktop navigation
const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

// NavLink with color that changes based on scroll position
const StyledNavLink = styled(NavLink)<{ $atTop: boolean }>`
  color: ${(props) => (props.$atTop ? "#ffffff" : "var(--dark-blue)")};
`;

// Active link style
const ActiveNavItem = styled(StyledNavLink)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 1rem;
    width: calc(100% - 2rem);
    height: 2px;
    background-color: ${(props) =>
      props.$atTop ? "#fff" : "var(--dark-blue)"};
  }
`;

// Mobile menu button with color that changes based on scroll position
const MobileMenuButton = styled.button<{ $atTop: boolean }>`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 110;
  margin-left: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const HamburgerIcon = styled.div<{ $isOpen: boolean; $atTop: boolean }>`
  width: 24px;
  height: 3px;
  background-color: ${(props) =>
    props.$isOpen ? "transparent" : props.$atTop ? "#fff" : "var(--dark-blue)"};
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 3px;
    background-color: ${(props) =>
      props.$atTop ? "#fff" : "var(--dark-blue)"};
    transition: all 0.3s ease;
  }

  &::before {
    transform: ${(props) =>
      props.$isOpen ? "rotate(45deg)" : "translateY(-8px)"};
  }

  &::after {
    transform: ${(props) =>
      props.$isOpen ? "rotate(-45deg)" : "translateY(8px)"};
  }
`;

// Mobile slide-in menu
const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-100%")};
  width: 75%;
  height: 100vh;
  background-color: var(--dark-blue);
  transition: right 0.3s ease;
  padding: 80px 20px 20px;
  z-index: 105;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled(NavLink)`
  margin: 15px 0;
  padding: 10px;
  font-size: 1.5rem;
`;

export const Header = () => {
  const { visible, atTop } = useScrollListener();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer $visible={visible} $atTop={atTop}>
      <PageWidth>
        <NavContainer>
          <Link href="/">
            <Logo src="/logo.png" alt="Digital Spaniel" />
          </Link>

          <DesktopNav>
            <ActiveNavItem $atTop={atTop} href="/services">
              Services
            </ActiveNavItem>
            <StyledNavLink $atTop={atTop} href="/work">
              Work
            </StyledNavLink>
            <StyledNavLink $atTop={atTop} href="/about">
              About
            </StyledNavLink>
            <StyledNavLink $atTop={atTop} href="/blog">
              Blog
            </StyledNavLink>
            <StyledNavLink $atTop={atTop} href="/contact">
              Contact
            </StyledNavLink>
          </DesktopNav>

          <MobileMenuButton $atTop={atTop} onClick={toggleMobileMenu}>
            <HamburgerIcon $isOpen={mobileMenuOpen} $atTop={atTop} />
          </MobileMenuButton>

          <MobileMenu $isOpen={mobileMenuOpen}>
            <MobileNavItem href="/services">Services</MobileNavItem>
            <MobileNavItem href="/work">Work</MobileNavItem>
            <MobileNavItem href="/about">About</MobileNavItem>
            <MobileNavItem href="/blog">Blog</MobileNavItem>
            <MobileNavItem href="/contact">Contact</MobileNavItem>
          </MobileMenu>
        </NavContainer>
      </PageWidth>
    </HeaderContainer>
  );
};
