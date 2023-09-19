const { MessageEmbed } = require('discord.js')
const mojangjs = require("mojangjs")
module.exports = {
    name: "mcskin",
    description: "Show somebodys mcskin",
    utilisation: "mcskin <username>",
    category: "Images",
    async execute(client, message, args, prefix){
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      const db = require('quick.db')
	
       
  let skin = args.join(" ")
  if(!skin) {
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
  
  try {

    let embed = new MessageEmbed()
    .setColor(0x87B4E7)

    .setAuthor(`${message.author.username}`, `https://minotar.net/cube/${args[0]}/100.png`)
    .setDescription(`**Minecraft Skin**: ${args[0]}`)
    .setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${args[0]}/700`)
    .setThumbnail(`https://minotar.net/cube/${args[0]}/100.png`)
    .setFooter(message.guild.name, message.guild.iconURL())
    .setTimestamp()
    message.channel.send(embed)
  
  
} catch(e) {
    message.inlineReply('Either this user does not exist, or you pinged someone. Please provide just the username.')
}
}}