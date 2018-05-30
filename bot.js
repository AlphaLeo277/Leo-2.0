const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Ping') {
    	message.reply('Pong!');
  	}
    if (message.content === 'Alex') {
    	message.reply('Alex is Jesus');
  	}
    if (message.content === 'Leo') {
    	message.reply('Leo is your Senpai');
  	}
    if (message.content === 'Marco') {
    	message.reply('Polo!');
  	}
    if (message.content === 'Nights') {
    	message.reply('Good night :)');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
