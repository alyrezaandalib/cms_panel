const config: {
  blocklist: undefined;
  daisyui: {
    themes: (
      | {
          CMS: {
            secondary: string;
            "base-100": string;
            success: string;
            neutral: string;
            error: string;
            accent: string;
            primary: string;
            base: string;
            info: string;
          };
        }
      | { night: any }
    )[];
  };
  theme: {
    extend: {
      backgroundImage: { "gradient-conic": string; "gradient-radial": string };
    };
  };
  content: string[];
} = {
  blocklist: undefined,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        CMS: {
          primary: "#f1f5f9",

          secondary: "#fff",

          accent: "#19679D",

          neutral: "#20180E",

          base: "#EBF8FF",

          "base-100": "#f3f4f6",

          info: "#71B2F4",

          success: "#489465",

          error: "#c24032",
        },
      },

      {
        night: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],

          primary: "#272935",

          secondary: "#181920",

          accent: "#278ED5",

          neutral: "#EBF8FF",

          base: "#20180E",
        },
      },
    ],
  },
};
export default config;
