import Navbar from "@/core/Navbar";
import "./globals.css";

export const metadata = {
  title: "ClimaCast - Forecast your day, the smart way.",
  description: "Real-time weather, real-life decisions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link rel="preload" href="/weather-back.png" as="image" />
        <link rel="preload" href="/weather-search.png" as="image" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
