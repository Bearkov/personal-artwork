const Discord = require('discord.js');

//const {token} = require ('./config.json');

const client = new Discord.Client();
//client.login(token);

try {client.login(process.env.TOKEN);}
catch (err) {console.log('YO DIS AINT RIGHT');}

client.on('ready', () => {
    console.log('Bot is now connected');
})

client.on('message', message => {
    if (message.content === '!avatar') {
      message.reply(message.author.avatarURL);
    }
  });

  client.on('message', message => {
    if (message.content === 'ping') {
      message.author.sendMessage('shut the fuck up faggot');
    }
  });

  client.on('message', message => {
    if (message.content === 'cheese') {
      message.channel.send(message.content);
    }
  });
  
  client.on('message', message => {
    const bearsers = message.mentions.users.first();
    if (message.content.startsWith('!av')) {
      try {
        message.channel.send('```Successful! That\'ll cost you 1 Salmon!```'+bearsers.displayAvatarURL);
        }
      catch (err) {
        message.channel.send('```!!! Error: This user does not exist. If you\'re sure this error is an error please contact an Admin directly. !!!```');
      }
     }
  });
  process.on("uncaughtException", err => {
    console.log(`Uncaught Bearception`);
    process.exit(1);
  });
