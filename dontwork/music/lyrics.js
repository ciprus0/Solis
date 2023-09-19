const lyricsFinder = require('lyrics-finder')
const Discord = require('discord.js')
module.exports = {
    name: 'lyrics',
    aliases: ['None'],
    category: 'Music',
    utilisation: '{prefix}lyrics [artist name] [song name]',
module: 'music',
    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
if (args.length < 1)
return message.channel.send("Please enter the artist name first. !lyrics <Artist Name>")


let artist = args.join(" ");
let songName = '';
let pages = [];
let currentPage = 0;

const messageFilter = m => m.author.id === message.author.id;
const reactionFilter = (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && (message.author.id === user.id)

message.channel.send("Please enter the song name now")
await message.channel.awaitMessages(messageFilter, { max: 1, time: 15000 }).then(async collected => {
    songName = collected.first().content;
    await finder (artist, songName, message, pages)
})



async function finder(artist, songName, message, pages){
let fullLyrics = await lyricsFinder(artist, songName) || "Not Found!";

for (let i = 0; i < fullLyrics.length; i+= 2048){
    const lyric = fullLyrics.substring(i, Math.min(fullLyrics.length, i + 2048));
    
    const msg = new Discord.MessageEmbed()
        .setAuthor('Lyrics ♪', client.user.avatarURL())
        .setDescription(lyric)
        .setColor(0xADC5FF)
    message.channel.send(msg)
}

}
}
}