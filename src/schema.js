const { gql, PubSub } = require('apollo-server');

const typeDefs = gql`

extend type User @key(fields: "id") {
  id: ID! @external
  chats: [Chat]
}

type Chat {
  id: ID!
  user1: String
  user2: String
  messages: [Message]!
}

type Message{
  id: ID!
  chat: Chat!
  sender: User!
  reciever: User!
  content: String!
  createdAt: String! 
}

type Query {
  messages: [Message]
  chat: Chat
}

type Mutation {
  sendMessage(senderID: String!, recieverID: String!, content: String!, chatID: String!): Message

 

  createChatUser(userName: String!, userId: String!) : String
}

`
// type Subscription {
//   messageSent: Message
// }

// createChat(user1ID: String!, user2ID: String!)

module.exports= typeDefs;