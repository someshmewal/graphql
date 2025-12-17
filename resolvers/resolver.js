// src/resolvers.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    // Users Queries
    users: async () => {
      const users = await prisma.user.findMany();
      return users.map(user => ({
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      }));
    },
    user: async (_, { id }) => {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      if (!user) return null;
      return {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      };
    },

    // Products Queries
    products: async () => {
      const products = await prisma.product.findMany();
      return products.map(product => ({
        ...product,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      }));
    },
    product: async (_, { id }) => {
      const product = await prisma.product.findUnique({
        where: { id },
      });
      if (!product) return null;
      return {
        ...product,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      };
    },

    // Companies Queries
    companies: async () => {
      const companies = await prisma.company.findMany();
      return companies.map(company => ({
        ...company,
        createdAt: company.createdAt.toISOString(),
        updatedAt: company.updatedAt.toISOString(),
      }));
    },
    company: async (_, { id }) => {
      const company = await prisma.company.findUnique({
        where: { id },
      });
      if (!company) return null;
      return {
        ...company,
        createdAt: company.createdAt.toISOString(),
        updatedAt: company.updatedAt.toISOString(),
      };
    },
  },

  Mutation: {
    // Users Mutations
    createUser: async (_, { email, name, password }) => {
      const user = await prisma.user.create({
        data: {
          email,
          name,
          password, // In a real-world scenario, passwords should be hashed
        },
      });
      return {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      }
    },
    updateUser: async (_, { id, email, name, password }) => {
      const user = await prisma.user.update({
        where: { id },
        data: { email, name, password },
      });
      return {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      }
    },
    deleteUser: async (_, { id }) => {
      const user = await prisma.user.delete({
        where: { id },
      });
      return {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      }
    },

    // Products Mutations
    createProduct: async (_, { name, price, stock }) => {
      const product = await prisma.product.create({
        data: { name, price, stock },
      });
      return {
        ...product,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      }
    },
    updateProduct: async (_, { id, name, price, stock }) => {
      const product = await prisma.product.update({
        where: { id },
        data: { name, price, stock },
      });
      return {
        ...product,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      }
    },
    deleteProduct: async (_, { id }) => {
      const product = await prisma.product.delete({
        where: { id },
      });
      return {
        ...product,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      }
    },

    // Companies Mutations
    createCompany: async (_, { name, location }) => {
      const company = await prisma.company.create({
        data: { name, location },
      });
      return {
        ...company,
        createdAt: company.createdAt.toISOString(),
        updatedAt: company.updatedAt.toISOString(),
      }
    },
    updateCompany: async (_, { id, name, location }) => {
      const company = await prisma.company.update({
        where: { id },
        data: { name, location },
      });
      return {
        ...company,
        createdAt: company.createdAt.toISOString(),
        updatedAt: company.updatedAt.toISOString(),
      }
    },
    deleteCompany: async (_, { id }) => {
      const company = await prisma.company.delete({
        where: { id },
      });
      return {
        ...company,
        createdAt: company.createdAt.toISOString(),
        updatedAt: company.updatedAt.toISOString(),
      }
    },
  },
};

export default resolvers;
