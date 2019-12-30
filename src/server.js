const { GraphQLServer, PubSub } = require('graphql-yoga');
const typeDefs = require('./schema');
const resolvers = require('./resolver');
const message = require('./Message');
const user = require('./User');
const { prisma } = require('../prisma/generated/prisma-client');
const { buildFederatedSchema } = require('@apollo/federation');

// const pubsub = new PubSub();

// const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub }})

const server = new GraphQLServer({
	schema: buildFederatedSchema([
		{
			typeDefs,
      resolvers,
      message,
      user
		},
	]),
	context: request => {
		// return { ...request, prisma, pubsub };
		return { ...request, prisma };
	},
});

module.exports = server;