//import { users } from "../../database/mockdb";
import { getUser } from '../utils';

export const resolvers = {
  Query: {
    users: async () => getUser(),
  },
};
