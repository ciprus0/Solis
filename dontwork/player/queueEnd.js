module.exports = (client, message, queue) => {
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setDescription(`${client.emotes.error} - Music stopped | there is no more music in the queue`)
    message.channel.send(embed);
};