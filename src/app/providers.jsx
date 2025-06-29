'use client';

import { SessionProvider } from "next-auth/react";
import { AppContextProvider } from "@/context/AppContext";
import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <AppContextProvider>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </AppContextProvider>
    </SessionProvider>
  );
}
