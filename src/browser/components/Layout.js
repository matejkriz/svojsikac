import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Title from '../components/Title';

export default ({ children, title = 'ACTUM UNIVERSAL DEVSTACK' }) => (
  <div>
    <Head>
      <Title>{ title }</Title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/"><a>Home</a></Link> |
        <Link href="/info"><a>Info</a></Link>
      </nav>
    </header>

    { children }
  </div>
);
