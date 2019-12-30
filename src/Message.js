function author(message) {
	return { __typename: 'User', id: message.author };
}

function __resolveReference(message, context) {
	return context.prisma.message({ id: message.id });
}

module.exports= { author, __resolveReference }