const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .addField('We are a server full of Bears for Bears and by Bears.');
  msg.channel.send({embed});
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'about',
    description: 'About the bot.',
    usage: 'about'
  };