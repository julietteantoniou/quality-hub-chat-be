const Chatkit = require('@pusher/chatkit-server');
require('dotenv').config({ path: '.env' });

// const CHATKIT_INSTANCE_LOCATOR = process.env.CHATKIT_INSTANCE_LOCATOR;
const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
  key: process.env.CHATKIT_SECRET_KEY,
})

module.exports = chatkit;