const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '~';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    let msg = message.content.toUpperCase();
    let sender = message.author;
    
    if (message.content === prefix + 'PING') {
        message.reply('Pong');
    }
    
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
    if (message.content === 'Oof') {
    	message.reply('oof');
  	}
    if (message.content === 'Boosie') {
    	message.reply('No its Leo 2.0');
  	}
    if (message.content === 'Hello') {
    	message.reply('Hello your Highness!');
  	}
    if (message.content === 'Oops') {
    	message.reply('XD you made a mistake');
  	}
    if (message.content === 'Thank you Leo 2.0') {
    	message.reply('You are welcome ^v^');
  	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
