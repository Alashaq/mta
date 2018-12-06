const Discord = require('discord.js');
const client = new Discord.Client();


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
      if (!channel) return; 
           message.channel.send(`**Wééééééélcome To overHype Server :bear: :heart: :champagne_glass:  .**`)
    });
client.login(process.env.BOT_TOKEN);
