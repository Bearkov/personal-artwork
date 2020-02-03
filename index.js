const Discord = require('discord.js');

const key = 'NjczNjE2MTE0ODczMjcwMjg2.XjeESA.QXliWxna0OflGmm5a8gpi7hQ5JU';

const client = new Discord.Client();

try {client.login(key);}
catch {console.log('YO DIS AINT RIGHT');}

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
      message.channel.send('shut the fuck up faggot');
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
        message.channel.send('```Successful! That\'t cost you 1 Salmon!```'+bearsers.displayAvatarURL);
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
