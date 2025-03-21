import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import {ClerkProvider} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html className="dark" lang="en">
        <TooltipProvider>
          <body>
            <Navbar />
            {children}
          </body>
        </TooltipProvider>
      </html>
    </ClerkProvider>
  );
}
