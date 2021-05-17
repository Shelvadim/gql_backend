import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { createUserTable } from './utils';
import { listTables } from './utils';
import { client } from '../database/mockdb';

/*
client.connect();
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
*/

//createUserTable();
listTables();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`Server listening at ${url}`);
});
