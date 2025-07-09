import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FutbolPage",
  description: "Página de fútbol",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <div className="container mt-4">{children}</div>
        <footer className="bg-dark text-white text-center py-3 mt-4">
          © 2025 FutbolPage. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}

