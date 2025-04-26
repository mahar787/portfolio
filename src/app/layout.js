import { Commissioner } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WAButton from "./components/WAButton";
import Icon from "../../public/logo.png";
// Import Commissioner font
const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the required weights
});

export const metadata = {
  title: "NetIntranet",
  description: "HighTech Web & DevOps Solutions",
  keywords:
    "web development, devops, net intranet, cloud solutions, software services",
  authors: [{ name: "Net Intranet" }],
  openGraph: {
    title: "NetIntranet",
    description: "HighTech Web & DevOps Solutions!",
    images: [Icon],
  },
  twitter: {
    title: "NetIntranet",
    description: "HighTech Web & DevOps Solutions!",
    images: [Icon],
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${commissioner.variable} antialiased`}>
        <Navbar />
        {children}
        <WAButton />
        <Footer />
      </body>
    </html>
  );
}
