import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';


const apolloServer = new ApolloServer({
  resolvers,
  typeDefs
});

async function startServer() {
    await apolloServer.start();
    const app = express();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, function () {
      console.log(`🚀 Server rseady at http://localhost:4000${apolloServer.graphqlPath}`)
    });
}

startServer();