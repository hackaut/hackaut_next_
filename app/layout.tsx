import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Toaster } from "@/components/ui/sonner";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HACKAUT",
  description: "Tech club of MAKAUT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spacegrotesk.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
