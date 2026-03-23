import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "eChankura | Your money. Your market. Your moment.",
  description: "The all-in-one fintech platform built for the hustle. Banking, eCommerce, and fractional investments — designed for the underbanked and ambitious.",
  keywords: ["fintech", "banking", "South Africa", "eCommerce", "investments", "unbanked", "mobile banking"],
  openGraph: {
    title: "eChankura | Your money. Your market. Your moment.",
    description: "The all-in-one fintech platform built for the hustle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
