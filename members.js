/*module.exports = {
    name: 'members',
    aliases: ['users'],
    category: 'Users',
    utilisation: '{prefix}members [role name]',

    execute(client, message) {
        const Discord = require('discord.js')

    const roleName = message.content.split(" ").slice(1).join(" ");

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    const membersWithRole = message.guild.roles.cache.find(role => role.name === roleName).members.map(m => m.user.tag);

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Users in ${roleName}`)
    .setDescription(`${membersWithRole}`)
    .setColor(0xADC5FF)

    return message.channel.send(embed);
}};*/