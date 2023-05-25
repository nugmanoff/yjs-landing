import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const interVariable = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={interVariable.className}>
      <Component {...pageProps} />
    </main>
  );
}
