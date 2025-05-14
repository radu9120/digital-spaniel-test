import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./(home)/components/registry";

export const metadata: Metadata = {
  title: "Digital Spaniel - Creative Agency",
  description:
    "Digital design agency specializing in brand strategy and digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
