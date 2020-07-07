import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://perspective_server:5000/',
});

export const getMap = () => client
  .query({
    query: gql`
    {
      rates(currency: "USD") {
        currency
      }
    }
  `,
  })
  .then((result) => alert(result));
