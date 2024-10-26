import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import MyResolvers from './graphql/resolvers';

const typeDefs = await Bun.file('./schema.graphql').text();
const server = new ApolloServer({
  typeDefs,
  MyResolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
