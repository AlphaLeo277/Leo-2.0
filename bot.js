const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity("Splatoon 2: Octo Expansion");
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
    if (message.content === 'Oof') {
    	message.reply('oof');
  	}
    if (message.content === 'Boosie') {
    	message.reply('No, its Agent 8');
  	}
    if (message.content === 'Hello') {
    	message.reply('Hello your Highness!');
  	}
    if (message.content === 'Oops') {
    	message.reply('XD you made a mistake');
  	}
    if (message.content === 'Thank you Agent 8') {
    	message.reply('You are welcome ^v^');
  	}
     if (message.content === 'Succ') {
    	message.reply('( ͡° ͜ʖ ͡°)');
  	}
      if (message.content === 'K') {
    	message.reply('Its not "K" its "Ok"');
  	}
     if (message.content === 'K.') {
    	message.reply('Rude much?');
  	}
     if (message.content === 'k') {
    	message.reply('How hard is it to just say "Ok"?');
  	}
    if (message.content === 'k.') {
    	message.reply('Can we not do this?');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
