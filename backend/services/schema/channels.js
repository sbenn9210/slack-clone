const { gql } = require("apollo-server");

const typeDefs = gql`
  type Channel {
    id: ID!
    name: String
    description: String
    is_private: Boolean
  }

  extend type Query {
    channels: [Channel]
  }

  extend type Mutation {
    createChannel(
      name: String!
      description: String
      is_private: Boolean!
    ): Channel
  }
`;

module.exports = {
  typeDefs
};
