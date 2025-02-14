/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        h1: [
          "60px",
          {
            lineHeight: "64px",
            fontWeight: "700",
          },
        ],
        h2: [
          "48px",
          {
            lineHeight: "58px",
            fontWeight: "700",
          },
        ],
        h3: [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "700",
          },
        ],
        h4: [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: "700",
          },
        ],
        h5: [
          "28px",
          {
            lineHeight: "40px",
            fontWeight: "600",
          },
        ],
        h6: [
          "24px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        h7: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],
        "body-lg-medium": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "500",
          },
        ],
        "body-lg-semibold": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "600",
          },
        ],
        "body-lg-bold": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "700",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-md-medium": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        "body-md-semibold": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "body-md-bold": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        "body-sm": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-sm-medium": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        "body-sm-semibold": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "body-sm-bold": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        "body-xs": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "body-xs-medium": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "body-xs-semibold": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "body-xs-bold": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "700",
          },
        ],
        "body-2xs": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "400",
          },
        ],
        "body-2xs-medium": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "500",
          },
        ],
        "body-2xs-semibold": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "600",
          },
        ],
        "body-2xs-bold": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "700",
          },
        ],
      },
      animation: {
        "slide-right": "slide-right 0.25s linear",
        "slide-left": "slide-left 0.25s linear",
      },
      keyframes: {
        "slide-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        "slide-left": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "between-376-1023": { min: "376px", max: "1023px" },
    },
    colors: {
      transparent: 'transparent',
      neutral: {
        'white': '#FFFFFF',
        'black': '#000000',
      },
      primary: {
        900: "#7C3212",
        800: "#9A3A12",
        700: "#C2490C",
        600: "#EA620C",
        500: "#F97D16",
        400: "#FB9A3C",
        300: "#FDC074",
        200: "#FEDBAA",
        100: "#FFEFD5",
        50: "#FFF9F0",
      },
      blue: {
        900: "#262F3E",
        800: "#2E3A4C",
        700: "#334359",
        600: "#3A4E6A",
        500: "#476182",
        400: "#5B799C",
        300: "#7B96B5",
        200: "#AABBCF",
        100: "#D1DAE6",
        50: "#EBEEF3",
      },
      dark: {
        900: "#292929",
        800: "#3D3D3D",
        700: "#454545",
        600: "#4F4F4F",
        500: "#5D5D5D",
        400: "#6D6D6D",
        300: "#888888",
        200: "#B0B0B0",
        100: "#D1D1D1",
        50: "#E7E7E7",
        25: "#F6F6F6",
      },
      grey: {
        1: "#333333",
        2: "#4F4F4F",
        3: "#828282",
        4: "#BDBDBD",
        5: "#E0E0E0",
        6: "#F2F2F2",
      },
      success: {
        900: "#00672B",
        700: "#00994D",
        500: "#00BC65",
        300: "#15D293",
        100: "#B2ECD0",
        50: "#DFF8EC",
      },
      warning: {
        900: "#F47103",
        700: "#F59F0B",
        500: "#F5BF17",
        300: "#F7D352",
        100: "#FBEBB4",
        50: "#FDF8E1",
      },
      danger: {
        900: "#B7000C",
        700: "#D31121",
        500: "#E9342D",
        300: "#E6696A",
        100: "#FFC9CE",
        50: "#FFEAED",
      },
    },
  },
  plugins: [],
};
