'use client'

import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Input } from "@/components/ui/input"
import CollapsibleSidebar from "@/components/CollapsibleSidebar"
import { Button } from "@/components/ui/button"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="flex flex-col h-screen bg-background">
            <header className="w-full border-b bg-background">
              <div className="max-w-screen-2xl mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center w-1/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-blue-600"
                    aria-label="Acme Logo"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="ml-2 text-lg font-semibold">Acme</span>
                </div>
                <div className="flex-1 max-w-md mx-auto">
                  <Input type="search" placeholder="Search Diaries" className="w-full" />
                </div>
                <div className="flex items-center space-x-4 w-1/3 justify-end">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button variant="ghost">Sign In</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button variant="default">Sign Up</Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <button className="text-gray-600 hover:text-gray-900" aria-label="Add new">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" aria-label="Notifications">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                      </svg>
                    </button>
                    <UserButton afterSignOutUrl="/home" />
                  </SignedIn>
                </div>
              </div>
            </header>
            <div className="flex flex-1 overflow-hidden">
              <CollapsibleSidebar />
              <main className="flex-1 overflow-auto p-4">
                {children}
              </main>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}