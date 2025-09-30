/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,ts}"],
theme: {
    fontFamily: {
      "fugaz-one": ["Fugaz One", "sans-serif"],
      comfortaa: ["Comfortaa", "sans-serif"],
    },

        extend: {
      fontSize: {
        "dynamic-h1": "clamp(1.875rem, 1.2vw + 1.7rem, 3.563rem)",
        "dynamic-h2": "clamp(1.563rem, 0.9vw + 1.4rem, 2.813rem)",
        "dynamic-h3": "clamp(1.375rem, 0.6vw + 1.1rem, 1.875rem)",
        "dynamic-des": "clamp(1rem, 3.2vw - 1rem, 1.2rem)",
      },
      height: {
        "dynamic-hero": "clamp(42.625rem, 29.4vw + 37.5rem, 84.5rem)",
      },
      backgroundImage: {
        "primary-gray-100":"linear-gradient(90deg,rgba(222, 220, 220, 1) 0%, rgba(250, 247, 247, 1) 50%, rgba(247, 242, 242, 1) 100%)",
        "primary-gray-200":
          "linear-gradient(90deg, #525252 -67.36%, #313131 154.86%)",
        "primary-gray-300":
          "linear-gradient(90deg, #434343 -67.36%, #3C3B3A 154.86%)",
        "primary-pink-100": "linear-gradient(270deg, #F989DF 0%, #D44AB5 100%)",
        "primary-pink-200":
          "linear-gradient(90deg, rgba(212, 74, 181, 1) 0%, rgba(249, 137, 223, 1) 100%)",
        "primary-pink-300":
          "linear-gradient(90deg, #434343 -67.36%, #3C3B3A 154.86%), linear-gradient(90deg, rgba(212, 74, 181, 1) 0%, rgba(249, 137, 223, 1) 100%)",
        "primary-pink-400":
          "linear-gradient(rgba(255, 254, 254, 0.8),rgba(255, 254, 254, 0.8)), linear-gradient(270deg, #F989DF 0%, #D44AB5 100%)",
        "primary-pink-500":
          "linear-gradient(270deg, #F989DF -186.78%, #DC50A2 427.87%)",
        "primary-pink-600":
          "linear-gradient(90deg, #CA009D -17.05%, #E988A6 46.48%, #DC50A2 111.89%)",
        "primary-pink-700":
          "linear-gradient(270deg, rgba(249, 137, 223, 0.4) 0%, rgba(212, 74, 181, 0.4) 100%)",
        "hero-estudio-mobile":
          "linear-gradient(5deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%), url('/img/hero-estudio-mobile.png')",
        "hero-estudio-desktop":
          "linear-gradient(45deg,rgba(0, 0, 0, 0.8) 0%,rgba(0,0,0,.0) 42.07% ), url('/img/hero-estudio-desktop.png')",
        "hero-nous": "url('/img/hero-estudio-desktop.png')",
      },
      boxShadow: {
        "primary-gray-100": "-40px 0px 65px #333333",
      },
      colors: {
        "primary-100": "#FBEDF8",
        "primary-200": "#EEB7E1",
        "primary-300": "#EAA5DA",
        "primary-400": "#E180CB",
        "primary-500": "#DD6EC4",
        "primary-600": "#FF7AC2",
        "primary-700": "#D44AB5",
        "primary-800": "#6A255B",
        "primary-900": "#E785A9",
        "parrafo-normal-100": "#B9B9B9",
        "parrafo-hover-100": "#FAF4E6",
        "primary-pink-100": "linear-gradient(270deg, #F989DF 0%, #D44AB5 100%)",
        body: "#222222",
      },
container: {
  center: true,
  padding: {
    DEFAULT: "1rem",  // ~16px en móviles
    sm: "2rem",       // ~32px en tablets pequeñas
    lg: "4rem",       // ~64px en laptops
    xl: "5rem",       // ~80px en monitores grandes
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px", // limite recomendado
  },
},
    },
  },
  plugins: [],
};
