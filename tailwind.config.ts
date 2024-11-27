import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens
        sm: "640px", // Small screens (default)
        md: "768px", // Medium screens (default)
        lg: "1024px", // Large screens (default)
        xl: "1280px", // Extra large screens (default)
        "2xl": "1536px", // 2X extra large screens (default)
        "3xl": "1920px", // Custom 3X extra large
      },
      colors: {
        "radiance-color": "#121111",
        "radiance-hover-color": "#121122",
        "radiance-red": "#FF0101",
        "radiance-gray": "#8A9A9D",
      },
      backgroundColor: {
        "radiance-color": "#121111",
        "radiance-hover-color": "#111122",
        "light-mode": "#121111",
        "dark-mode": "#121111",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.8s ease-out forwards",
        fadeInRight: "fadeInRight 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" }, 
          "100%": { opacity: "1", transform: "translateY(0)" },  
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
