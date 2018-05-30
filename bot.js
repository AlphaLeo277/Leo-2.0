const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.equals(bot.user)) return;
    
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'alex') {
    	message.reply('is Jesus');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
