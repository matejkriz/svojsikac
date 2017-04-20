// @flow
import React from 'react';
import Page from '../browser/layout/Page';
import app from '../browser/app';
import { gql, graphql } from 'react-apollo';

const getTotalRate = (results) => results.reduce((acc, val) => acc + val.rate, 0);

const ResultsPage = ({ data }) => (
  <Page>
    <div>
      <div>
        <span>
          Družina
        </span>
        -
        <span>
          Body
        </span>
      </div>
      <ul>
      { data.allGroups && data.allGroups.map((group) => (
        <li key={group.id}>
          <span>{`${group.name}`}</span>
          -
          <span>{getTotalRate(group.results)}</span>
        </li>
      ))}
      </ul>
    </div>
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
  query results {
  allEvents {
    id
    maxRate
    name
    title
  }
  allGroups {
      id
      name
      category
      results {
        id
        rate
        event {
          id
          name
          slug
        }
      }
  }
}
`)(ResultsPage));
