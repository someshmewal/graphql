import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
 

import typeDefs from './schema/schema.js';
import resolvers from './resolvers/resolver.js';

const app = express();

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/graphql", expressMiddleware(server));


  app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000/graphql');
  });
};

startServer();
