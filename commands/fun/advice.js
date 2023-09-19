module.exports = {
    name: 'advice',
    aliases: [],
    category: 'Games',
    utilisation: '{prefix}advice',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				message.inlineReply(`${JSON.parse(body).slip.advice}`);
			}
			else {
				message.inlineReply('I couldn\'t think of any advice...');
			}
        })
        }}