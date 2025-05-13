# Immersive Scene Starter Kit 🎮

A minimal, developer-friendly boilerplate for building 3D web scenes with [Three.js](https://threejs.org/) and [Vite](https://vitejs.dev/). Perfect for designers, developers, and creative technologists building immersive web experiences.

## 🚀 Features
- Preconfigured Three.js + Vite
- Grid helper and textured floor
- Modular utilities for loading GLTF models and textures
- Basic scene, camera, lighting, and controls (OrbitControls)
- Organized file structure
- Fast local dev with hot reload
- WebXR compatibility out-of-the-box
- GitHub templates for issues, pull requests, and CI workflow

## Helpers
- Load model helper
- Load texture helper

## 🛠️ Quick Start

1. **Clone the template**
```bash
git clone https://github.com/yourusername/immersive-starter-threejs.git
cd immersive-starter-threejs
```
2. **Install dependencies**
```
npm install
```
3. **Run the development server**
```
npm run dev
```
Then visit http://localhost:5173 in your browser window.

4. **Build for production**
```
npm run build
```
5. **Deploy**

The project includes a GitHub Action workflow that automatically builds and deploys to a `gh-pages` branch whenever you push to `main`.

To enable GitHub Pages:
1. Go to your repository settings
2. Select "Pages" from the sidebar
3. Set "Deploy from a branch" and select "gh-pages" branch

## Contributing
Please use the provided GitHub issue and pull request templates when reporting bugs or proposing features.

## License
This project is licensed under the MIT License. See the ![MIT License](https://img.shields.io/badge/license-MIT-green.svg) file for details.
