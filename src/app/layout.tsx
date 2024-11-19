import type { Metadata } from "next";
import Navbar from "./Components/Navbar"; // Adjust the path as per your project structure
import Footer from "./Components/Footer"; // Adjust the path as per your project structure
import "./globals.css";

export const metadata: Metadata = {
  title: "Finmanbd",
  description: "Empowering Financial Success Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
