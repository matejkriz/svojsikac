// @flow
import React from 'react';
import Title from '../app/components/Title';

const styles = {
  code: {
    backgroundColor: '#908483',
    color: '#fff',
    padding: '2px',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: '2em',
  },
  listItem: {
    margin: '7px 0',
  },
  message: {
    color: '#908483',
  },
};

const InfoPage = () => (
  <div style={styles.container}>
    <Title message="Info Page" />
    <div style={styles.message}>
      <article>
        <h2>Start Development</h2>
        <ul>
          <li style={styles.listItem}>run <span style={styles.code}>gulp</span></li>
          <li style={styles.listItem}>point your browser to localhost:3000</li>
          <li style={styles.listItem}>build something beautiful</li>
        </ul>
      </article>
      <article>
        <h2>Dev Tasks</h2>
        <ul>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp</span>
            <span> run web app in development mode</span>
          </li>
          <li style={styles.listItem}>
           <span style={styles.code}>gulp ios</span>
           <span> run iOS app in development mode</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp ios -p</span>
            <span> run iOS app in production mode</span>
          </li>
          <li style={styles.listItem}>
             <span style={styles.code}>gulp android</span>
             <span> run Android app in development mode</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp -p</span>
            <span> run web app in production mode</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp -f</span>
            <span> run web app in development mode,
              but only browser source rebuilds on file changes</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp jest</span>
            <span> run jest tests</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp jest-watch</span>
            <span> continuous test running for TDD</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp eslint</span>
            <span> eslint</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp messages-extract</span>
            <span> extract messages for translation</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>
              gulp messages-extract
            </span>
            <span> extract messages for translation</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp messages-check</span>
            <span> check missing and unused translations</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp messages-clear</span>
            <span> remove unused translations</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>gulp favicon</span>
            <span>create universal favicon</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.code}>npm run build-size-check</span>
            <span>build-size-check display info about latest build</span>
          </li>
        </ul>
      </article>
      <a href="https://github.com/actum/cafe-app">more info...</a>
    </div>
  </div>
);

export default InfoPage;
