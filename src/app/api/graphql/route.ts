import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { prisma } from "../../../../prisma/dbconfig/dbConfig";

const typeDefs = gql`
  type student {
    username: String
    email: String
  }

  type Query {
    getStudents: [student]
  }

  type Mutation {
    createStudent(username: String, email: String): student
  }
`;

interface createStuedent {
  username: string;
  email: string;
}

const resolvers = {
  Mutation: {
    createStudent: async (_parent: any, args: createStuedent) => {
    const student = await  prisma.student.create({
        data: {
          username: args.username,
          email: args.email,
        },
      });
      return student
    },
  },

  Query: {
    getStudents: async () => {
   
    return await prisma.student.findMany();
    },
  },
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
