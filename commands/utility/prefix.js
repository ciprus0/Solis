const db1 = require("quick.db")
const { MessageEmbed } = require("discord.js")
const { PREFIX } = require("../../config")
module.exports = {
    name: 'prefix',
    aliases: ['None'],
    category: 'Server',
    utilisation: '{prefix}prefix [new prefix] \n {prefix}prefix reset',
module: 'utility',
    async execute(client, message, args) {

        db1.add(`commands_used`, 1)
let option = args[0];

//PERMISSION
if(!message.member.hasPermission("MANAGE_GUILD")) {
	return message.channel.send("You are not allowed or do not have permission to change the prefix")
  }

  let prefix1;

  await db.promise().query('SELECT * FROM prefix WHERE guild_id = ?',[message.guild.id]).then(result => {
	prefix1 = result[0][0]
  
  })

if(!prefix1) {

db.query(`INSERT INTO prefix (guild_id) VALUES(?)`, [message.guild.id]);
console.log(`${message.guild.name} has been added to the prefix guild database`)

}


if(!option) {
prefix = prefix1.prefix

	let prefEmbed = new MessageEmbed()
	.setColor(0xADC5FF)
	.setAuthor(message.guild.name, message.guild.iconURL())
	.setThumbnail(message.guild.iconURL())
	.setDescription(`\nMy current prefix is  ` + `  \`${prefix}\` \n\n\`${prefix}help\``)
  
  return message.inlineReply(prefEmbed);
}

if(option.toLowerCase() === "reset") {
	db.query('UPDATE prefix SET prefix = $ WHERE guild_id = ?',[message.guild.id])
	const embed1 = new MessageEmbed()
	.setColor(0xADC5FF)
	  .setAuthor(message.guild.name, message.guild.iconURL())
	  .setThumbnail(message.guild.iconURL())
	  .setDescription(`\nServer prefix has been set to   ` + `  \`${PREFIX}\` \n\n\`${PREFIX}help\``)
	return await message.inlineReply(embed1)
}

if(args[1]) {
  return message.inlineReply("You can not set prefix a double argument")
}

if(args[0].length > 4) {
  return message.inlineReply("You can not send prefix more than 4 characters")
}

if(args.join("") === PREFIX) {
	db.query('UPDATE prefix SET prefix = ? WHERE guild_id = ?',[PREFIX,message.guild.id])
  const embed1 = new MessageEmbed()
  .setColor(0xADC5FF)
	.setAuthor(message.guild.name, message.guild.iconURL())
	.setThumbnail(message.guild.iconURL())
	.setDescription(`\nServer prefix has been set to   ` + `  \`${PREFIX}\` \n\n\`${PREFIX}help\``)

 return await message.inlineReply(embed1)
}

db.query('UPDATE prefix SET prefix = ? WHERE guild_id = ?',[args[0],message.guild.id])
const embed1 = new MessageEmbed()
  .setColor(0xADC5FF)
	.setAuthor(message.guild.name, message.guild.iconURL())
	.setThumbnail(message.guild.iconURL())
	.setDescription(`\nServer prefix has been set to   ` + `  \`${args[0]}\` \n\n\`${args[0]}help\``)
await message.inlineReply(embed1)
	}};