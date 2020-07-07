import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:5000/',
});

const getMap = ({ root = 'music' } = {}) => client
  .query({
    query: gql`
    {
      Map(root: $root) {
        _id
        root
        nodes {
          text
        }
      }
    }
  `,
    variables: {
      root,
    },
  });

export default { getMap };
