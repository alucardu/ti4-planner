// Apollo server schema
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getHello: String
  }

  type Query {
    sendMail: String
  }
`;
