import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { AuthProvider } from "@/components/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FutbolPage",
  description: "Página de fútbol",
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="...">
        <AuthProvider>
          <Navbar />
          <div className="container mt-4">{children}</div>
          <footer>...</footer>
        </AuthProvider>
      </body>
    </html>
  );
}

