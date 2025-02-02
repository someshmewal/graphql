// src/schema.js
import { gql } from 'graphql-tag';

const typeDefs = gql`
  # GraphQL Types
  type User {
    id: Int
    email: String
    name: String
    password: String
    createdAt: String
    updatedAt: String
  }

  type Product {
    id: Int
    name: String
    price: Float
    stock: Int
    createdAt: String
    updatedAt: String
  }

  type Company {
    id: Int
    name: String
    location: String
    createdAt: String
    updatedAt: String
  }

  # Queries
  type Query {
    users: [User]
    user(id: Int!): User
    products: [Product]
    product(id: Int!): Product
    companies: [Company]
    company(id: Int!): Company
  }

  # Mutations
  type Mutation {
    createUser(email: String!, name: String!, password: String!): User
    updateUser(id: Int!, email: String, name: String, password: String): User
    deleteUser(id: Int!): User

    createProduct(name: String!, price: Float!, stock: Int!): Product
    updateProduct(id: Int!, name: String, price: Float, stock: Int): Product
    deleteProduct(id: Int!): Product

    createCompany(name: String!, location: String!): Company
    updateCompany(id: Int!, name: String, location: String): Company
    deleteCompany(id: Int!): Company
  }
`;

export default typeDefs;
