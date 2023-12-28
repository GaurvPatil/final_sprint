// adminRegistration.ts
import { gql } from "graphql-tag";

const AdminRegistrationTypedefs = `#graphql
  type Admin {
    id: ID!
    username: String
    email: String
    password: String
  }

  type Query {
    admin(id: ID!): Admin
  }

  type Mutation {
    registerAdmin(username: String, email: String, password: String): Admin
  }
`;

const adminRegistrationResolver = {
  Query: {
    admin: () => "Hello world Admin!",
  },
  Mutation: {
    registerAdmin: () => "Hello world Admin!",
  },
};

export { AdminRegistrationTypedefs, adminRegistrationResolver };
