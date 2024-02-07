import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-popins",
  weight: ["400", "700"],
  display: "swap",
});

export const fonts = {
  poppins,
};
