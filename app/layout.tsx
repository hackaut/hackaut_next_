import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

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
      <body className={spacegrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
