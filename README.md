Digital Spaniel - Portfolio Website
A responsive, modern, and elegant website showcasing Digital Spaniel's services and portfolio.

Live Demo: https://digital-spaniel-test.vercel.app/

Project Overview
Digital Spaniel is a portfolio website built with Next.js and styled-components. The site features a clean, modern design with smooth animations, responsive layouts, and an emphasis on showcasing project work. The design focuses on delivering an engaging user experience across all device sizes.

Technology Stack
Framework: Next.js 14 with App Router
Styling: styled-components
Language: TypeScript
Animation: CSS transitions
Deployment: Vercel

digital-spaniel/
├── src/
│ ├── app/
│ │ ├── (home)/
│ │ │ ├── components/ # Home page components
│ │ │ │ ├── hero.tsx
│ │ │ │ ├── services.tsx
│ │ │ │ ├── projects.tsx
│ │ │ │ └── case-studies.tsx
│ │ │ ├── page.tsx # Home page
│ │ │ └── layout.tsx
│ │ └── layout.tsx # Root layout
│ ├── components/ # Shared components
│ │ ├── page-width.tsx
│ │ ├── topography.tsx
│ │ ├── navigation.tsx
│ │ └── footer.tsx
│ └── lib/
│ └── data.ts # Mock data for projects/case studies
└── public/ # Static assets

Key Features & Components

1. Hero Section
   A visually striking introduction with a compelling headline, subheading, and call-to-action. Features a background image with a gradient overlay.

2. Services Section
   Showcases the company's service offerings with a clean grid layout and iconography.

3. Projects Section
   A filterable project showcase with:

Tab-based filtering by project category
Responsive grid layout with larger feature projects
Hover effects revealing project details
Scrollable tabs on mobile with auto-centering of active tab 4. Case Studies Section
A carousel showcasing detailed client case studies:

Side preview of previous/next items
Detailed information panel for each case study
Navigation controls to browse through cases 5. Navigation Component
A modern navigation bar with:

Responsive design that adapts to different screen sizes
Mobile hamburger menu
Smooth transitions between states 6. Footer
Comprehensive footer with contact information, navigation links, and social media connections.

Responsive Design Features
Desktop-First Approach: Optimized for larger screens with graceful degradation
Mobile Navigation: Collapsible menu for smaller screens
Flexible Grids: Adapt from 3 columns to 1 column based on screen size
Touch-Optimized: Scrollable tabs and carousels work well on touch devices
Optimized Images: Proper sizing and loading for different viewports
Missing Sections & Future Improvements
Missing Sections
About Section

Would include company history, team information, and values
Should have team member profiles with images and roles
Could feature a timeline of company milestones
Reviews/Testimonials Section

Would showcase client feedback and testimonials
Should include client names, companies, and possibly photos
Could implement a slider/carousel for multiple testimonials
Future Improvements
Performance Optimization

Implement image optimization techniques
Add lazy loading for off-screen content
Improve Core Web Vitals scores
Accessibility Enhancements

Add ARIA attributes throughout the site
Ensure proper keyboard navigation
Improve screen reader compatibility
Animation Refinements

Add subtle entry animations for elements as they come into view
Refine transition animations between sections
Add micro-interactions for better user feedback
Additional Features

Blog/insights section
Contact form with validation
Dynamic filtering options for projects
Dark/light mode toggle

Installation & Setup

# Clone the repository

git clone https://github.com/yourusername/digital-spaniel.git

# Navigate to the project directory

cd digital-spaniel

# Install dependencies

npm install

# Start development server

npm run dev

Development

# Run development server

npm run dev

# Build for production

npm run build

# Start production server

npm start

# Run linting

npm run lint

Deployment
The project is configured for seamless deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments on push to main branch.
