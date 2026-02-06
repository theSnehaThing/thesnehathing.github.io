# Sneha Manna - Cloud DevOps Engineer Portfolio

A modern, responsive portfolio website showcasing cloud DevOps engineering expertise, built with React, TypeScript, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, minimalistic interface with subtle animations
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive**: Optimized for all devices and screen sizes
- **Performance**: Built with Vite for fast loading and optimal performance
- **Accessibility**: Semantic HTML and keyboard navigation support
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and pnpm (or npm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thesnehathing/thesnehathing.github.io.git
cd thesnehathing.github.io
```

2. Navigate to the frontend directory and install dependencies:
```bash
cd frontend
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📦 Build & Deployment

### Local Build

```bash
cd frontend
pnpm run build
```

### Deploy to GitHub Pages

The site automatically deploys via GitHub Actions when you push to the main branch. The workflow is configured in `.github/workflows/deploy.yml`.

### Manual Build

Use the provided build script:

```bash
./build.sh
```

## 🎨 Customization

### Theme Colors

Edit CSS variables in `frontend/src/App.css`:

```css
:root {
  --accent-primary: #3b82f6;    /* Primary accent color */
  --bg-primary: #ffffff;        /* Background color */
  --text-primary: #1e293b;      /* Text color */
  /* ... more variables */
}
```

### Content

Update the content in `frontend/src/App.tsx`:

- Personal information in the hero section
- Experience timeline
- Skills and technologies
- Featured projects
- Contact information

### Add New Sections

1. Add a new section component in the JSX
2. Create corresponding CSS styles
3. Add navigation link if needed

## 📱 Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Professional summary and highlights  
- **Experience**: Timeline of professional experience
- **Skills**: Organized technology skills by category
- **Projects**: Featured project showcases
- **Contact**: Contact information and social links

## 🎯 Performance

- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size with tree shaking
- Fast animations with Framer Motion

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/thesnehathing/thesnehathing.github.io/issues).

## 📞 Contact

Sneha Manna - [snehamanna10@gmail.com](mailto:snehamanna10@gmail.com)

Portfolio: [https://thesnehathing.github.io](https://thesnehathing.github.io)
LinkedIn: [https://linkedin.com/in/thesnehathing](https://linkedin.com/in/thesnehathing)
GitHub: [https://github.com/thesnehathing](https://github.com/thesnehathing)
