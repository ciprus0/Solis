const akinator = require("discord.js-akinator");
module.exports = {
    name: 'akinator',
    aliases: ['None'],
    category: 'Games',
    utilisation: '{prefix}akinator',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
akinator(message, client)
    }}