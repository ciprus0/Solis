module.exports = (client, message, track) => {
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setAuthor('Now Playing ♪', 'https://i.imgur.com/9ApdLRq.png')
    .setDescription(`[${track.title}](${track.url}) \n\n` + `${client.player.createProgressBar(message, { timecodes: true })}` + `\n\n` + `Playing in: ` + '`' + `${message.member.voice.channel.name}` + '`' + `\n\n` + '`Requested by:`' + ` ${message.guild.members.cache.get(message.author.id).displayName} (${message.author.tag})`)
    .setThumbnail(`${track.thumbnail}`)
    .setColor(0xADC5FF)
    message.channel.send(embed);
};

//`${client.emotes.music} - Now playing ${track.url} into ${message.member.voice.channel.name} ...` 