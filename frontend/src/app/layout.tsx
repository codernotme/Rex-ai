import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./Providers";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Rex-AI",
  description:
    "Rex is a personal assistant that helps you stay organized and productive."
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{
            children: children,
            attribute: "class",
            defaultTheme: "system"
          }}
        >
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow bg-inherit">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
