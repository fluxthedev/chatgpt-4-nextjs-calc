'use client';
import Head from 'next/head';
import Calculator from './components/Calculator';
import './styles/globals.css';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Head>
        <title>Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Calculator />
    </div>
  );
}
