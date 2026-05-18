# Corte Barbershop

A minimal, modern barbershop website showcasing premium hairstyling and grooming services. Built with Next.js and Tailwind CSS for optimal performance and sleek design.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Built with React and Tailwind CSS for beautiful, accessible interfaces
- **Product Showcase**: Featured products carousel with filtering by category (Latest, Hairstyling, Hair Care)
- **Service Menu**: Complete service listing with pricing and descriptions
- **Image Gallery**: Beautiful gallery of work and before/after shots
- **Contact Integration**: Easy booking and reservation system
- **Performance Optimized**: Next.js with image optimization for fast load times
- **Dark Mode**: Minimalist dark aesthetic with elegant typography

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.2.6
- **UI Library**: React 19.2.4 with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Component Library**: [Headless UI](https://headlessui.com/)
- **Carousel**: [Embla Carousel](https://www.emblacarousel.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Cormorant Garamond)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd corte
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
corte/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Home page entry point
├── components/
│   ├── layouts/
│   │   ├── MainLayout.tsx   # Main wrapper component
│   │   ├── Navbar.tsx       # Navigation header with mobile menu
│   │   └── Footer.tsx       # Footer component
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with CTA buttons
│   │   ├── Gallery.tsx      # Image gallery showcase
│   │   ├── Products.tsx     # Products carousel with tabs
│   │   ├── Services.tsx     # Service menu with filtering
│   │   ├── Location.tsx     # Shop location and hours
│   │   └── Testimonials.tsx # Customer testimonials
│   ├── ProductModal.tsx     # Product detail modal
│   └── PromoBar.tsx         # Promotional banner
├── lib/
│   └── data/
│       ├── gallery.ts       # Gallery image data
│       ├── hours.ts         # Business hours
│       ├── navs.ts          # Navigation links
│       ├── products.ts      # Product information
│       ├── services.ts      # Service listings
│       └── testimonials.ts  # Customer testimonials
├── public/                  # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Navbar

- Responsive navigation with mobile hamburger menu
- Sticky header with scroll-triggered animations
- Desktop and mobile navigation variants
- Reserve CTA button

### Hero Section

- Eye-catching headline and description
- Dual action buttons (Book a chair, Our services)
- Background imagery with overlay
- Metadata strips (founding year, location, volume)

### Products

- Featured product showcase
- Responsive carousel with touch/swipe support
- Category filtering (Latest, Hairstyling, Hair Care)
- Product detail modal

### Services

- Categorized service menu (Hair, Beard, Extras)
- Service cards with pricing and descriptions
- Filter by service type
- Hover animations

### Gallery

- Showcase of work and portfolio pieces
- Responsive grid layout
- Image optimization for fast loading

## Mobile Optimization

The site is fully responsive with:

- Touch-friendly button sizes (minimum 44px height)
- Mobile navigation menu with full-screen overlay
- Optimized tap targets for all interactive elements
- Mobile-first design approach
- Proper event handling for mobile devices

## Development

### Code Style

- TypeScript for type safety
- React hooks for component state management
- Tailwind CSS for styling
- Component-based architecture
- Mobile-first responsive design

### Adding New Content

1. **Products**: Edit `lib/data/products.ts`
2. **Services**: Edit `lib/data/services.ts`
3. **Navigation**: Edit `lib/data/navs.ts`
4. **Hours**: Edit `lib/data/hours.ts`
5. **Testimonials**: Edit `lib/data/testimonials.ts`

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS bundling with Tailwind CSS 4
- Code splitting and lazy loading
- Responsive images with srcSet
- Font optimization with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary and confidential. All rights reserved.

## Support

For issues, questions, or feature requests, please contact the development team.

---

Cut Sharp · Live Slow
