"use client";
import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const PageWidth: React.FC<Props> = ({ children, className, style }) => {
  return (
    <Container className={className} style={style}>
      {children}
    </Container>
  );
};
