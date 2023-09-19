module.exports = {
    name: 'rate',
    aliases: ['None'],
    category: 'Games',
    utilisation: '{prefix}rate [text]',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const answers = [
    // Postive
    '💯', 'Yes', 'me likey', '👀', '😍😍', 'it\'s cool yea', 'uhhhh yes it\'s awesome', 'indeed', 'would bang', 'my favorite', 'pretty good', 'music to my ears',
    'dreamy', 'Cool', 'at least it\'s not bad', 'not the best but still good', 'AMAZING', 'dude, that\'s like, awesome',
    `that's cute`, 'underrated',

    // Negative
    'how about no', 'yeah no', 'needs a lot of improvement', 'barely ok, in short it\'s shit', '💩 basically', 'just horrible', 'never ask me to rate that again', 'overrated',
    'nobody wants to see that', 'i disapprove', 'i\'m not allowed to say', 'that\'s goodn\'t', '💀', 'very uhh, how do i say this without sounding rude', 'might as well throw it away',
    'this makes me wanna 🤮', 'LMFAOOOO 💀💀💀', `you better be joking`, `ain't no way bro 💀`, `LOL`, `mid`, `💀 worse than mid`
];

const answer = answers[Math.floor(Math.random() * answers.length)];
const db = require('quick.db')
		const { PREFIX } = require('../../config');
        let prefix;
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
    
            if (fetched === null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
if (args[0]) {
    message.inlineReply(answer);
}
else {
    
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
}}};