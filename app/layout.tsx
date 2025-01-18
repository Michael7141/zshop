import { Poppins } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Zemen Shop Dashboard',
  description: 'Admin dashboard for Zemen Shop',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '600', '500'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen antialiased', poppins.className)}>
        {children}
      </body>
    </html>
  );
}
