  /*  
    const Discord = require("discord.js");
    const config = require('../botconfig.json');
    
    module.exports = {
        name: 'removecase',
        aliases: ['rmcase'],
        category: 'Moderation',
        utilisation: '{prefix}rmcase [case number]',
    
        async execute(client, message, args, prefix) {
            if(message.author.id !== '285528911545106432') return;
            const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
            if(message.guild.id !== '758514078783897630') return;
const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'modlogs.sqlite',
});

const MLogs = sequelize.define('mlogs', {
  case: {
      type: Sequelize.INTEGER,
      unique: true,
  },
  modtype: Sequelize.TEXT,
  user_id: Sequelize.STRING,
  user_tag: Sequelize.TEXT,
  reason: Sequelize.TEXT,
  staff_id: Sequelize.STRING,
  staff_tag: Sequelize.TEXT,
  message_id: Sequelize.STRING,
});

let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);

let helpEmbed = new Discord.MessageEmbed()
.setTitle(`Command: ${prefix}removecase`)
.setColor("RANDOM")
.setDescription("Remove a modlog case.")
.addField("Aliases", `\`${prefix}rmcase\``, true)
.addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
.addField("Usage", `\`${prefix}removecase [case number]\`\n\`${prefix}rmcase [case number]\``)
.addField("Example", `\`${prefix}rmcase 5\``)

if(!args[0]) return message.reply(helpEmbed);
if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

let errorEmbed = new Discord.MessageEmbed()
.setColor("#6b0202")
.setDescription(`❌ Mention a valid case number!`);

if(isNaN(args[0])) return message.reply(errorEmbed);

try{

    let thecase = await MLogs({where: {case: args[0]}});

    let error3Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ You cannot remove this case because it wasn't issued by you! Contact the responsible moderator (<@${thecase.staff_id}>) or an Administrator.`);

    if(thecase.staff_id !== message.author.id && !message.member.hasPermission("ADMINISTRATOR")) return message.reply(error3Embed);

    message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).messages.fetch(`${thecase.message_id}`).then(themessage => {
        themessage.edit(`⬇️ **CASE REMOVED** - Removed by ${message.author.tag}`);
        MLogs.destroy({where: {case: args[0]}});

        let successEmbed = new Discord.MessageEmbed()
        .setColor("#39fa53")
        .setDescription(`✅ Removed Case \`${args[0]}\``);

        message.channel.send(successEmbed);
    });

}catch(e){
    console.log(e);

    let error2Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Case (${args[0]}) not found.`);
    
    return message.reply(error2Embed);
}
        }};*/