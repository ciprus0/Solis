module.exports = {
    name: 'invite',
    aliases: ['None'],
    category: 'Infos',
    utilisation: '{prefix}invite',

   async execute(client, message, args, prefix) {
    const db1 = require("quick.db")
    db1.add(`commands_used`, 1)
       const embed = new dsc.MessageEmbed()
       .setDescription(`[Click this](https://discord.com/oauth2/authorize?client_id=961764818954620959&scope=bot&permissions=8) to invite me to your server!`)
    message.inlineReply(embed)

    }};