const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "setnick",
    aliases: ["snick"],
    category: 'Staff',
    utilisation: '{prefix}setnick [user] <new nickname>',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    execute: async (client, message, args) => {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
   
        if(db1.get(`staffrole_id_${message.guild.id}`) == null || db1.get(`staffrole_id_${message.guild.id}`) == 'false') return message.inlineReply(`You have not set up your staff role/s for this server! Please use \`${prefix}setupmoderation\`!`)
      if(message.member.roles.cache.some(r => db1.get(`staffrole_id_${message.guild.id}`).includes(r.id)) || message.member.hasPermission("MANAGE_NICKNAMES")){
    
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.inlineReply(`I don't have **MANAGE NICKNAMES** Permissions`)

        const member = message.mentions.users.first() ||
            message.guild.members.cache.find(member => member.user.username === `${args[0]}`) ||
            message.guild.members.cache.get(args[0])

        if (!member) {const prefix = '$'
        const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args1.shift().toLowerCase();
        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
  return message.inlineReply({
            embed: {
                color: 0xADC5FF,
                title: `Command: ${command}`,
                footer: { text: 'Created by Tim' },
                fields: [
                    { name: 'Name', value: cmd.name, inline: true },
                    { name: 'Category', value: cmd.category, inline: true },
                    { name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
                    { name: 'Usage', value: cmd.utilisation.replace('{prefix}', client.config1.discord.prefix), inline: true },
                ],
                timestamp: new Date(),
                description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
            }
        })}

        const user = message.guild.members.cache.get(member.id)
        if (!user) return message.inlineReply(`Couldn't find the Members!`)

        if (user.roles.highest.position > message.member.roles.highest.position) return message.inlineReply(`I can't change that Members nickname, they are the same level as you or higher`)
        if (user.roles.highest.position >= message.guild.me.roles.highest.position) return message.inlineReply(`I can't change the Member nickname, they have a higher role position than me`)

        const username = args.slice(1).join(' ')
        if (!username) {const prefix = '$'
        const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args1.shift().toLowerCase();
        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
  return message.inlineReply({
            embed: {
                color: 0xADC5FF,
                title: `Command: ${command}`,
                footer: { text: 'Created by Tim' },
                fields: [
                    { name: 'Name', value: cmd.name, inline: true },
                    { name: 'Category', value: cmd.category, inline: true },
                    { name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
                    { name: 'Usage', value: cmd.utilisation.replace('{prefix}', client.config1.discord.prefix), inline: true },
                ],
                timestamp: new Date(),
                description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
            }
        })}

        try {
            user.setNickname(username);

            message.inlineReply(`${user.toString()}'s nickname is now \`${username}\``)
        } catch (err) {
            console.log(err)
            message.channel.send(`An error occured`)
        }
    }
}}