module.exports = {
    name: 'respect',
    aliases: ['f', 'respects'],
    category: 'Games',
    utilisation: '{prefix}respect',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
message.channel.send(`${message.author.username} has paid their respects 💙`);
    }}