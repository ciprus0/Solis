const axios = require('axios')



module.exports = {
    name: 'banner',
    aliases: ['ub', 'userbanner'],
    category: 'Users',
    utilisation: '{prefix}banner [ping user]',
    module: 'utility',
    async execute(client, message, prefix) {
        let user = message.mentions.users.first() || message.author;
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
        
        const data = await axios.get(`https://discord.com/api/users/${user.id}`, {
    headers: {
        Authorization: `Bot ${client.token}`
    }
}).then(d => d.data);
if(data.banner){
    let url = data.banner.startsWith("a_") ? ".gif?size=4096" : ".png?size=4096";
    url = `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${url}`;
    const embed = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.displayAvatarURL())
    .setTitle('Banner')
    .setImage(url)
    message.channel.send(embed)
} else {
    const embed1 = new Discord.MessageEmbed()
    .setDescription(`**${user.username}** has no banner.`)
    message.channel.send(embed1)
}

    }};