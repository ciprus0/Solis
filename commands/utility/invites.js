module.exports = {
    name: 'invites',
    aliases: ['inv'],
    category: 'Users',
    utilisation: '{prefix}invites [ping user]',
module: 'utility',
    async execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const userArray = message.content.split(" ");
        const userArgs = userArray.slice(1);
        const member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        
// Fetch all guild invites
const invites = await message.guild.fetchInvites();

// Get array of invites made by message author user
const userInvites = invites.filter(e => e.inviter.id === member.user.id);

// Make a var to save count of the user invites
let inviteCount = 0;

// Loop through each invite and add the uses of the invite to the "inviteCount" variable.
userInvites.forEach(invite => inviteCount += invite.uses);

const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setDescription(`<@!${member.user.id}> has ` + '`' + `${inviteCount}` + '`' + ` invites`)

message.inlineReply(embed);

    }};