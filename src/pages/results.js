// @flow
import React from 'react';
import Page from '../browser/layout/Page';
import app from '../browser/app';
import { gql, graphql } from 'react-apollo';

const getTotalRate = (results) => results.reduce((acc, val) => acc + val.rate, 0);

const ResultsPage = ({ data }) => (
  <Page>
    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <thead>
      <tr>
        <th className="mdl-data-table__cell--non-numeric">
          Družina
        </th>
        <th className="mdl-data-table__cell--non-numeric">
          Body
        </th>
      </tr>
      </thead>
      <tbody>
        { data.allGroups && data.allGroups.map((group) => (
          <tr key={group.id}>
            <td className="mdl-data-table__cell--non-numeric">{`${group.name}`}</td>
            <td>{getTotalRate(group.results)}</td>
          </tr>
        ))}
      </tbody>
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
