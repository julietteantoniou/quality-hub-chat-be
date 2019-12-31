const { getUserId } = require('./utils');
const chatkit = require('./chatKit');
require('dotenv').config({ path: '.env' });

const messages = []
const CHAT_CHANNEL = 'CHAT_CHANNEL'

const resolvers = {
  Query: {
    messages (root, args, context) {
      return messages
    }
  },

  Mutation: {
    // async sendMessage (root, { content }, { pubsub }) {
    //   const author = getUserId(context);
    //   const message = { id: messages.length + 1, author, content }

    //   messages.push(message)
    //   pubsub.publish('CHAT_CHANNEL', { messageSent: message })

    //   return message
    // }
   createChatUser(parent, args, context){
      chatkit.createUser({
        id: args.userId,
        name: args.userName
      })
      return 'successfully created'
    }

  },

  // Subscription: {
  //   messageSent: {
  //     subscribe: (root, args, { pubsub }) => {
  //       return pubsub.asyncIterator(CHAT_CHANNEL)
  //     }
  //   }
  // }
}

module.exports = resolvers