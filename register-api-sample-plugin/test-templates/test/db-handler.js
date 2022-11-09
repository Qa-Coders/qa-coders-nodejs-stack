const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let server;

module.exports.connect = async () => {
  server = await MongoMemoryServer.create();
  
  const uri = server.getUri();
  
  await mongoose.connect(uri)
}

module.exports.closeDatabase = async () => {
  await mongoose.disconnect();
  await server.stop();
}