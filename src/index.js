import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const schema = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello client',
  },
};

const PORT = 4000;

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app });

// Server
//import { server, app } from './init/server';

// Config
//import { PORT } from './init/config';

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
