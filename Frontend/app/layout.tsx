import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WagmiProvider } from "@/components/providers/wagmi-provider"
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LiquiDOT - AI Liquidity Pool Manager",
  description: "Optimize your liquidity pool investments with AI-powered strategies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <WagmiProvider>
            {children}
            <Toaster position="top-right" richColors />
          </WagmiProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
