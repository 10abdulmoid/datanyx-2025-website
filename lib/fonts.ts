import { Poppins } from "next/font/google";
import { Orbitron } from "next/font/google";

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
})

export const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});
