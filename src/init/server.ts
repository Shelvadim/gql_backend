//Core
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

//schema
import { schema } from '../schema';

//resolvers
import { resolvers } from '../resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app });

export { server, app };
