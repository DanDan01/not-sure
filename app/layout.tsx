import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '100' })

export const metadata: Metadata = {
  title: 'Not Sure',
  description: 'Not sure what this is but it will be a fun ride.',
};

export default function RootLayout({
  children, stuff
}: {
  children: React.ReactNode;
  stuff: React.ReactNode;
}) {
  return (
    <>
    <html lang="en">
      <body className={`${roboto.className} antialiased `}>{children}
        <h1 className={`text-5xl`}>{stuff}</h1>
      </body>
    </html>
    </>
  );
}
