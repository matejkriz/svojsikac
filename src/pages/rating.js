// @flow
import React from 'react';
import Page from '../browser/layout/Page';
import app from '../browser/app';
import { gql, graphql } from 'react-apollo';

const ResultsPage = () => (
  <Page>
    <div>Hodnocení</div>
    <style jsx>
      {
        `
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
    `
      }
    </style>
  </Page>
);

export default app(graphql(gql`
  query allResults {
    allResults {
      id
      rate
      comment
      group {
        id
        name
      }
    }
  }
`)(ResultsPage));
