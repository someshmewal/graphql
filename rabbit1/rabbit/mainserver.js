import express from 'express';
import { request } from 'graphql-request';
import bodyParser from 'body-parser';
const app = express();


app.use(bodyParser.json());

const services = {
  user: 'http://localhost:5000/graphql',
  product: 'http://localhost:4001/graphql'
};

const forwardGraphQLRequest = async (url, query, variables, headers) => {
  try {
    const data = await request(url, query, variables, headers);
    return data;
  } catch (error) {
    console.error('Error forwarding GraphQL request:', error);
    throw error;
  }
};

// Route for User Service
app.post('/user', async (req, res) => {
  const { query, variables } = req.body;
  try {
    const data = await forwardGraphQLRequest(services.user, query, variables);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error processing user service request' });
  }
});

// Route for Product Service
app.post('/product', async (req, res) => {
  const { query, variables, headers } = req.body;
  try {
    const data = await forwardGraphQLRequest(services.product, query, variables, headers);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error processing product service request' });
  }
});

// Start the server on port 8080
app.listen(8081, () => {
  console.log('Main server running on http://localhost:8080');
});
