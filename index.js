const Koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");
const { typeDefs, resolvers } = require("./graphql");

const app = new Koa();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
app.listen({ port: 3000 }, () =>
  console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
);
