const Discord = require('discord.js')

module.exports = {
    name: 'id',
    aliases: ['userid'],
    category: 'Users',
    utilisation: '{prefix}id [ping user]',
module: 'utility',
    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ${prefix}id`)
    .setColor("RANDOM")
    .setDescription("Get a user's Discord user account ID.")
    .addField("Aliases", `\`${prefix}userid\``, true)
    .addField("Allowed Roles", `Everyone unless Staff Only`, true)
    .addField("Usage", `\`${prefix}id\`\n\`${prefix}userid\``)
    .addField("Example", `\`${prefix}id @noob\``)

    if(!args[0] || args[0].toLowerCase() == "help") return message.reply(helpEmbed);

    let joinedargs = args.join(" ");

    let idmem = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(joinedargs) || message.guild.members.cache.find(member => member.user.username.toLowerCase() == joinedargs.toLowerCase()) || message.guild.members.cache.find(member => member.user.tag == joinedargs) || message.guild.members.cache.find(member => member.user.username.toLowerCase().startsWith(joinedargs.toLowerCase())) || message.guild.members.cache.find(member => member.displayName.toLowerCase() == joinedargs.toLowerCase()) || message.guild.members.cache.find(member => member.displayName.toLowerCase().startsWith(joinedargs.toLowerCase())));
    if(!idmem){
        let errorEmbed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ Member Not Found: ${joinedargs}`);

        return message.reply(errorEmbed);
    };

    message.channel.send(`The Discord ID of **${idmem.user.tag}** is: \`${idmem.user.id}\``);

}};