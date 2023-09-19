module.exports = (client, message, queue, track) => {
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setAuthor('Queued ♪', 'https://i.imgur.com/9ApdLRq.png')
    .setDescription(`[${track.title}](${track.url}) \n\n` + `<@${message.author.id}>`)
    .setColor(0xADC5FF)
    .setThumbnail(`${track.thumbnail}`)

    message.channel.send(embed);
};


//`${client.emotes.music} - ${track.title} has been added to the queue !`