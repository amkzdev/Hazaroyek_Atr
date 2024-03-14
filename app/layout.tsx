import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./_assets/theme";
import { Header } from "./_components";

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
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Container maxWidth='xl'>
              <Header />
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
