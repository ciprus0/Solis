module.exports = {
    name: 'role',
    aliases: ['None'],
    category: 'Users',
    utilisation: '{prefix}role [ping user] [rolename]',

    execute(client, message, args, prefix) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      
      const { Util } = require('discord.js')
      if(db1.get(`staffrole_id_${message.guild.id}`) == null || db1.get(`staffrole_id_${message.guild.id}`) == 'false') return message.inlineReply(`You have not set up your staff role/s for this server! Please use \`${prefix}setupmoderation\`!`)
      if(message.member.roles.cache.some(r => db1.get(`staffrole_id_${message.guild.id}`).includes(r.id)) || message.member.hasPermission("MANAGE_ROLES")){
        const targetUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if (!targetUser) {
     
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
                  { name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
              ],
              timestamp: new Date(),
              description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
          }
      })
        }
    
        args.shift()
    
        const roleName = Util.removeMentions(args.join(' ').toLowerCase())
        if(!roleName) return message.inlineReply('Please supply a valid role.')
        const { guild } = message
    
        const role = guild.roles.cache.find((role) => {
          return role.name.toLowerCase().startsWith(roleName)
        })
        if (!role) {
       
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
                  { name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
              ],
              timestamp: new Date(),
              description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
          }
      })
        }
        

        const member = guild.members.cache.get(targetUser.id)
        
       if (role.position >= message.member.roles.highest.position) return message.inlineReply(`You can't give someone a role higher than your highest role. You also can\'t give someone your highest role.`)
        if (role.position >= message.guild.me.roles.highest.position) return message.inlineReply(`This is above my role. So I\'m unable to give someone this role.`)
        if (member.roles.cache.get(role.id)) {
            member.roles.remove(role)
            message.delete()
            if(role.name === 'everyone') return message.inlineReply('Please supply a role.')
            if(!targetUser.user || targetUser.user.username === 'undefined'){
              return message.channel.send(`Removed **${role.name}** from \`${targetUser.username}\``)
            } else {
      message.channel.send(`Removed **${role.name}** from \`${targetUser.user.username}\``)
        }} else {
          if(role.name === 'everyone') return message.inlineReply('Please supply a role.')
            member.roles.add(role)
message.delete()
            if(!targetUser.user || targetUser.user.username === 'undefined'){
             return message.channel.send(`Added **${role.name}** to \`${targetUser.username}\``)
            } else {
            message.channel.send(`Added **${role.name}** to \`${targetUser.user.username}\``)
            }
        }
}}};