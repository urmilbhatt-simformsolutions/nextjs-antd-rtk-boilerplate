import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import StyledComponentsRegistry from '../lib/AntdRegistry'
import { Providers } from '../components/Providers'
import Navbar from '../components/Navbar'
import AntdConfigProvider from '../components/AntdConfigProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inspirational Quotes',
  description: 'A collection of inspirational quotes with Next.js 14, Ant Design, Redux Toolkit, and RTK Query',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <AntdConfigProvider>
                <Navbar />
                {children}
              </AntdConfigProvider>
            </ThemeProvider>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}