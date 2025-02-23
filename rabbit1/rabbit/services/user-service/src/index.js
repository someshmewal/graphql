import express from 'express';
import { ApolloServer } from '@apollo/server';
import typeDefs from './graphql/schema.js';
import resolvers from './resolvers/resolver.js';
import { expressMiddleware } from '@apollo/server/express4'; // Import expressMiddleware
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(bodyParser.json());
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const PORT = process.env.user_service_port || 5000;
console.log(process.env.user_service_port,".............")
const startServer = async()=>{
  await server.start();

  app.use('/graphql', expressMiddleware(server));
  app.listen(PORT, () => {
    console.log(`User Service running on http://localhost:${PORT}`);
  });

}

startServer()



