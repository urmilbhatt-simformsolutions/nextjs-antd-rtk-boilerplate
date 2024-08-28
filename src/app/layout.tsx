import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { Providers } from "../components/Providers";
import Navbar from "../components/Navbar";
import AntdConfigProvider from "../components/AntdConfigProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inspirational Quotes",
  description:
    "A collection of inspirational quotes with Next.js 14, Ant Design, Redux Toolkit, and RTK Query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <AntdConfigProvider>
              <Navbar />
              {children}
            </AntdConfigProvider>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}