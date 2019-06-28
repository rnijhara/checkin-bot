import { Client } from 'discord.js';

const client = new Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  console.log(message.content);
});

client.login('NTgwNzYwNTEwMzE2OTM3MjQ2.XOVZsQ.P1k6VbDjoFYEY1JEbxIsr7ddVwE')
  .then(() => console.log('logged in'))
  .catch((err) => console.error(err));
