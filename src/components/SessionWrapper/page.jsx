"use client"
import { AppContextProvider } from '@/context/AppContext';
import { HeroUIProvider } from '@heroui/react';
import { SessionProvider } from 'next-auth/react';

export default function SessionWrapper({ children }) {
  return (
    <SessionProvider>
        <AppContextProvider>
            <HeroUIProvider>
                {children}
            </HeroUIProvider>
        </AppContextProvider>
    </SessionProvider>
  )
}