
  module.exports = {
    name: 'poker',
    aliases: [],
    category: 'Games',
    utilisation: '{prefix}poker',

    async execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
const Discord = require("discord.js");

const fetch = require("node-fetch")
const { MessageButton, MessageActionRow } = require('discord-buttons');

var novc = new Discord.MessageEmbed()

.setTitle("Woops!")
.setDescription("You're not in a voice channel")

var poker = new Discord.MessageEmbed()

.setTitle("Poker")
.setDescription("Press the button below to play poker!")

let channel = message.member.voice.channel;
if(!channel) return message.channel.send(novc)

fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
    method: "POST",
    body: JSON.stringify({
        max_age: 0,
        max_uses: 0,
        target_application_id: "755827207812677713",
        target_type: 2,
        temporary: false,
        validate: null
    }),
    headers: {
        "Authorization": `Bot ODIzMzkxMDU0NjE0NjI2MzA0.YFgIrQ.p_6RwnBKTo3LHkLFFeYrVW3IBp0`,
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(invite => {
        
if(!invite.code) return message.channel.send("I cannot start Poker")

let wtf = new MessageButton()
.setStyle('url')
.setLabel('Play') 
.setEmoji('🎴')
.setURL(`https://discord.com/invite/${invite.code}`)

let wtf2 = new MessageActionRow()
.addComponent(wtf)

message.channel.send("", { embed: poker, component: wtf2})
message.channel.send("https://discord.com/invite/" + invite.code)
        
    
 })

}};