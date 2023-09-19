/*module.exports = {
    name: "pinggiveaway",
    aliases: ['pg'],
    description: "ping for bot",
    category: 'BotStats',
    utilisation: '{prefix}ping',
    module: 'giveaways',
    async execute(client, message, args) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const ms = require("ms");
        const prefix = '%'
const Discord = require("discord.js");
const { GiveawaysManager } = require("discord-giveaways");
        if(message.author.bot) return;
        
        const m = await message.channel.send("Hold on .....")
        
        let pong = new Discord.MessageEmbed()
        .setTitle("🏓 Pong!")
        .setColor(0xADC5FF)
        .setTimestamp()
        .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());
      
        m.edit(pong)
      }};
      */