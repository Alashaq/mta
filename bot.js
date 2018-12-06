const Discord = require('discord.js');
const client = new Discord.Client();


client.on('guildMemberAdd', member=> {

    client.channels.get("509728837546803202").send(`***__ Wééééééélcome To overHype Server :bear: :heart: :champagne_glass:   ${member}___***`);
    });
client.login(process.env.BOT_TOKEN);
