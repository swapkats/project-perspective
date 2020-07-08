import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:5000/',
});

const getMap = (mapId: String) => client
  .query({
    query: gql`
      query GetMap($mapId: String) {
        Map(root: $mapId) {
          _id
          root
          nodes {
            text
          }
        }
      }
  `,
    variables: {
      $mapId: mapId,
    },
  })
  .catch(console.error);

export default { getMap };
