import neo4j from 'neo4j-driver';
// @ts-ignore
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import typeDefs from './typeDefs';

const { ApolloServer } = require('apollo-server');

const schema = makeAugmentedSchema({ typeDefs });
const driver = neo4j.driver('bolt://localhost:7687');
const server = new ApolloServer({ schema, context: { driver } });

server.listen(5000, '0.0.0.0').then((_: { url: string}) => {
  console.log(`GraphQL API ready at ${_.url}`); // eslint-disable-line
});