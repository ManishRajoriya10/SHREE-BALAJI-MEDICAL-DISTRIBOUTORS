# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





shree-balaji-distributors/
│
├── public/
│   ├── logo.svg
│   └── bg.jpg
│
├── src/
│   ├── assets/
│   │   ├── images/          ← सभी product/hero images
│   │   ├── icons/           ← svg/png icons
│   │   └── bg/              ← background images
│   │
│   ├── pages/
│   │   ├── common/
│   │   │   ├── Navbar.jsx   ← पहले components में था, अब यहीं
│   │   │   └── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Products.jsx
│   │   ├── medicines/
│   │   │   ├── Generic.jsx
│   │   │   ├── Ethical.jsx
│   │   │   └── Ayurvedic.jsx
│   │   └── products/
│   │       ├── Meters.jsx
│   │       └── Machines.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.js
