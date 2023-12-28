import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import {
  AdminRegistrationTypedefs,
  adminRegistrationResolver,
} from "../admin/adminRegistration";

// Combine all type definitions
const typeDefs = gql`
  ${AdminRegistrationTypedefs}
`;

// Combine all resolvers
const resolvers = {
  ...adminRegistrationResolver,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
