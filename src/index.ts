import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import {
  createUserTable,
  addUser,
  listTables,
  getUser,
  createProjectTable,
  addProject,
  createAssignmentTable,
  addAssignment,
} from './utils';

//import { client } from '../database/mockdb';

/*
client.connect();
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
*/

//createUserTable();
//listTables();
//addUser('John', 'john@gmail.ca', '123a');
//addProject('onboard new developer', 'active');
//getUser();
//createProjectTable();
//createAssignmentTable();
//addAssignment('john@gmail.ca', 1, 'John');
//addAssignment('smith@gmail.ca', 3, 'Smith');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`Server listening at ${url}`);
});
