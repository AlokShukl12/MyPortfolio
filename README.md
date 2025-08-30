# 3D Portfolio

A visually stunning and interactive portfolio website built with React, Vite, Three.js, and Framer Motion. This project is designed to showcase your skills, projects, and contact information in a modern, engaging, and professional manner.

---

## 🚀 Features

- **Animated Hero Section:** Eye-catching introduction with animated text and 3D backgrounds.
- **Interactive 3D Models:** Utilizes Three.js and @react-three/fiber for real-time 3D graphics.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
- **Smooth Animations:** Seamless transitions and scroll-based effects powered by Framer Motion.
- **Portfolio Showcase:** Highlight your best work with project previews and external links.
- **Contact Form:** Integrated EmailJS form for direct communication.
- **Social Links:** Quick access to LinkedIn, GitHub, Resume, and other platforms.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [Canvas](https://www.npmjs.com/package/canvas) (if used for specific effects)
- [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)


---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/3D-Portfolio.git
   cd 3D-Portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory with the following (replace with your EmailJS credentials):

   ```
   VITE_SERVICE_ID=your_emailjs_service_id
   VITE_TEMPLATE_ID=your_emailjs_template_id
   VITE_PUBLIC_KEY=your_emailjs_public_key
   ```

   > **Note:** The `.env` file is already ignored by git as per the `.gitignore` configuration.

4. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production:**
   ```sh
   npm run build
   # or
   yarn build
   ```

6. **Preview production build:**
   ```sh
   npm run preview
   # or
   yarn preview
   ```

---

## 🖼️ Customization

- **3D Models:** Replace `.glb` or other model files in the `public/` directory with your own.
- **Portfolio Items:** Modify the `src/components/portfolio/Portfolio.jsx` file to update your project details.
- **Social Links:** Update links in the `src/components/hero/Hero.jsx` or relevant component.
- **Styling:** Customize the look and feel by modifying the CSS files in the `src/` directory.

---

## 🚢 Deployment

This project is configured for easy deployment to [Vercel](https://vercel.com/). The `vercel.json` file in the root directory contains the necessary rewrite rules.

1.  **Import Project:** Import your project into Vercel from your Git repository.
2.  **Environment Variables:** Add your EmailJS environment variables in the Vercel dashboard under **Project Settings > Environment Variables**.
3.  **Deploy:** Vercel will automatically build and deploy your application.

You can also deploy this project to [Netlify](https://www.netlify.com/) or any static hosting provider.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Professional Description:**

3D Portfolio is a modern, interactive web application designed to present personal or professional work in a visually engaging way. Leveraging advanced front-end technologies and 3D graphics, it provides a unique platform for developers, designers, and creatives to highlight their skills and projects. The portfolio features animated 3D models, smooth transitions, and a responsive design, ensuring a professional and captivating user experience.
