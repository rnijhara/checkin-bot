import { Client } from 'discord.js';

const client = new Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  console.log(message.content);
});

client.login('token')
  .then(() => console.log('logged in'))
  .catch((err) => console.error(err));
