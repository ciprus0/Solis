/*const Discord = require('discord.js')
const os = require('os')
const ms = require('ms')
const { GiveawaysManager } = require("discord-giveaways");
module.exports = {
    name: "stats",
    aliases: ['bot'],
    description: "see the stats for the bot",
    category: 'BotStats',
    utilisation: '{prefix}stats',
    module: 'giveaways',
    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if (message.author.bot) return;
        const prefix = '%'
    
        let servercount = client.guilds.cache.size;
        let usercount = client.users.cache.size;
        let channelscount = client.channels.cache.size;
        let arch = os.arch();
        let platform = os.platform();
        let shard = client.ws.shards.size;
        let NodeVersion = process.version;
        let cores = os.cpus().length;
    
        let stats = new Discord.MessageEmbed()
      
        .setTitle(`Statistics of ${client.user.username}`)
        .setColor(0xADC5FF)
        .addField("Server Count", `${servercount}`, true)
        .addField("Users Count", `${usercount}`, true)
        .addField("Channel's Count", `${channelscount}`, true)
        .addField('Architecture', `${arch}`, true)
        .addField('Platform', `${platform}`, true)
        .addField('Node-Version', `${NodeVersion}`, true)
        .addField('Shards', `${shard}`, true)
        .addField('Cores', `${cores}`, true)
        .setTimestamp()
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
        message.channel.send(stats);
    }    };
    */