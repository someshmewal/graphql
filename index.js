import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import typeDefs from './schema/schema.js';
import resolvers from './resolvers/resolver.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {

  if (req.method === 'OPTIONS') {
    return next();
  }

  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  // Verify token here and set req.user if needed
  next();
});

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();

  // app.use(express.json());

  app.use(
    '/graphql',
    cors(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        return { user: req.user || null };
      },
    })
  );

  app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000/graphql');
  });
};

startServer();


