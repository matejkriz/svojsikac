import React from 'react';
import Link from 'next/link';

export default () => (
  <header className="container">
    <div>
      <span className="logo">Svojsíkáč</span>
    </div>
    <div className="menu">
      <nav>
        <Link href="/"><a>Domů</a></Link>
        <Link href="/results"><a>Výsledky</a></Link>
        <Link href="/rating"><a>Bodování</a></Link>
      </nav>
    </div>

    <style jsx>
      {
        `
        .container {
          align-items: center;
          background-color: #008836;
          color: white;
          display: flex;
          flex-direction: column;
          padding: 1em;
        }
        .logo {
          font-family: Arial;
          font-size: 1.5em;
        }
        .menu {
          display: flex;
          width: 100%;
        }
        nav, .locales {
          display: flex;
          flex: 1;
        }
        .link {
          color: white;
          font-family: Arial;
          text-decoration: none;
        }
        nav a {
          color: white;
          font-family: Arial;
          padding: 0.5em;
          text-decoration: none;
        }
    `
      }
    </style>
  </header>
);
