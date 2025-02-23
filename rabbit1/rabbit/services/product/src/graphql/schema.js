import { gql } from 'graphql-tag';

const typeDefs = gql`

# GraphQL Types

  scalar JSON
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Response {
    result: Boolean!
    status: Int!
    message: String!
    data: JSON
  }

  type Query {
    getProduct: Response
  }

  type Mutation {
  createProduct(name: String, desc: String): Response
  uploadFile(file: Upload!): String
}
`;

export default typeDefs;
