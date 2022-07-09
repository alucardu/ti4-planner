const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./resolvers.js');
const typeDefs = require('./schema.js');

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs
});

async function startServer() {
    await apolloServer.start();
    const app = express();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, function () {
      console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
    });
}

startServer();