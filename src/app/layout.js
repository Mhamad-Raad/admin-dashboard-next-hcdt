'use client';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Providers } from './providers';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import Navbar from '../components/Navbar/Navbar';

export const metadata = {
  title: 'High Cloud',
  description: 'Admin Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar />
          <Providers>{children}</Providers>
        </Provider>
      </body>
    </html>
  );
}
