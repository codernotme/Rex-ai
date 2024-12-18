"use client";
import { useEffect, useState } from "react";
import "./globals.css";
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { SidebarProvider } from "@/components/sidebar-provider";
import { Sidebar } from "@/components/Sidebar";
import AuthPage from "./auth/page";

interface AuthPageProps {
  onLoginSuccess: () => void;
}

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "RexAI",
//   description: "Your AI-powered personal assistant",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAuthenticated(localStorage.getItem("token") !== null);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

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
            <SidebarProvider>
              <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                  <Navbar />
                  <main className="flex-1 overflow-auto p-6">{children}</main>
                </div>
              </div>
            </SidebarProvider>
          ) : (
            <AuthPage onLoginSuccess={handleLoginSuccess as AuthPageProps["onLoginSuccess"]} />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
