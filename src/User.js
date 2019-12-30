function message(parent, _args, context) {
	return context.prisma.message({ author: parent.id });
}

module.exports = { message };