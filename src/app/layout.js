import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import * as React from "react";
import {HeroUIProvider} from "@heroui/react";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${outfit.className} bg-[#393E46] antialiased text-gray-300`} >
          <Toaster />
            <AppContextProvider>
              <HeroUIProvider>
                {children}
              </HeroUIProvider>
            </AppContextProvider>
        </body>
      </html>
  );
}
