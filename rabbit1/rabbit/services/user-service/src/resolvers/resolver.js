import { getUsersList } from '../services/userService.js'

const resolvers = {
  Query: {
    getUser: async () => {
      const result = await getUsersList()
      return result;
    },
  },
  Mutation: {
    createUsers: async (_, { name }) => {
      const newUser = {
        "name": "SCC"
      }
      return { data: newUser }
    },
  },
};

export default resolvers;

