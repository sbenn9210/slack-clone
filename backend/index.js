const { ApolloServer, gql } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const {typeDefs: users} = require('./services/schema/users')
const {resolvers: usersResolver} = require('./services/resolvers/users')

const port = 4000


const federatedSchema = buildSubgraphSchema([
  {
    typeDefs: gql`
      ${users}
    `,
    resolvers: usersResolver
  }
])




const server = new ApolloServer({
  schema: federatedSchema,
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
}).catch(err => {console.error(err)});









