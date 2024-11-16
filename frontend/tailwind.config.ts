import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}", // Include layout if necessary
  ],
  
  theme: {
    extend: {
      colors: {
        background: '#F8FBFC',
        foreground: '#171717',
        primary: '#525FE1',
        alternate: '#FFCF59',
        black: '#1F2B3A',
        white:"#FFFFFF",
        cards: '#F0F3F5',
      },
      fontSize: {
        extralarge: '3.75rem', //60px
        bigHeading: '3rem',   //48px
        heading1: '3rem',      //48px
        heading2: '2.25rem',    //36px
        heading3: '1.875rem',   //30px
        heading4: '1.5rem',     //24px
        heading5: '1.25rem',    //20px
        bigParagraph: '1.125rem', //18px
        paragraph: '1rem',      //16px
        smallParagraph: '0.875rem', //14px
      },
    },
  },
  plugins: [],
} satisfies Config;
