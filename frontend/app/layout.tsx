import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { SidebarProvider } from '@/components/sidebar-provider'
import { Sidebar } from '@/components/Sidebar'
import AuthPage from './auth/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RexAI',
  description: 'Your AI-powered personal assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('token') !== null;

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isAuthenticated ? (
            <AuthenticatedLayout>{children}</AuthenticatedLayout>
          ) : (
            <AuthPage />
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

