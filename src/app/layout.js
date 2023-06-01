'use client';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Providers } from './providers';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import '../styles/globals.css';

import Navbar from '../components/Navbar/Navbar';

//not using meta data to becuase most of the things are happenign on the client side, which makes it unnecessary
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
