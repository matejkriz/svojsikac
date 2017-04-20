// @flow
import React from 'react';
import Page from '../browser/layout/Page';
import app from '../browser/app';
import { gql, graphql } from 'react-apollo';

const ResultsPage = ({ data }) => (
  <Page>
    <table>
      <tr>
        <th>
          Družina
        </th>
        { data.allEvents && data.allEvents.map((event) => (
          <th key={event.id}>
            {`„${event.title}“ ${event.name} (${event.maxRate})`}
          </th>
        ))}
      </tr>
      { data.allGroups && data.allGroups.map((group) => (
        <tr key={group.id}>
          <th>{`${group.name}`}</th>
        </tr>
      ))}
    </table>
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
