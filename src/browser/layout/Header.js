import React from 'react';
import Link from 'next/link';

export default () => (
  <header className="container">
    <div>
      <span className="logo">ACTUM DEVSTACK </span>
      <span className="desctiption">
        (based on <a title="Este on github" href="https://github.com/este">Este</a>)
      </span>
    </div>
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/info"><a>Info</a></Link>
    </nav>

    <style jsx>{`
        .container {
          align-items: center;
          background-color: #ed3d25;
          color: white;
          display: flex;
          flex-direction: column;
          padding: 1em;
        }
        .description {
          fontSize: 0.7em;
        }
        .logo {
          font-family: Arial;
          font-size: 1.5em;
        }
        nav {
          display: flex;
          width: 100%;
        }
        a {
          color: white;
          fontFamily: Arial;
          padding: 0.5em;
          textDecoration: none;
        },
    `}</style>
  </header>
);
