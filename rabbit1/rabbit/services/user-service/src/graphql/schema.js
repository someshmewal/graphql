import { gql } from 'graphql-tag';

const typeDefs = gql`

# GraphQL Types

scalar JSON

  type User {
    data: String
  }

  type Response {
    result: Boolean!
    status: Int!
    message: String!
    data: JSON
  }

  type Query {
    getUser: Response
  }

  type Mutation {
  createUsers(name: String): User
}
`;

export default typeDefs;
