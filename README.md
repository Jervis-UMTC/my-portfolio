# Jervis - Full Stack Developer Portfolio

A modern, minimalist portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Designed to be clean, fast, and accessible, featuring a single-page flow with sleek modal overlays for seamless navigation.

## 🚀 Check it Out

[jervisp.me](https://jervisp.me/)

## ✨ Features

-   **Modern Tech Stack**: Built on Next.js 14+ (App Router) and TypeScript.
-   **Minimalist Design**: Clean aesthetics with high-contrast typography and specific brand colors for technologies.
-   **Modal Layout**: "About" and "Contact" sections are implemented as accessible, animated modal overlays to keep the user context preserved.
-   **Responsive**: Fully responsive 2-column Hero layout that adapts gracefully to mobile devices.
-   **Animations**: Smooth entrance and hover effects using Framer Motion.
-   **System Theme**: Automatically adapts to the user's system preference (Light/Dark mode) without cluttering the UI with toggles.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, SimpleIcons)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🏃‍♂️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Jervis-UMTC/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate static pages and optimize assets for deployment.

## 📁 Project Structure

```
app/
├── components/      # UI Components (Hero, Projects, Modals)
├── assets/          # Static assets (Logos, Images)
├── layout.tsx       # Root layout & SEO metadata
├── page.tsx         # Main entry point (Home)
└── globals.css      # Global styles & Tailwind directives
```

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to GitHub.
2.  Import the repository into Vercel.
3.  Vercel will detect Next.js and deploy automatically.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
