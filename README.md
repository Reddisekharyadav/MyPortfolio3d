# 3D Portfolio Website

A modern, interactive 3D portfolio website showcasing professional experience, skills, projects, and certifications with stunning visual effects and animations.

##  Description

This portfolio website is a cutting-edge web application built with React and Three.js, featuring immersive 3D graphics, smooth animations, and a visually captivating user experience. The site presents my professional journey as a Full-Stack Developer and Integrated M.Tech (CSE) student with an engaging, interactive interface.

### Key Features

- **3D Interactive Elements**: Animated 3D models including desktop PC, planets, and floating objects using Three.js
- **Dynamic Wave Background**: Real-time animated wave effects creating a mesmerizing backdrop
- **Smooth Animations**: Framer Motion powered transitions and scroll-based animations
- **Custom Cursor Effects**: Interactive cursor with trailing effects and click ripples
- **Typewriter Effect**: Automated typing animation for skill descriptions
- **Matrix Rain Effect**: Cyberpunk-inspired visual effects
- **Terminal Window**: Interactive terminal-style component for a developer aesthetic
- **Particle System**: Dynamic particle burst effects for enhanced interactivity
- **Scroll Progress Indicator**: Visual feedback for page scroll position
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Glitch Text Effects**: Eye-catching text animations
- **Floating Code Snippets**: Background code elements for developer branding

##  Tech Stack

### Frontend Framework & Libraries
- **React 18** - Modern UI library with hooks and functional components
- **Vite** - Fast build tool and development server
- **Three.js** (@react-three/fiber, @react-three/drei) - 3D graphics and animations
- **Framer Motion** - Advanced animation library
- **React Router DOM** - Navigation and routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **Custom CSS Animations** - Keyframe animations for special effects

### Additional Tools
- **React Icons** - Icon library (GitHub, LinkedIn, Email icons)
- **React Vertical Timeline** - Experience timeline component
- **EmailJS** - Contact form email integration
- **ESLint** - Code quality and linting

##  Project Structure

```
my-portfolio-3d-main/
 public/                  # Static assets
    desktop_pc/         # 3D model textures
    planet/             # Planet 3D model textures
    Logo1.png           # Website logo
    Profile.jpg         # Profile image
    resume.pdf          # Resume document
 src/
    assets/             # Image assets and icons
       company/        # Company logos
       tech/           # Technology icons
    components/         # React components
       canvas/         # 3D canvas components
          Ball.jsx
          Computers.jsx
          Earth.jsx
          Stars.jsx
          Waves.jsx
       About.jsx
       AllSkills.jsx
       Certifications.jsx
       Contact.jsx
       Experience.jsx
       Hero.jsx
       Navbar.jsx
       Tech.jsx
       Works.jsx
       [Special Effects Components]
    constants/          # Constants and data
       index.js
    hoc/                # Higher-order components
       SectionWrapper.jsx
    hooks/              # Custom React hooks
       useTypewriter.js
    utils/              # Utility functions
       motion.js
    App.jsx             # Main application component
    main.jsx            # Application entry point
    styles.js           # Style configurations
    index.css           # Global styles
 index.html              # HTML template
 package.json            # Dependencies and scripts
 vite.config.js          # Vite configuration
 tailwind.config.cjs     # Tailwind CSS configuration
 postcss.config.cjs      # PostCSS configuration
```

##  Sections

1. **Hero Section** - Animated introduction with profile picture, name, and social links
2. **About** - Professional overview and background
3. **Skills** - Technology stack with interactive 3D ball animations
4. **Experience** - Work history with vertical timeline
5. **Projects** - Portfolio of completed works with descriptions
6. **Certifications** - Professional certifications and achievements
7. **Contact** - Interactive contact form with EmailJS integration

##  Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/Reddisekharyadav/MyPortfolio3d.git
cd my-portfolio-3d-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

##  Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

##  Performance Features

- **Code Splitting**: Automatic code splitting for optimal load times
- **Lazy Loading**: Components loaded on demand
- **Optimized Assets**: Compressed images and textures
- **Efficient Animations**: Hardware-accelerated CSS and Three.js animations
- **Responsive Images**: Adaptive image loading based on device

##  Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

##  Contact

- **Email**: reddisekharmarugani@gmail.com
- **LinkedIn**: [Marugani Reddi Sekhar](https://www.linkedin.com/in/marugani-reddi-sekhar)
- **GitHub**: [Reddisekharyadav](https://github.com/Reddisekharyadav)

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- Three.js community for amazing 3D capabilities
- React Three Fiber for seamless React-Three.js integration
- Framer Motion for powerful animation tools
- Tailwind CSS for rapid styling

---

**Made with  by Marugani Reddi Sekhar**
