'use client'
import Navbar from '@/components/seller/Navbar'
import Sidebar from '@/components/seller/Sidebar'
import { AppContextProvider } from '@/context/AppContext'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        <AppContextProvider>
        {children}
        </AppContextProvider>
      </div>
    </div>
  )
}

export default Layout