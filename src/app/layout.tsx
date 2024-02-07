import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { AuthProvider } from "@/providers/auth";
import { getServerAuthSession } from "@/server/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudinha - Console",
  description: "Cloudinha console",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerAuthSession();

  return (
    <html lang="en" data-theme="light">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          {session?.user && <Header />}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
