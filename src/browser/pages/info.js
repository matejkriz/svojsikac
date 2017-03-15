// @flow
import React from 'react';
import Page from '../layout/Page';

const InfoPage = () => (
  <Page>
    <div className="message">
      <article>
        <h2>Start Development</h2>
        <ul>
          <li className="list-item">run <span className="code">gulp</span></li>
          <li className="list-item">point your browser to localhost:3000</li>
          <li className="list-item">build something beautiful</li>
        </ul>
      </article>
      <article>
        <h2>Dev Tasks</h2>
        <ul>
          <li className="list-item">
            <span className="code">gulp</span>
            <span> run web app in development mode</span>
          </li>
          <li className="list-item">
           <span className="code">gulp ios</span>
           <span> run iOS app in development mode</span>
          </li>
          <li className="list-item">
            <span className="code">gulp ios -p</span>
            <span> run iOS app in production mode</span>
          </li>
          <li className="list-item">
             <span className="code">gulp android</span>
             <span> run Android app in development mode</span>
          </li>
          <li className="list-item">
            <span className="code">gulp jest</span>
            <span> run jest tests</span>
          </li>
          <li className="list-item">
            <span className="code">gulp jest-watch</span>
            <span> continuous test running for TDD</span>
          </li>
          <li className="list-item">
            <span className="code">gulp eslint</span>
            <span> eslint</span>
          </li>
          <li className="list-item">
            <span className="code">gulp messages-extract</span>
            <span> extract messages for translation</span>
          </li>
          <li className="list-item">
            <span className="code">gulp messages-check</span>
            <span> check missing and unused translations</span>
          </li>
          <li className="list-item">
            <span className="code">gulp messages-clear</span>
            <span> remove unused translations</span>
          </li>
          <li className="list-item">
            <span className="code">gulp favicon</span>
            <span>create universal favicon</span>
          </li>
          <li className="list-item">
            <span className="code">npm run build-size-check</span>
            <span>build-size-check display info about latest build</span>
          </li>
        </ul>
      </article>
      <a href="https://github.com/actum/devstack">more info...</a>
    </div>
    <style jsx>{`
      .code {
        background-color: #908483;
        color: #fff;
        padding: 2px;
      }
      .list-item {
        margin: 7px 0;
      }
      .message {
        color: #908483;
      }
    `}</style>
  </Page>
);

export default InfoPage;
