const { DiscordAPIError } = require("discord.js");
const { execute } = require("../commands/moderation/slowmode");
const config1 = require("../config")
module.exports = (client, member) => {
  const Discord = require('discord.js')
  const db = require('quick.db')
      let join = db.get(`welcome_channel_${member.guild.id}`)
      let customize = db.get(`welcome_message_${member.guild.id}`)
      if(!customize) customize = config1.welcom
      if(!join) return;
      let splita = customize
      .split("[user]")
      .join(client.users.cache.get(member.id).id)
      .split("[membercount]")
      .join(member.guild.memberCount)
      .split("[guild]")
      .join(member.guild.name)
  

      
       member.guild.channels.cache.get(join).send(`<@${member.user.id}>`, {
         embed: {
         author: { name: member.user.tag, iconURL: member.user.displayAvatarURL()},
           color: 0xADC5FF,
           thumbnail: { url: member.guild.iconURL()},
           description: splita,
           
         }
       })

      }
    
        /*const guild = client.guilds.cache.get('702885600436682786');
  const guild1 = client.guilds.cache.get('758514078783897630');
  const guild2 = client.guilds.cache.get('737747949681115267');*/
        /*const membercount = guild.memberCount
        const membercount1= guild1.memberCount
        const membercount2= guild2.memberCount
        const orangeGang = new Discord.MessageEmbed()
          .setAuthor(member.user.tag, member.user.displayAvatarURL())
          .setDescription(`Welcome to **ORANGE GANG**! Ping a <@&783206329212338187> if you need anything! \n\n We are now at **${membercount}** members!`)
          .setColor('ADC5FF')
          .setThumbnail('https://imgur.com/jqR0LMy.png')
        
        const pfpParadise= new Discord.MessageEmbed()
          .setAuthor(member.user.tag, member.user.displayAvatarURL())
          .setDescription(`Welcome to **PFP Paradise**! Ping a <@&811057113790677022> if you need anything! \n\n We are now at **${membercount1}** members!`)
          .setColor('ADC5FF')
          .setThumbnail('https://imgur.com/9ApdLRq.png')*/


          
        
      
       /* const nightBarChannel = '934999145163395102'
        
       

        if (member.guild.id == '901960670843645992'){
          const channel = member.guild.channels.cache.get(nightBarChannel)
      
          channel.send(`<@${member.user.id}>, check out this giveaway!`)
      }
    */
      ;