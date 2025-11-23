import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        epunda: ["Epunda", "sans-serif"],
      },
      colors: {
        background: "#0a0a0a",
        foreground: "#ccf5f5",
        card: "#141414",
        "card-foreground": "#ccf5f5",
        popover: "#0f0f0f",
        "popover-foreground": "#ccf5f5",
        primary: "#3da5d9",
        "primary-foreground": "#ffffff",
        secondary: "#3d4d5c",
        "secondary-foreground": "#d4dce4",
        muted: "#262626",
        "muted-foreground": "#9ca6b0",
        accent: "#a366d9",
        "accent-foreground": "#ffffff",
        destructive: "#e63946",
        "destructive-foreground": "#f8f9fa",
        border: "#3d4d5c",
        input: "#404d5c",
        ring: "#3da5d9",
      },
    },
  },
};

export default config;
