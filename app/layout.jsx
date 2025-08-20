import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "NextShop",
  description: "E-Commerce with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700 min-h-screen`}>
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
