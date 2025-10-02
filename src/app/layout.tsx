import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import posthog from 'posthog-js';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  weight: '100 900',
  style: 'normal',
  variable: '--font-pretendard',
  display: 'swap',
});

const ghanachocolate = localFont({
  src: '../assets/fonts/Ghanachocolate.woff2',
  weight: '500',
  style: 'normal',
  variable: '--font-ghanachocolate',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '멘토버스 - 너에게 닿기를',
  description: '너에게 닿기를 : 단톡 내용으로 확인하는 우리의 대학 라이프',
};

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
  defaults: '2025-05-24',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pretendard.variable} ${ghanachocolate.variable}`}
    >
      <body
        className={`${pretendard.className} bg-color-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
