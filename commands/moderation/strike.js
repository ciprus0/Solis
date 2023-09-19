module.exports = {
    name: 'strike',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}strike [ping user] [reason/proof]',
 
    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const db = require('quick.db')
        const Discord = require('discord.js')
  
  if(db.get(`strike_channel_${message.guild.id}`)){
    const personTagged = message.mentions.members.first()
 
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (!personTagged) {
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
        })}
      
        message.delete()
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Staff Strike Request: ${personTagged.user.tag}`, `${message.guild.iconURL()}`)
        
        .addField('Reason/Proof:', message.content.slice(30))
        .setFooter('React if you agree or disagree.')
        .setColor(0xADC5FF)


        const channel = db.get(`strike_channel_${message.guild.id}`)
        
        
            
           
        
        message.guild.channels.cache.get(channel).send(embed).then(function (message) {
            message.react("745865662769135646")
            message.react("745865688635277403") 
           })
        
    
        message.channel.send('**Strike Request Has Been Received, **' + message.author.tag)
     
  }
} else {
    return message.inlineReply(`You have not set up a strike channel. Please use \`${prefix}setstrikechannel\`.`)
}
  }};
