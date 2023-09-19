const { Discord } = require("discord-player");

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',
module: 'music',
    execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if (!message.member.voice.channel) {
          
            message.channel.send(`${client.emotes.error} - You're not in a voice channel !`) 
        return 
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
       
            message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);
        return }

        if (!args[0]) {
     
            message.channel.send(`${client.emotes.error} - Please indicate the title of a song !`) 
        return 
        }
        client.player.play(message, args.join(" "), { firstResult: true });
    },
};