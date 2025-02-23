import { getProductList, createProduct } from '../services/productService.js';
import path from 'path';
import fs from 'fs';

const resolvers = {

  Query: {
    getProduct: async () => {
      const result = await getProductList()
      return result
    },
  },
  Mutation: {
    createProduct: async (_, { name, desc }) => {
      const result = await createProduct(name, desc);
      return result
    },
    uploadFile: async (_, { file }) => {
      // Use the `file` directly as a GraphQL Upload type
      const { createReadStream, filename, mimetype } = await file;

      // Define the path to store the file
      const uploadDir = path.join(__dirname, 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Create a writable stream
      const filePath = path.join(uploadDir, filename);
      const writeStream = fs.createWriteStream(filePath);
      const readStream = createReadStream();

      // Pipe the file from the read stream to the write stream
      readStream.pipe(writeStream);

      return `File uploaded to ${filePath}`;
    }
  },
};

export default resolvers;

