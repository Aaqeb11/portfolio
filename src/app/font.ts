import { Poppins, Merriweather } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const epundaz = localFont({
  src: [
    { path: "../fonts/Epunda.woff2", weight: "400", style: "normal" },
    { path: "../fonts/EpundaI.woff2", weight: "400", style: "italic" },
  ],
});
