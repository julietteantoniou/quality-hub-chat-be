const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });
const JWT_SECRET = process.env.JWT_SECRET;

function getUserId(context) {
	const Authorization = context.request.get('Authorization');
	if (Authorization) {
		const token = Authorization.replace('Bearer ', '');
		const { id: userId } = jwt.verify(token, JWT_SECRET);
		return userId;
	}
	throw new Error('Not Authenticated');
}

module.exports = { getUserId };