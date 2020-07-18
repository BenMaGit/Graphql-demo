const { gql } = require("apollo-server-koa");
const typeDefs = gql`
  type Query {
    users: [User]!
  }
  type User {
    name: String
    age: Int
  }
`;
const resolvers = {
  Query: {
    async users() {
      return [{ name: "Ben", age: 28 }];
    },
  },
};

module.exports = { typeDefs, resolvers };
