// src/resolvers.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    // Users Queries
    users: async () => {
      return await prisma.user.findMany();
    },
    user: async (_, { id }) => {
      return await prisma.user.findUnique({
        where: { id },
      });
    },

    // Products Queries
    products: async () => {
      return await prisma.product.findMany();
    },
    product: async (_, { id }) => {
      return await prisma.product.findUnique({
        where: { id },
      });
    },

    // Companies Queries
    companies: async () => {
      return await prisma.company.findMany();
    },
    company: async (_, { id }) => {
      return await prisma.company.findUnique({
        where: { id },
      });
    },
  },

  Mutation: {
    // Users Mutations
    createUser: async (_, { email, name, password }) => {
      return await prisma.user.create({
        data: {
          email,
          name,
          password, // In a real-world scenario, passwords should be hashed
        },
      });
    },
    updateUser: async (_, { id, email, name, password }) => {
      return await prisma.user.update({
        where: { id },
        data: { email, name, password },
      });
    },
    deleteUser: async (_, { id }) => {
      return await prisma.user.delete({
        where: { id },
      });
    },

    // Products Mutations
    createProduct: async (_, { name, price, stock }) => {
      return await prisma.product.create({
        data: { name, price, stock },
      });
    },
    updateProduct: async (_, { id, name, price, stock }) => {
      return await prisma.product.update({
        where: { id },
        data: { name, price, stock },
      });
    },
    deleteProduct: async (_, { id }) => {
      return await prisma.product.delete({
        where: { id },
      });
    },

    // Companies Mutations
    createCompany: async (_, { name, location }) => {
      return await prisma.company.create({
        data: { name, location },
      });
    },
    updateCompany: async (_, { id, name, location }) => {
      return await prisma.company.update({
        where: { id },
        data: { name, location },
      });
    },
    deleteCompany: async (_, { id }) => {
      return await prisma.company.delete({
        where: { id },
      });
    },
  },
};

export default resolvers;
