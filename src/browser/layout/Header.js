import React from 'react';
import Link from 'next/link';

export default () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Svojsíkáč</span>
        <div className="mdl-layout-spacer" />
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <Link href="/"><a className="mdl-navigation__link">Domů</a></Link>
          <Link href="/results"><a className="mdl-navigation__link">Výsledky</a></Link>
          <Link href="/rating"><a className="mdl-navigation__link">Bodování</a></Link>
        </nav>
      </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Svojsíkáč</span>
        <nav className="mdl-navigation">
          <Link href="/"><a className="mdl-navigation__link">Domů</a></Link>
          <Link href="/results"><a className="mdl-navigation__link">Výsledky</a></Link>
          <Link href="/rating"><a className="mdl-navigation__link">Bodování</a></Link>
        </nav>
      </div>
      <style jsx>
        {
          `
          `
        }
      </style>
  </div>
);
