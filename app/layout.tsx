import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "هزار و یک عطر",
  description: "فروشگاه اینترنتی عطر و ادکلن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={vazir.className}>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
}
