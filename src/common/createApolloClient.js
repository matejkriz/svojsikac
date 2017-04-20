// @flow
import 'isomorphic-fetch'; // Apollo needs it.
import { ApolloClient, createNetworkInterface } from 'react-apollo';

const createApolloClient = (
  networkInterfaceUri: string,
  headers: Object,
  initialState: Object,
) =>
  new ApolloClient({
    dataIdFromObject: result => result.id || null,
    initialState,
    networkInterface: createNetworkInterface({
      opts: {
        credentials: 'same-origin',
        // Pass headers here if your graphql server requires them
      },
      uri: networkInterfaceUri,
    }),
    // $FlowFixMe
    ssrMode: !process.browser,
  });

export default createApolloClient;
