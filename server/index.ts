import { driver as neo4jDriver } from 'neo4j-driver';
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import typeDefs from './typeDefs';

const { ApolloServer } = require('apollo-server');

const schema = makeAugmentedSchema({ typeDefs });
const dbDriver = neo4jDriver('bolt://localhost:7687');
const server = new ApolloServer({ schema, context: { dbDriver } });

server.listen(5000, '0.0.0.0').then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});