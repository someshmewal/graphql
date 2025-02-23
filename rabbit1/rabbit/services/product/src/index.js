import express from 'express';
import { ApolloServer } from '@apollo/server';
import typeDefs from './graphql/schema.js';
import resolvers from './resolvers/productResolver.js';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Set up __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up upload directory
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Uploads folder created');
}

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name
  }
});

const upload = multer({ storage });

// Create the Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,
});

const PORT = 4002;

// Start the server
const startServer = async () => {
  await server.start();

  // Use body parser middleware and multer upload middleware before Apollo Server
  app.use(bodyParser.json());
  
  // Set the GraphQL endpoint, use multer here
  app.use('/graphql', upload.single('file'), expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Product Service running on http://localhost:${PORT}`);
  });
};

startServer();
