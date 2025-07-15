import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FutbolPage",
  description: "Página de fútbol",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className="container mt-4">{children}</div>
          <footer className="text-center text-white mt-5 mb-4">
            <small>© 2025 FutbolPage ⚽</small>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
