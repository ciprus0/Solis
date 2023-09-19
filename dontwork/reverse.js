module.exports = {
    name: 'reverse',
    aliases: ['None'],
    category: 'Games',
    utilisation: '{prefix}reverse [text]',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if (args.length < 1) {
          const db = require('quick.db')
		const { PREFIX } = require('../../config');
        let prefix;
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
    
            if (fetched === null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
 
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
		message.inlineReply(args.join(' ').split('').reverse().join(''), { disableMentions: 'all' });
    }};