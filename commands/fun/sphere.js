module.exports = {
    name: 'sphere',
    aliases: [],
    category: 'Games',
    utilisation: '{prefix}sphere [number]',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
        const db = require('quick.db')
		const { PREFIX } = require('../../config');
        let prefix;
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
    
            if (fetched === null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        if (!args.length) {
     
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
else if (isNaN(args[0])) {

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
else if (args.length > 1) {

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
else {
    const radius = Math.round(args[0]);

    const diameter = Math.round(2 * radius);
    const volume = Math.round(1.333 * 3.142 * radius * radius * radius);
    const area = Math.round(4 * 3.142 * radius * radius);

    const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`Radius is ${args[0]}`)
        .addField('Diameter:', diameter, true)
        .addField('Volume Of Sphere:', volume, true)
        .addField('Surface Area Of Sphere', area, true)
        .setTimestamp()
        .setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));

    message.inlineReply(embed);
}}}