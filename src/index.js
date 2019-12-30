const server = require('./server.js');

require('dotenv').config();

const options = { PORT: process.env.PORT || 4000 };

server.start(options, ({ PORT }) => {
	console.log(`Running on ${PORT}`);
});