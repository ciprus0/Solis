  
const Discord = require('discord.js')
const client = new Discord.Client({
  disableMentions: "everyone",
  
  disabledEvents: ["TYPING_START"],
  fetchAllMembers: false,
  messageCacheMaxSize: 20
})
global.Util = require('discord.js')
const { PREFIX } = require('./config');
const botconfig = require("./botconfig.json");
global.dsc =  require("discord.js")
const Sequelize = require("sequelize");
client.pendingmutes = require("./pendingmutes.json");
client.pendingbans = require("./pendingbans.json");
client.filters = require("./filters.json"); 
const humanizeDuration = require("humanize-duration");
global.db =  require('./database/db')
global.db40 = require('./database/db')
const fs = require('fs')
client.limits = new Map()
const config = require('./config.json')
require("./ExtendedMessage");
const mongo = require('./mongo')
const messageCount = require('./message-counter')
const moment = require('moment')
const db40 = require('./database/db')

client.on("debug", console.log)


const mongoose = require('mongoose')
//Connects to mongo, sets activity
const automodspam1 = new Set();
const automodspam2 = new Set();
const automodspam3 = new Set();
const automodspam4 = new Set();
const automute1 = new Set();
const automute2 = new Set();
/*
client.on("ready", () => {
  client.guilds.cache.forEach((guild) => {
    
    console.log(guild.ownerID)
    
  })
  
});*/
/*
client.on("guildCreate", async (guild) => {
  
  const embed = new Discord.MessageEmbed()
      .setColor('Red')
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setTitle("New Server!")
      .addField("Server Name", guild.name, true)
      .addField('Owner Name', guild.owner.user.username, true)
      .addField("Server ID", guild.id, true)
      .addField("Owner ID", guild.ownerID, true)
  
      .addField("Member Count", guild.memberCount, true);

      await guild.channels.cache
      .filter(channel => channel.type === "text") //added this line, should work like a charm
      .first()
      .createInvite()
      .then((invite) => embed.addField("Invite link", invite.url, true))
      .catch(() => embed.addField("Invite link", "Missing permissions", true));

  client.channels.cache.get('901960671506337876').send(embed);
});
*/

/*{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyMzM5MTA1NDYxNDYyNjMwNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI2MDY0MDcwfQ.sZ69nYQ3fcy7Byue2QlipNwe5ki8lq98e0d0SHSGp28"
}


const Topgg = require('@top-gg/sdk')
const express = require('express')
const app = express()
const webhook = new Topgg.Webhook('test123hi')
app.post('/dblwebhook', webhook.listener(vote => {
  console.log(vote.user)
}))

app.listen(80)

*/












client.on('message', async message => {
  if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES")) return
    let messager = message.author.id
    let prefix1;
await db40.promise().query('SELECT * FROM prefix WHERE guild_id = ?',[message.guild.id]).then(result => {
prefix1 = result[0][0]

})

if(!prefix1) return


 let prefix;
    let fetched = prefix1.prefix

    if (fetched === null) {
        prefix = PREFIX
    } else {
        prefix = fetched
    }
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args[0];

  // checks if the message author is afk
  if (db.has(message.author.id + '.afk')) {
    message.inlineReply(`Welcome back <@${message.author.id}>, I have removed your AFK.`).then(message => {
      message.delete({ timeout: 3000 /*time unitl delete in milliseconds*/});
  })
    message.member.setNickname(null)
    db.delete(message.author.id + '.afk')
    db.delete(message.author.id + '.messageafk')

}
  
      // then here you use the database :
      // I made .slice(2) so that in the message array it also delete the command and the "start-afk"
   
  
});
/*client.on('message', async message => {
  if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES")) return
    let messager = message.author.id
    let prefix1;
await db.promise().query('SELECT * FROM prefix WHERE guild_id = ?',[message.guild.id]).then(result => {
prefix1 = result[0][0]

})

if(!prefix1) return;

 let prefix;
    let fetched = prefix1.prefix

    if (fetched === null) {
        prefix = PREFIX
    } else {
        prefix = fetched
    }
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  // If one of the mentions is the user
  message.mentions.users.forEach(user => {
    if (user.id === client.user.id) return
      if (db.has(user.id + '.afk')) message.inlineReply('<@' + user.id + '> is AFK: ' + db.get(user.id + '.messageafk'))
  })
})*/

client.on('message', async message => {
  if (message.author.bot || message.channel.type === 'dm') return;
if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
  const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
  const currentNickname = message.member.displayName;
  const newNickname = currentNickname.replace('[AFK]', '')
  await db.delete(`afk-${message.author.id}+${message.guild.id}`)
  message.member.setNickname(newNickname)
  message.inlineReply(`Welcome back <@${message.author.id}>, I have removed your AFK.`).then(msg=>msg.delete({timeout:"5000"/*Time until delete in milliseconds*/})
  )
}
//checking for mentions
if(message.mentions.members.first()) {
const { afk } = require('./Collection')
  const data = afk.get(message.mentions.members.first().id)

  if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
    
    if(!data) return message.inlineReply('`' + message.mentions.members.first().user.username + '`' + " is AFK")
    const [ timestamp ] = data;
    const timeAgo = moment(timestamp).fromNow();


      message.channel.send('`' + message.mentions.members.first().user.username + "` is AFK: " + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`) + ` - ${timeAgo}`)
  }else return;
}else;
});
/*
client.snipe = new Map()
      client.on('messageDelete', async m => {
         if(m.author.id === '823391054614626304') return;
        client.snipe.set(m.channel.id, {
          content: m.content,
          sender: m.author.id,
          image: m.attachments.first() ? m.attachments.first().proxyURL : null,
        })
      }
      );
*/



  //Music Bot Commands Thing


  /*const { Player } = require('discord-player');

  client.player = new Player(client, { autoSelfDeaf: false });*/
  client.config1 = require('./config/bot');
  client.emotes = client.config1.emojis;
  client.filters = client.config1.filters;

  client.commands = new Discord.Collection();
  
  fs.readdirSync('./commands').forEach(dirs => {
      const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
  
      for (const file of commands) {
          const command = require(`./commands/${dirs}/${file}`);
          console.log(`Loading command ${file}`);
          client.commands.set(command.name.toLowerCase(), command);
      };
  });
  
  const events1 = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
 /* const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));*/
  
  for (const file of events1) {
      console.log(`Loading discord.js event ${file}`);
      const event = require(`./events/${file}`);
      client.on(file.split(".")[0], event.bind(null, client));
  };
  
  /*for (const file of player) {
      console.log(`Loading discord-player event ${file}`);
      const event = require(`./player/${file}`);
      client.player.on(file.split(".")[0], event.bind(null, client));
  };*/







// add message as a parameter to your callback function
client.on('message', async (message)  => {
  if (message.author.bot || message.channel.type === 'dm') return;
  const embed = new Discord.MessageEmbed()
  .setDescription('Interested in becoming a **Moderator**? Apply for it [here](https://bit.ly/ax-staff-app)')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside
  if (message.author.id === '979105790109552680') {
  if (message.content === "$staffapps" && message.guild.id === '901960670843645992') { 
    message.inlineReply('Staff application reminder will be sent every 20 minutes in <#' + message.channel.id + '>. ')
      var interval = setInterval (function () {
          // use the message's channel (TextChannel) to send a new message
          message.channel.send(embed)
          .catch(console.error); // add error handling here
      }, 1 * 1200000); 
  } 
  }

  if (message.author.id === '979105790109552680') {
    if (message.content.startsWith('$hired')) {
      let member = message.mentions.users.first()

      const embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name + ' | Notification', message.guild.iconURL())
      .setDescription('You have been selected to be a **Moderator** in Ataraxia. You need to check <#901960671506337879> for more information.')
      try {
      member.send(embed)

      message.inlineReply(`Staff Notification has been sent to ${member.tag}`)
      
      } catch (error) {
        message.inlineReply('Message could not be delivered. DM\'s are closed.')
        return
      }
    }
  }

  if (message.author.id === '979105790109552680') {
    if (message.content.startsWith('$overdue')) {
      let member = message.mentions.users.first()

      const embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name + ' | Notification', message.guild.iconURL())
      .setDescription('You have **__required training__** in Ataraxia as a Staff Member. You will be given one day to finish or set up a time before being **Fired**.')
      try {
      member.send(embed)

      message.inlineReply(`Staff Notification has been sent to ${member.tag}`)
      
      } catch (error) {
        message.inlineReply('Message could not be delivered. DM\'s are closed.')
        return
      }
    }
  }



 if(message.guild.id === '901960670843645992'){
   const member = message.member

   let user

  
  await db12.promise().query('SELECT * FROM messagecount WHERE user_id = ? AND guild_id = ?',[member.user.id, message.guild.id]).then(result => {
  user = result[0][0]
       
  })

   client.filters = require('./filters.json')
   if(!user){
    if (client.filters["wild"].some(word => message.content.toLowerCase().includes(`${word}`))){
      message.delete()
      return
    }
    return
   }


   if(user.total_messages >= 50){
     return
   } else {
    if (client.filters["wild"].some(word => message.content.toLowerCase().includes(`${word}`))){
       message.delete()
       return
     }
   }
 }

const embed51 = new Discord.MessageEmbed()
  .setDescription('Interested in becoming a **Novitatis (Innovator)**? Apply for it [here](https://forms.gle/DSaCrBPwLamU6nHs9)')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside
  if (message.author.id === '285528911545106432') {
  if (message.content === "$novitatisapps" && message.guild.id === '871546040220799026') { 
    message.inlineReply('Novitatis application reminder will be sent every 5 minutes in <#' + message.channel.id + '>. ')
      var interval = setInterval (function () {
          // use the message's channel (TextChannel) to send a new message
          message.channel.send(embed51)
          .catch(console.error); // add error handling here
      }, 1 * 300000); 
  } 
  }


const embed521 = new Discord.MessageEmbed()
  .setDescription('Interested in becoming a **Head of House**? Apply for it [here](https://forms.gle/HdDPUt1uEMW5gMgDA)')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside
  if (message.author.id === '285528911545106432') {
  if (message.content === "$hohapps" && message.guild.id === '871546040220799026') { 
    message.inlineReply('HoH application reminder will be sent every 5 minutes in <#' + message.channel.id + '>. ')
      var interval = setInterval (function () {
          // use the message's channel (TextChannel) to send a new message
          message.channel.send(embed521)
          .catch(console.error); // add error handling here
      }, 1 * 300000); 
  } 
  }


const embed57 = new Discord.MessageEmbed()
  .setDescription('Interested in becoming a **Support Representative**? Apply for it [here](https://forms.gle/h9aZvAbB9jvetfev5)')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside
  if (message.author.id === '285528911545106432') {
  if (message.content === "$supportapps" && message.guild.id === '871546040220799026') { 
    message.inlineReply('Support application reminder will be sent every 5 minutes in <#' + message.channel.id + '>. ')
      var interval = setInterval (function () {
          // use the message's channel (TextChannel) to send a new message
          message.channel.send(embed57)
          .catch(console.error); // add error handling here
      }, 1 * 300000); 
  } 
  }



  let prefix1;
await db40.promise().query('SELECT * FROM prefix WHERE guild_id = ?',[message.guild.id]).then(result => {
prefix1 = result[0][0]

})


if(!prefix1) return;

 let prefix;
    let fetched = prefix1.prefix

    if (fetched === null) {
        prefix = PREFIX
    } else {
        prefix = fetched
    }

if (message.content === `${prefix}commands` || message.content === `${prefix}commandcount`){

    const commands = fs.readdirSync(`./commands/antiraid`).filter(files => files.endsWith('.js')).length
    const commands1 = fs.readdirSync(`./commands/config`).filter(files => files.endsWith('.js')).length
    const commands2 = fs.readdirSync(`./commands/core`).filter(files => files.endsWith('.js')).length
    const commands3 = fs.readdirSync(`./commands/economy`).filter(files => files.endsWith('.js')).length
    const commands4 = fs.readdirSync(`./commands/fun`).filter(files => files.endsWith('.js')).length
   /* const commands5 = fs.readdirSync(`./commands/giveaways`).filter(files => files.endsWith('.js')).length*/
    const commands6 = fs.readdirSync(`./commands/infos`).filter(files => files.endsWith('.js')).length
    const commands7 = fs.readdirSync(`./commands/invites`).filter(files => files.endsWith('.js')).length
    const commands8 = fs.readdirSync(`./commands/marriage`).filter(files => files.endsWith('.js')).length
    const commands9 = fs.readdirSync(`./commands/messages`).filter(files => files.endsWith('.js')).length
    const commands10 = fs.readdirSync(`./commands/moderation`).filter(files => files.endsWith('.js')).length
    const commands11 = fs.readdirSync(`./commands/music`).filter(files => files.endsWith('.js')).length
    const commands12 = fs.readdirSync(`./commands/utility`).filter(files => files.endsWith('.js')).length
    const embed = new Discord.MessageEmbed()
    .setDescription(`\`Axia\` currently has \`${commands1 + commands + commands2 + commands3 + commands4  + commands6 + commands7 + commands8 + commands9 + commands10 + commands11 + commands12}\` commands!`)
        message.inlineReply(embed);
    
    

}

if(message.content === `${prefix}commands antiraid` || message.content === `${prefix}commands anti`){
  const commands = fs.readdirSync(`./commands/antiraid`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Anti-Raid** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}
if(message.content === `${prefix}commands config`){
  const commands = fs.readdirSync(`./commands/config`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Configuration** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}


if(message.content === `${prefix}commands core`){
  const commands = fs.readdirSync(`./commands/core`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Core** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}


if(message.content === `${prefix}commands economy`){
  const commands = fs.readdirSync(`./commands/economy`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Economy** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}


if(message.content === `${prefix}commands fun`){
  const commands = fs.readdirSync(`./commands/fun`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Fun** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}

/*if(message.content === `${prefix}commands giveaways`){
  const commands = fs.readdirSync(`./commands/giveaways`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Giveaways** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}*/


if(message.content === `${prefix}commands infos`){
  const commands = fs.readdirSync(`./commands/infos`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Infos** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}


if(message.content === `${prefix}commands invite` || message.content === `${prefix}commands invites`){
  const commands = fs.readdirSync(`./commands/invites`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Invite Manager** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}


if(message.content === `${prefix}commands marriage` || message.content === `${prefix}commands love`){
  const commands = fs.readdirSync(`./commands/marriage`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Love** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}


if(message.content === `${prefix}commands messages`){
  const commands = fs.readdirSync(`./commands/messages`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Messages** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}


if(message.content === `${prefix}commands moderation`){
  const commands = fs.readdirSync(`./commands/moderation`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Moderation** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}



if(message.content === `${prefix}commands music`){
  const commands = fs.readdirSync(`./commands/music`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Music** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}

if(message.content === `${prefix}commands utility`){
  const commands = fs.readdirSync(`./commands/utility`).filter(files => files.endsWith('.js')).length
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`Solis:\` **Utility** currently has \`${commands}\` commands!`)
  message.inlineReply(embed)
}



  const embed1 = new Discord.MessageEmbed()
  .setDescription('Have a suggestion for Night Bar or Solis? Click [here](https://forms.gle/cXAhbYmyMCUgWDZW8)')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside
  if (message.author.id === '285528911545106432') {
  if (message.content === "$suggestions" && message.guild.id === '737747949681115267') { 
    message.inlineReply('Suggestions reminder will be sent every 15 minutes in <#' + message.channel.id + '>. ')
      var interval = setInterval (function () {
          // use the message's channel (TextChannel) to send a new message
          message.channel.send(embed1)
          .catch(console.error); // add error handling here
      }, 1 * 900000); 
  } 
  }
const embed2 = new Discord.MessageEmbed()
  .setDescription('Interested in becoming a **Novitatis (Innovator)**? Apply for it [here](https://forms.gle/DSaCrBPwLamU6nHs9)')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside

  if (message.content === "$innovator" || message.content === "$novitatis" && message.guild.id === '871546040220799026') { 
    message.inlineReply(embed2)
      
  } 

  const embed3 = new Discord.MessageEmbed()
  .setDescription('Interested in becoming a **Moderator**? Apply for it [here](https://bit.ly/ax-staff-apps)')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside

  if (message.content === "$staff" && message.guild.id === '901960670843645992') { 
    message.inlineReply(embed3)
      
  } 

  

  const embed4 = new Discord.MessageEmbed()
  .setDescription('Interested in becoming a **Moderator**? Apply for it [here](https://bit.ly/ax-staff-apps)')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside
  if (message.author.id === '979105790109552680') {
  if (message.content === "$staffapps" && message.guild.id === '901960670843645992') { 
    message.inlineReply('Staff application reminder will be sent every 15 minutes in <#' + message.channel.id + '>. ')
      var interval = setInterval (function () {
          // use the message's channel (TextChannel) to send a new message
          message.channel.send(embed4)
          .catch(console.error); // add error handling here
      }, 1 * 900000); 
  } 
  }
  

  const embed5 = new Discord.MessageEmbed()
  .setDescription('**Nitro Boosters** get many perks shown in <#770098514973032480>, including a **larger chance in our giveaways**, and the ability to make **your own custom role!**')
  .setFooter(message.guild.name + ' | Reminders', message.guild.iconURL())
  // Now, you can use the message variable inside
  if (message.author.id === '285528911545106432') {
  if (message.content === "$nitroboosters" && message.guild.id === '737747949681115267') { 
    message.inlineReply('Nitro Booster reminder will be sent every 15 minutes in <#' + message.channel.id + '>. ')
      var interval = setInterval (function () {
          // use the message's channel (TextChannel) to send a new message
          message.channel.send(embed5)
          .catch(console.error); // add error handling here
      }, 1 * 900000); 
  } else return
  }

});












 
    
  const yaml = require("js-yaml");
  console.clear();
console.log('[INFO]: Loading...');
console.log('-------------------------------------');
//anti raid / anti nuke bot coded by legend >:D
const { Client, Collection } = require('discord.js');
const discord = require('discord.js');
const { join } = require('path');
const { readdirSync } = require('fs');
const { mainprefix } = client.config1.discord.prefix;
//dont touch the credits or i will find you and u will have to commit die >:D


client.commands1 = new Collection();
client.aliases1 = new Collection();



const db = require("quick.db")

console.log('-------------------------------------');
console.log(`
██╗     ███████╗ ██████╗ ███████╗███╗   ██╗██████╗         ██╗███████╗
██║     ██╔════╝██╔════╝ ██╔════╝████╗  ██║██╔══██╗        ██║██╔════╝
██║     █████╗  ██║  ███╗█████╗  ██╔██╗ ██║██║  ██║        ██║███████╗
██║     ██╔══╝  ██║   ██║██╔══╝  ██║╚██╗██║██║  ██║   ██   ██║╚════██║
███████╗███████╗╚██████╔╝███████╗██║ ╚████║██████╔╝██╗╚█████╔╝███████║
╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝ ╚════╝ ╚══════╝
`);
console.log('-------------------------------------');
console.log('[CREDITS]: made by LΣGΣПD#0001')
console.log('-------------------------------------');
console.log(`
 █████╗ ███╗   ██╗████████╗██╗      ██████╗  █████╗ ██╗██████╗ 
██╔══██╗████╗  ██║╚══██╔══╝██║      ██╔══██╗██╔══██╗██║██╔══██╗
███████║██╔██╗ ██║   ██║   ██║█████╗██████╔╝███████║██║██║  ██║
██╔══██║██║╚██╗██║   ██║   ██║╚════╝██╔══██╗██╔══██║██║██║  ██║
██║  ██║██║ ╚████║   ██║   ██║      ██║  ██║██║  ██║██║██████╔╝
╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝      ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═════╝ 
`)
console.log('-------------------------------------');
//this took me some time so dont you dare remove credits, if u do remove credits then you will have copy right issues.
client.on('ready', () => {
  /*client.guilds.cache.forEach(guild => {
    guild
      .fetchInvites()
      .then(invites => guildInvites.set(guild.id, invites))
      .catch(err => console.log(err));
  });*/
  const promises = [
    client.shard.fetchClientValues('guilds.cache.size'),
    client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
  ];
  return Promise.all(promises)
        .then(results => {
          const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
          const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
  client.user.setActivity(`${totalGuilds} Servers | $help`, { type: 'WATCHING' });
	console.log(`[INFO]: Ready on client (${client.user.tag})`);
  let allUsers = []
	console.log(`[INFO]: watching ${client.guilds.cache.size} Servers, ${client.channels.cache.size} channels & ${client.users.cache.size} users`)
	console.log('-------------------------------------');
	
})});

       
        
      const db12 = require("./database/db.js")
        
     
      
       
             
             


client.on("roleCreate", async role => {

  


  if (role.managed === true) return;
  const log = await role.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    const user = log.executor
    if (user.id === client.user.id) return;

    let rclguild;

    await db12.promise().query('SELECT * FROM antiraid WHERE guild_id = ?',[role.guild.id]).then(result => {
    rclguild = result[0][0]
    console.log()
    })
  
  if(!rclguild) {
  
  db12.query(`INSERT INTO antiraid (guild_id) VALUES(?)`, [role.guild.id]);
  return 
  }
  
  
  
  let rcluser;
  
  await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[role.guild.id, user.id]).then(result => {
  rcluser = result[0][0]
  console.log()
  })
  
  if(!rcluser) {
  
  db12.query(`INSERT INTO usersraid (guild_id, user_id) VALUES(?,?)`, [role.guild.id, user.id]);
  return 
  }


    let whitelist = db.get(`whitelist_${role.guild.id}`)
    if(whitelist && whitelist.find(x => x.user === user.id)) {
    return;
    }
    let person = parseInt(rcluser.rolecreate)
    let limit = parseInt(rclguild.rolecreate)
    if (limit === null) {
      return;
    }
    let logsID = db.get(`logs_${role.guild.id}`)
    let punish = db.get(`punish_${role.guild.id}`)
    let logs = client.channels.cache.get(logsID)
    if(person > limit - 1) {
      if (punish === "ban") {/**/
      /*role.guild.members.ban(user.id)*/
      
        
        role.guild.members.ban(user.id)
        .then(bruhmoment => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role create limits")
          .addField("Punishment", punish)
          .addField("Banned", "Yes")
          .setColor("GREEN")
          if (logs) {
            return logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role create limits")
          .addField("Punishment", punish)
          .addField("Banned", "No")
          .setColor("#FF0000")
          if (logs) {
            return logs.send({ embed: embed })
          }
        })
      } else if (punish === "kick") {
        role.guild.members.cache.get(user.id).kick().then(bruhlol => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role create limits")
          .addField("Punishment", punish)
          .addField("kicked", "Yes")
          .setColor("GREEN")
          if (logs) {
            return logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role create limits")
          .addField("Punishment", punish)
          .addField("kicked", "No")
          .setColor("#FF0000")
          if (logs) {
            return logs.send({ embed: embed })
          }
        })
      } else if (punish === "demote") {
        role.guild.members.cache.get(user.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            role.guild.members.cache.get(user.id).roles.remove(r.id)
          }
        }).then(bruhlolxd => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role create limits")
          .addField("Punishment", punish)
          .addField("demoted", "Yes")
          .setColor("GREEN")
          if (logs) {
            return logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .setColor("#FF0000")
          .addField("User", user.tag)
          .addField("Case", "Tried to Raid | Breaking role create limits")
          .addField("Punishment", punish)
          .addField("demoted", "No")
          if (logs) {
            return logs.send({ embed: embed })
          }
        })
      }
    } else {
      db12.query('UPDATE usersraid set rolecreate = rolecreate+1 WHERE user_id = ? AND guild_id = ?', [user.id, role.guild.id])
       let pog;
      await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[role.guild.id, user.id]).then(result => {
        pog = result[0][0]
       })
       let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Creating Roles...")
          .addField("Punishment", punish)
          .addField("Times", `${pog.rolecreate || 0}/${limit || 0}`)
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
    }
    }
});

client.on("roleDelete", async role => {
  if (role.managed === true) return;
  const log = await role.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    const user = log.executor
    if (user.id === client.user.id) return;


    let rclguild;

  await db12.promise().query('SELECT * FROM antiraid WHERE guild_id = ?',[role.guild.id]).then(result => {
  rclguild = result[0][0]
  console.log()
  })

if(!rclguild) {

db12.query(`INSERT INTO antiraid (guild_id) VALUES(?)`, [role.guild.id]);
return 
}



let rcluser;

await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[role.guild.id, user.id]).then(result => {
rcluser = result[0][0]
console.log()
})

if(!rcluser) {

  db12.query(`INSERT INTO usersraid (guild_id, user_id) VALUES(?,?)`, [role.guild.id, user.id]);
return 
}
    let whitelist = db.get(`whitelist_${role.guild.id}`)
    if(whitelist && whitelist.find(x => x.user === user.id)) {
    return;
    }
    let person = parseInt(rcluser.roledelete)
    let limit = parseInt(rclguild.roledelete)
    if (limit === null) {
      return;
    }
    let logsID = db.get(`logs_${role.guild.id}`)
    let punish = db.get(`punish_${role.guild.id}`)
    let logs = client.channels.cache.get(logsID)
    if(person > limit - 1) {
      if (punish === "ban") {
        role.guild.members.ban(user.id).then(xdbruhlol => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role delete limits")
          .addField("Punishment", punish)
          .addField("Banned", "Yes")
          .setColor("GREEN")
          if (logs) {
            return logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role delete limits")
          .addField("Punishment", punish)
          .addField("Banned", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "kick") {
        role.guild.members.cache.get(user.id).kick().then(xdbruhlolmoment => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role delete limits")
          .addField("Punishment", punish)
          .addField("kicked", "Yes")
          .setColor("GREEN")
          if (logs) {
            return logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role delete limits")
          .addField("Punishment", punish)
          .addField("kicked", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "demote") {
        role.guild.members.cache.get(user.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            role.guild.members.cache.get(user.id).roles.remove(r.id)
          }
        }).then(bruhmomentlolxd => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the role delete limits")
          .addField("Punishment", punish)
          .addField("demoted", "Yes")
          .setColor("GREEN")
          if (logs) {
            return logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .setColor("#FF0000")
          .addField("User", user.tag)
          .addField("Case", "Tried to Raid | Breaking role delete limits")
          .addField("Punishment", punish)
          .addField("demoted", "No")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      }
    } else {
      db12.query('UPDATE usersraid set roledelete = roledelete+1 WHERE user_id = ? AND guild_id = ?', [user.id, role.guild.id])
       let pog;
      await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[role.guild.id, user.id]).then(result => {
        pog = result[0][0]
       })
       let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(role.guild.name, role.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Deleting Roles...")
          .addField("Punishment", punish)
          .addField("Times", `${pog.roledelete || 0}/${limit || 0}`)
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
    }
    }
})

client.on("channelCreate", async channel => {
  if (channel.type === 'dm') return;
  const log = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_CREATE'
    }).then(audit => audit.entries.first())
    const user = log.executor
    if (user.id === client.user.id) return;
    let rclguild;

    await db12.promise().query('SELECT * FROM antiraid WHERE guild_id = ?',[channel.guild.id]).then(result => {
    rclguild = result[0][0]
    console.log()
    })
  
  if(!rclguild) {
  
  db12.query(`INSERT INTO antiraid (guild_id) VALUES(?)`, [channel.guild.id]);
  return 
  }
  
  
  
  let rcluser;
  
  await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[channel.guild.id, user.id]).then(result => {
  rcluser = result[0][0]
  console.log()
  })
  
  if(!rcluser) {
  
    db12.query(`INSERT INTO usersraid (guild_id, user_id) VALUES(?,?)`, [channel.guild.id, user.id]);
  return 
  }


    let whitelist = db.get(`whitelist_${channel.guild.id}`)
    if(whitelist && whitelist.find(x => x.user === user.id)) {
    return;
    }
    let person = parseInt(rcluser.channelcreate)
    let limit = parseInt(rclguild.channelcreate)
    if (limit === null) {
      return;
    }
    let logsID = db.get(`logs_${channel.guild.id}`)
    let logs = client.channels.cache.get(logsID)
    let punish = db.get(`punish_${channel.guild.id}`)
    if(person > limit - 1) {
      if (punish === "ban") {
        channel.guild.members.ban(user.id).then(hshshshs => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel create limits")
          .addField("Punishment", punish)
          .addField("Banned", "Yes")
          .setColor("GREEN")
          if (logs) {
            return logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel create limits")
          .addField("Punishment", punish)
          .addField("Banned", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "kick") {
        channel.guild.members.cache.get(user.id).kick().then(jsisj => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel create limits")
          .addField("Punishment", punish)
          .addField("kicked", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel create limits")
          .addField("Punishment", punish)
          .addField("kicked", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "demote") {
        channel.guild.members.cache.get(user.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            channel.guild.members.cache.get(user.id).roles.remove(r.id)
          }
        }).then(hrh => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel create limits")
          .addField("Punishment", punish)
          .addField("demoted", "Yes")
          .setColor("GREEN")
          if (logs) {
            return logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .setColor("#FF0000")
          .addField("User", user.tag)
          .addField("Case", "Tried to Raid | Breaking channel create limits")
          .addField("Punishment", punish)
          .addField("demoted", "No")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      }
    } else {
      db12.query('UPDATE usersraid set channelcreate = channelcreate+1 WHERE user_id = ? AND guild_id = ?', [user.id, channel.guild.id])
       let pog;
      await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[channel.guild.id, user.id]).then(result => {
        pog = result[0][0]
       })
      
       let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Creating channels...")
          .addField("Punishment", punish)
          .addField("Times", `${pog.channelcreate || 0}/${limit || 0}`)
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
    }
    }
})

client.on("channelDelete", async channel => {
  const log = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    const user = log.executor
    if (user.id === client.user.id) return;


    let rclguild;

    await db12.promise().query('SELECT * FROM antiraid WHERE guild_id = ?',[channel.guild.id]).then(result => {
    rclguild = result[0][0]
    console.log()
    })
  
  if(!rclguild) {
  
  db12.query(`INSERT INTO antiraid (guild_id) VALUES(?)`, [channel.guild.id]);
  return 
  }
  
  
  
  let rcluser;
  
  await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[channel.guild.id, user.id]).then(result => {
  rcluser = result[0][0]
  console.log()
  })
  
  if(!rcluser) {
  
    db12.query(`INSERT INTO usersraid (guild_id, user_id) VALUES(?,?)`, [channel.guild.id, user.id]);
  return 
  }
    let whitelist = db.get(`whitelist_${channel.guild.id}`)
    if(whitelist && whitelist.find(x => x.user === user.id)) {
    return;
    }
    let person = parseInt(rcluser.channeldelete)
    let limit = parseInt(rclguild.channeldelete)
    if (limit === null) {
      return;
    }
    let logsID = db.get(`logs_${channel.guild.id}`)
    let logs = client.channels.cache.get(logsID)
    let punish = db.get(`punish_${channel.guild.id}`)
    if(person > limit - 1) {
      if (punish === "ban") {
        channel.guild.members.ban(user.id).then(hahsh => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel delete limits")
          .addField("Punishment", punish)
          .addField("Banned", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel delete limits")
          .addField("Punishment", punish)
          .addField("Banned", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "kick") {
        channel.guild.members.cache.get(user.id).kick().then(gsy => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel delete limits")
          .addField("Punishment", punish)
          .addField("kicked", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel delete limits")
          .addField("Punishment", punish)
          .addField("kicked", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "demote") {
        channel.guild.members.cache.get(user.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            channel.guild.members.cache.get(user.id).roles.remove(r.id)
          }
        }).then(lolxd => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the channel delete limits")
          .addField("Punishment", punish)
          .addField("demoted", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .setColor("#FF0000")
          .addField("User", user.tag)
          .addField("Case", "Tried to Raid | Breaking channel delete limits")
          .addField("Punishment", punish)
          .addField("demoted", "No")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      }
    } else {
      db12.query('UPDATE usersraid set channeldelete = channeldelete+1 WHERE user_id = ? AND guild_id = ?', [user.id, channel.guild.id])
       let pog;
      await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[channel.guild.id, user.id]).then(result => {
        pog = result[0][0]
       })
      
       let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(channel.guild.name, channel.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Deleting channels...")
          .addField("Punishment", punish)
          .addField("Times", `${pog.channeldelete || 0}/${limit || 0}`)
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
    }
    }
})

client.on("guildMemberRemove", async member => {
  const log1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
  if (log1.action === "MEMBER_KICK") {
    const log = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
        })
        .then(audit => audit.entries.first());
    const user = log.executor
    if (user.id === client.user.id) return;


    let rclguild;

    await db12.promise().query('SELECT * FROM antiraid WHERE guild_id = ?',[member.guild.id]).then(result => {
    rclguild = result[0][0]
    console.log()
    })
  
  if(!rclguild) {
  
  db12.query(`INSERT INTO antiraid (guild_id) VALUES(?)`, [member.guild.id]);
  return 
  }
  
  
  
  let rcluser;
  
  await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[member.guild.id, user.id]).then(result => {
  rcluser = result[0][0]
  console.log()
  })
  
  if(!rcluser) {
  
    db12.query(`INSERT INTO usersraid (guild_id, user_id) VALUES(?,?)`, [member.guild.id, user.id]);
  return 
  }
    let whitelist = db.get(`whitelist_${member.guild.id}`)
    if(whitelist && whitelist.find(x => x.user === user.id)) {
    return;
    }
    let person = parseInt(rcluser.kicklimit)
    let limit = parseInt(rclguild.kicklimit)
    if (limit === null) {
      return;
    }
    let logsID = db.get(`logs_${member.guild.id}`)
    let punish = db.get(`punish_${member.guild.id}`)
    let logs = client.channels.cache.get(logsID)
    if(person > limit - 1) {
      if (punish === "ban") {
        member.guild.members.ban(user.id).then(lolxdbruh => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the kick limits")
          .addField("Punishment", punish)
          .addField("Banned", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the kick limits")
          .addField("Punishment", punish)
          .addField("Banned", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "kick") {
        member.guild.members.cache.get(user.id).kick().then(ehbruh => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the kick limits")
          .addField("Punishment", punish)
          .addField("kicked", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the kick limits")
          .addField("Punishment", punish)
          .addField("kicked", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "demote") {
        member.guild.members.cache.get(user.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            member.guild.members.cache.get(user.id).roles.remove(r.id)
          }
        }).then(lolbutbruh => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "Tried To Raid | breaking the kick limits")
          .addField("Punishment", punish)
          .addField("demoted", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .setColor("#FF0000")
          .addField("User", user.tag)
          .addField("Case", "Tried to Raid | Breaking kick limits")
          .addField("Punishment", punish)
          .addField("demoted", "No")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      }
    } else {
      db12.query('UPDATE usersraid set kicklimit = kicklimit+1 WHERE user_id = ? AND guild_id = ?', [user.id, member.guild.id])
       let pog;
      await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[member.guild.id, user.id]).then(result => {
        pog = result[0][0]
       })
       
       let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", user.tag)
          .addField("Case", "kicking members...")
          .addField("Punishment", punish)
          .addField("Times", `${pog.kicklimit || 0}/${limit || 0}`)
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
    }
    }
  }
})


client.on("guildMemberAdd", async (member) => {

  if(member.user.bot){
let member1 = member.guild.members.cache.get(member.user.id)
    const log = await member.guild
      .fetchAuditLogs({
        type: "BOT_ADD"
        })
        .then(audit => audit.entries.first());
        if(!log) return
    const user1 = log.executor
    let logsID = db.get(`logs_${member.guild.id}`)
    let logs = client.channels.cache.get(logsID)
    let punish = db.get(`punish_${member.guild.id}`)
    if (user1.id === client.user.id) return;
    let whitelist = db.get(`whitelist_${member.guild.id}`)
    if(whitelist && whitelist.find(x => x.user === user1.id)) {
    return logs.send(`<@${member.guild.ownerID}>, the bot <@${member.user.id}> (${member.user.id}) has been added to the server by the **whitelisted** user: <@${user1.id}> (${user1.id})`)
    }
    if(whitelist && whitelist.find(x => x.user === member.user.id)) {
      return logs.send(`<@${member.guild.ownerID}>, the bot <@${member.user.id}> (${member.user.id}) has been added to the server by the **unwhitelisted** user: <@${user1.id}> (${user1.id})`)
    }
    
    let limit = db.get(`addbot_${member.guild.id}`)
    if (limit === null || limit === 'disabled') {
      return;
    }
    if (limit === 'enabled') {
      member.guild.members.ban(member.user.id)
    
    
      if (punish === "ban") { 
       member.guild.members.ban(user1.id).then(lolxdbruh => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, guild.iconURL())
          .addField("User", user1.tag)
          .addField("Case", "Tried To Raid | Adding unwhitelisted bot: <@" + member.id + '>')
          .addField("Punishment", punish)
          .addField("Banned", "Yes")
          .setColor("GREEN")
          if (logs) {
     
            logs.send(`<@${member.guild.ownerID}>`, { embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", `<@${user1.id}>`)
          .addField("Case", "Tried To Raid | Adding unwhitelisted bot: <@" + member.user.id + '>')
          .addField("Punishment", punish)
          .addField("Banned", "No")
          .setColor("#FF0000")
          if (logs) {
 
            logs.send(`<@${member.guild.ownerID}>`, { embed: embed })
          }
        })
      } else if (punish === "kick") {
        member.guild.members.cache.get(user1.id).kick().then(lolxdok => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", `<@${user1.id}>`)
          .addField("Case", "Tried To Raid | Adding unwhitelisted bot: <@" + member.user.id + '>')
          .addField("Punishment", punish)
          .addField("Kicked", "Yes")
          .setColor("GREEN")
          if (logs) {
      
            logs.send(`<@${member.guild.ownerID}>`, { embed: embed })
            
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", `<@${user1.id}>`)
          .addField("Case", "Tried To Raid | Adding unwhitelisted bot: <@" + member.user.id + '>')
          .addField("Punishment", punish)
          .addField("Kicked", "No")
          .setColor("#FF0000")
          if (logs) {
       
            logs.send(`<@${member.guild.ownerID}>`, { embed: embed })
          }
        })
      } else if (punish === "demote") {
        member.guild.members.cache.get(user1.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            member.guild.members.cache.get(user1.id).roles.remove(r.id)
          }
        }).then(ok => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .addField("User", `<@${user1.id}>`)
          .addField("Case", "Tried To Raid | Adding unwhitelisted bot: <@" + member.user.id + '>')
          .addField("Punishment", punish)
          .addField("Demoted", "Yes")
          .setColor("GREEN")
          if (logs) {
          
            logs.send(`<@${member.guild.ownerID}>`, { embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(member.guild.name, member.guild.iconURL())
          .setColor("#FF0000")
          .addField("User", `<@${user1.id}>`)
          .addField("Case", "Tried to Raid | Adding unwhitelisted bot: <@" + member.user.id + '>')
          .addField("Punishment", punish)
          .addField("Demoted", "No")
          if (logs) {
         
            logs.send(`<@${member.guild.ownerID}>`, { embed: embed })
          }
        })
      }
    }
    
    
} else return

})

client.on("guildBanAdd", async (guild, user) => {

  let member1 = guild.members.cache.get(user.id)
    const log = await guild
      .fetchAuditLogs({
        type: "MEMBER_BAN"
        })
        .then(audit => audit.entries.first());
        if(!log) return
    const user1 = log.executor
    if (user1.id === client.user.id) return;


    let rclguild;

    await db12.promise().query('SELECT * FROM antiraid WHERE guild_id = ?',[guild.id]).then(result => {
    rclguild = result[0][0]
    console.log()
    })
  
  if(!rclguild) {
  
  db12.query(`INSERT INTO antiraid (guild_id) VALUES(?)`, [guild.id]);
  return 
  }
  
  
  
  let rcluser;
  
  await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[guild.id, user.id]).then(result => {
  rcluser = result[0][0]
  console.log()
  })
  
  if(!rcluser) {
  
    db12.query(`INSERT INTO usersraid (guild_id, user_id) VALUES(?,?)`, [guild.id, user.id]);
  return 
  }
    let whitelist = db.get(`whitelist_${guild.id}`)
    if(whitelist && whitelist.find(x => x.user === user1.id)) {
    return;
    }
    let person = parseInt(rcluser.banlimit)
    let limit = parseInt(rclguild.banlimit)
    if (limit === null) {
      return;
    }
    let logsID = db.get(`logs_${guild.id}`)
    let logs = client.channels.cache.get(logsID)
    let punish = db.get(`punish_${guild.id}`)
    if(person > limit - 1) {
      if (punish === "ban") { 
       guild.members.ban(user1.id).then(lolxdbruh => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(guild.name, guild.iconURL())
          .addField("User", user1.tag)
          .addField("Case", "Tried To Raid | breaking the ban limits")
          .addField("Punishment", punish)
          .addField("Banned", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(guild.name, guild.iconURL())
          .addField("User", user1.tag)
          .addField("Case", "Tried To Raid | breaking the ban limits")
          .addField("Punishment", punish)
          .addField("Banned", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "kick") {
        guild.members.cache.get(user1.id).kick().then(lolxdok => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(guild.name, guild.iconURL())
          .addField("User", user1.tag)
          .addField("Case", "Tried To Raid | breaking the ban limits")
          .addField("Punishment", punish)
          .addField("kicked", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(guild.name, guild.iconURL())
          .addField("User", user1.tag)
          .addField("Case", "Tried To Raid | breaking the ban limits")
          .addField("Punishment", punish)
          .addField("kicked", "No")
          .setColor("#FF0000")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      } else if (punish === "demote") {
        guild.members.cache.get(user1.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            guild.members.cache.get(user1.id).roles.remove(r.id)
          }
        }).then(ok => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(guild.name, guild.iconURL())
          .addField("User", user1.tag)
          .addField("Case", "Tried To Raid | breaking the ban limits")
          .addField("Punishment", punish)
          .addField("demoted", "Yes")
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
          }
        }).catch(err => {
          let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(guild.name, guild.iconURL())
          .setColor("#FF0000")
          .addField("User", user1.tag)
          .addField("Case", "Tried to Raid | Breaking ban limits")
          .addField("Punishment", punish)
          .addField("demoted", "No")
          if (logs) {
            logs.send({ embed: embed })
          }
        })
      }
    } else {
      db12.query('UPDATE usersraid set banlimit = banlimit+1 WHERE user_id = ? AND guild_id = ?', [user.id, guild.id])
       let pog;
      await db12.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[guild.id, user.id]).then(result => {
        pog = result[0][0]
       })
      
       let embed = new Discord.MessageEmbed()
          .setTitle("**Anti-Raid**")
          .setThumbnail(user1.displayAvatarURL({ dynamic: true }))
          .setFooter(guild.name, guild.iconURL())
          .addField("User", user1.tag)
          .addField("Case", "banning members...")
          .addField("Punishment", punish)
          .addField("Times", `${pog.banlimit || 0}/${limit || 0}`)
          .setColor("GREEN")
          if (logs) {
            logs.send({ embed: embed })
    }
    }
})





        
 



        /*client.config = config;
       
        const { giveprefix } = yaml.load(fs.readFileSync("./config.yml"));
      
        
        client.commands2 = new Discord.Collection();
       

        const commandFiles1 = readdirSync(join(__dirname, "commands2")).filter(file => file.endsWith(".js"));

        for (const file of commandFiles1) {
            const command = require(join(__dirname, "commands2", `${file}`));
            client.commands2.set(command.name , command);
        }*/


        client.on("message", async message => {
          if (message.author.bot || message.channel.type === 'dm') return;
          const prefix = ["<@899155842186743848>", "<@!899155842186743848>"]
  if (message.content.toLowerCase() === '<@962901764401676350>' || message.content.toLowerCase() === '<@!962901764401676350>') {
let prefix2;
await db40.promise().query('SELECT * FROM prefix WHERE guild_id = ?',[message.guild.id]).then(result => {
prefix2 = result[0][0]

})

if(!prefix2) return;

 let prefix1;
    let fetched = prefix2.prefix

    if (fetched === null) {
        prefix1 = PREFIX
    } else {
        prefix1 = fetched
    }
  const embed = new Discord.MessageEmbed()
  .setDescription('My current prefix is ' + '`' + `${prefix1}` + '`' + '\n\n' + 'Use ' + '`' + `${prefix1}` + 'help' + '`' + ' for more help.')
  .addField('Invite Me:', '[Click this to invite me to your server!](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=523627775)')
 .setTimestamp()
 .setFooter('Satar', client.user.avatarURL())
 .setColor(0xADC5FF)
  message.channel.send(embed)
  }

  let prefixas = '.'

  
  let args = message.content.slice(prefixas.length).trim().split(/ +/g);

  if (!message.content.startsWith(prefixas) || message.author.bot) return;
  let command = args.shift().toLocaleLowerCase();
 
if(command === 'botserverinfo'){
  if(message.author.id !== '979105790109552680') return message.inlineReply('You do not have permission to use this.')
     const Guilds = client.guilds.cache.map(guild => guild.name + guild.id);
     const Guild1 = client.guilds.cache.map(guild => guild.ownerID);
     
     const embed = new Discord.MessageEmbed()
     .setTitle('Servers')
     .setDescription(Guilds)
     message.inlineReply(embed);
}


if(command === 'servers'){
  if(message.author.id !== '979105790109552680') return message.inlineReply('You do not have permission to use this.')
     const Guilds = client.guilds.cache.map(guild => guild.name);
     
     const embed = new Discord.MessageEmbed()
     .setTitle('Servers')
     .setDescription(Guilds)
     message.inlineReply(embed);
};

if(command === 'owners'){
  if(message.author.id !== '979105790109552680') return message.inlineReply('You do not have permission to use this.')
     const Guilds = client.guilds.cache.map(guild => guild.ownerID);
     
     const embed = new Discord.MessageEmbed()
     .setTitle('Owners')
     .setDescription(Guilds)
     message.inlineReply(embed);
}

if(command === 'cupid') {
  if(message.author.id !== '979105790109552680') return message.inlineReply('You cannot use this command kid')
  message.delete()
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')
  message.channel.send('<@806002399063572491>')
  message.channel.send('<@688929105613160493>')


};
          /*let prefix = '%'
         if(prefix === null) prefix = giveprefix;
             if(message.author.bot) return;
             if(message.channel.type === 'dm') return;
         
             if(message.content.startsWith(giveprefix)) {
                 
            
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command1 = args.shift().toLowerCase();
        
            const cmd1 = client.commands2.get(command1) || client.commands2.find(cmd1 => cmd1.aliases && cmd1.aliases.includes(command1));
        
            if (cmd1) cmd1.run(client, message, args);*/
                 
                

/*
            const { GiveawaysManager } = require("discord-giveaways");
client.giveawaysManager = new GiveawaysManager(client, {
  updateCountdownEvery: 3000,
  default: {
    botsCanWin: false,
    embedColor: 0xADC5FF,
    reaction: "846940408910053427"
  }
});

            client.giveawaysManager.on(
              "giveawayReactionAdded",
              async (giveaway, reactor, messageReaction) => {
                if (reactor.user.bot) return;
                try {
                  if(giveaway.extraData){
                  await client.guilds.cache.get(giveaway.extraData.server).members.fetch(reactor.id)
                  }
                 return reactor.send(
                    new Discord.MessageEmbed()
                      .setTimestamp()
                      .setTitle("Entery Approved! | You have a chance to win!!")
                      .setDescription(
                        `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) has been approved!`
                      )
                      .setFooter("Subscribe to ZeroSync on YT!")
                      .setTimestamp()
                  );
                } catch (error) {
                   const guildx = client.guilds.cache.get(giveaway.extraData.server)
                  messageReaction.users.remove(reactor.user);
                  reactor.send( new Discord.MessageEmbed()
                      .setTimestamp()
                      .setTitle(":x: Entery Denied | Databse Entery Not Found & Returned!")
                      .setDescription(
                        `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) has been denied as you did not join **${guildx.name}**`
                      )
                      .setFooter("Subscribe to ZeroSync on YT!")
                  );
                }
              }
            );
            // Check if user reacts on an ended giveaway
            client.giveawaysManager.on('endedGiveawayReactionAdded', (giveaway, member, reaction) => {
                 reaction.users.remove(member.user);
                 member.send(`**Aw snap! Looks Like that giveaway has already ended!**`)
            
            });
            // Dm our winners
            client.giveawaysManager.on('giveawayEnded', (giveaway, winners) => {
                 winners.forEach((member) => {
                     member.send(new Discord.MessageEmbed()
                     .setTitle(`🎁 Let's goo!`)
                     .setDescription(`Hello there ${member.user}\n I heard that you have won **[[This Giveaway]](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID})**\n Good Job On Winning **${giveaway.prize}!**\nDirect Message the host to claim your prize!!`)
                     .setTimestamp()
                     .setFooter(member.user.username, member.user.displayAvatarURL())
                     );
                 });
            });
            // Dm Rerolled winners
            client.giveawaysManager.on('giveawayRerolled', (giveaway, winners) => {
                 winners.forEach((member) => {
                     member.send(new Discord.MessageEmbed()
                     .setTitle(`🎁 Let's goo! We Have A New Winner`)
                     .setDescription(`Hello there ${member.user}\n I heard that the host rerolled and you have won **[[This Giveaway]](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID})**\n Good Job On Winning **${giveaway.prize}!**\nDirect Message the host to claim your prize!!`)
                     .setTimestamp()
                     .setFooter(member.user.username, member.user.displayAvatarURL())
                     );
                 });
            });
            // When They Remove Reaction
            client.giveawaysManager.on('giveawayReactionRemoved', (giveaway, member, reaction) => {
                 return member.send( new Discord.MessageEmbed()
                      .setTimestamp()
                      .setTitle('❓ Hold Up Did You Just Remove a Reaction From A Giveaway?')
                      .setDescription(
                        `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) was recorded but you un-reacted, since you don't need **${giveaway.prize}** I would have to choose someone else 😭`
                      )
                      .setFooter("Think It was a mistake? Go react again!")
                  );
            });
            




          })
              
                  ;














                
const prettyMilliseconds = require('pretty-ms');
const { doesNotReject } = require('assert');
const config1 = require('./config.js');
const message = require('./events/message')
const { SSL_OP_LEGACY_SERVER_CONNECT } = require('constants');
const { Action } = require('argparse');



  
  
    setInterval(() => { 
      let ids = db.get(`rolereq`)
      if(!ids) return;
      ids.forEach(x => {
        let grole = db.get(`rolegiveaway_${x.message}`)
         if(!grole) return;
       let guild =  client.guilds.cache.get(grole.guild)
      if(grole === null) return;
       if(!guild) return;
      let channel =  guild.channels.cache.get(grole.channel)
      if(!channel) return;
      let test = grole.time-5000
      let omg = grole.time
       if(omg < 5000) {
        if(grole === null) return;
       channel.messages.fetch(grole.messagename).then(async m => {
         m.edit(`🎉 *** GIVEAWAY ENDED *** 🎉`)
       })
       channel.messages.fetch(grole.message).then(async a => {
        if (a.reactions.cache.get('🎉').count < 1) {
          let ended = new Discord.MessageEmbed()
      .setAuthor(`${grole.prize}`, guild.iconURL())
      .setDescription(`Winners: No one entered the giveaway`)
      .setColor(`2C2F33`)
      .setFooter(`${grole.winners} Winners` , client.user.displayAvatarURL())  
      a.edit(ended)
      db.delete(`rolegiveaway_${x.message}`)
      return;
      }
      let arr = []
         if (!a.reactions.cache.get('🎉').count < 1) {
          for (let i = 0; i < grole.winners; i++) {
            let users = await a.reactions.cache.get("🎉").users.fetch();
            let list = users.array().filter(u => u.id !== client.user.id);
            let winners = list[Math.floor(Math.random() * list.length) + 0]
      arr.push(`${winners}`)  
          }
          channel.send(`${arr} Won ${grole.prize} ${a.url}`)
       
         let ended = new Discord.MessageEmbed()
        .setAuthor(`${grole.prize}`, guild.iconURL())
        .setDescription(`Winners: ${arr}`)
        .setColor(`2C2F33`)
        .setFooter(`${grole.winners} Winners` , client.user.displayAvatarURL())  
        a.edit(ended)
        db.delete(`rolegiveaway_${x.message}`)
         return;
         } 
      })
      return;
      }
      channel.messages.fetch(grole.message).then(a => {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${grole.prize}`, guild.iconURL())
        .setDescription(`React With 🎉 To Enter\n ${prettyMilliseconds(test)}\nHosted By: <@${grole.by}>\nMust Have ${guild.roles.cache.get(grole.role).name || 'Role Not Found'} to enter.`)
        .setColor(`2C2F33`)
        .setFooter(`${grole.winners} Winners` , client.user.displayAvatarURL())  
        a.edit(embed)
       })
      
      setTimeout(() => {
        let data = {
          prize: grole.prize,
          time: grole.time-5000,
          winners: grole.winners,
          by: grole.by,
          channel: grole.channel,
          role: grole.role,
          guild: grole.guild,
          message: grole.message,
          messagename: grole.messagename
        }
        db.set(`rolegiveaway_${x.message}`, data)
       }, 1000);
      });
      }, 5000)
      setInterval(() => {
      let ids  = db.get(`normalids`)
      if(!ids) return;
      ids.forEach(x => {
        let normalgiveaway = db.get(`normalgiveaway_${x.message}`)
        if(!normalgiveaway) return;
        let guild =  client.guilds.cache.get(normalgiveaway.guild)
        if(normalgiveaway === null) return;
        let test = normalgiveaway.time-5000
      let channel = guild.channels.cache.get(normalgiveaway.channel)
      if(!channel) return;
        if(test < 5000) {
          if(normalgiveaway === null) return;
          channel.messages.fetch(normalgiveaway.messagename).then(async m => {
            m.edit(`🎉 *** GIVEAWAY ENDED *** 🎉`)
          })
          channel.messages.fetch(normalgiveaway.message).then(async a => {
           if (a.reactions.cache.get('🎉').count < 1) {
             let ended = new Discord.MessageEmbed()
         .setAuthor(`${normalgiveaway.prize}`, guild.iconURL())
         .setDescription(`Winners: No one entered the giveaway`)
         .setColor(`2C2F33`)
         .setFooter(`${normalgiveaway.winners} Winners` , client.user.displayAvatarURL())  
         a.edit(ended)
         db.delete(`normalgiveaway_${x.message}`)
         return;
         }
         let arr = []
            if (!a.reactions.cache.get('🎉').count < 1) {
             for (let i = 0; i < normalgiveaway.winners; i++) {
               let users = await a.reactions.cache.get("🎉").users.fetch();
               let list = users.array().filter(u => u.id !== client.user.id);
               let winners = list[Math.floor(Math.random() * list.length) + 0]
         arr.push(`${winners}`)  
             }
             channel.send(`${arr} Won ${normalgiveaway.prize} ${a.url}`)
          
            let ended = new Discord.MessageEmbed()
           .setAuthor(`${normalgiveaway.prize}`, guild.iconURL())
           .setDescription(`Winners: ${arr}`)
           .setColor(`2C2F33`)
           .setFooter(`${normalgiveaway.winners} Winners` , client.user.displayAvatarURL())  
           a.edit(ended)
           db.delete(`normalgiveaway_${x.message}`)
            return;
            } 
         })
         return;   
        }
        channel.messages.fetch(normalgiveaway.message).then(a => {
          let embed = new Discord.MessageEmbed()
          .setAuthor(`${normalgiveaway.prize}`, guild.iconURL())
          .setDescription(`React With 🎉 To Enter\n ${prettyMilliseconds(test)} \nHosted By: <@${normalgiveaway.by}>`)
          .setColor(`2C2F33`)
          .setFooter(`${normalgiveaway.winners} Winners` , client.user.displayAvatarURL())  
          a.edit(embed)
        })
       setTimeout(() => {
        let data = {
          prize: normalgiveaway.prize,
          time: normalgiveaway.time-5000,
          winners: normalgiveaway.winners,
          by: normalgiveaway.by,
          channel: normalgiveaway.channel,
           guild: normalgiveaway.guild,
          message: normalgiveaway.message,
          messagename: normalgiveaway.messagename
         }
         console.log(data)
        db.set(`normalgiveaway_${x.message}`, data)
       }, 1000);
      }) 
      
      }, 5000)
      
      client.on('messageReactionAdd', async (reaction, user) => {
        if(user.partial) await user.fetch();
        if(reaction.partial) await reaction.fetch();
        if(reaction.message.partial) await reaction.message.fetch();
        let grole = await db.get(`rolegiveaway_${reaction.message.id}`)
        if(!grole) return;
      
        if(reaction.message.id == grole.message && reaction.emoji.name == `🎉`) {
        if(user.id === client.user.id) return;
        reaction.message.guild.members.fetch(user).then(member => {
          let test = setInterval((async) => {
             if(grole === null) return clearInterval(test);
            if(member.roles.cache.has(grole.role)) {
              return;
            }
            if(!member.roles.cache.has(grole.role)) {
          reaction.users.remove(user.id);
          return;
            }
          }, 3000);  
      
          if(member.roles.cache.has(grole.role)) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(reaction.message.guild.name, reaction.message.guild.iconURL())
            .setDescription(`
            Entry Aprooved!
            
            **You've Agrred by reaction to be dmed.**`)
            .setColor(`GREEN`)
            .setFooter(client.user.username , client.user.displayAvatarURL())  
          return user.send(embed) 
          } else {
            let embedf = new Discord.MessageEmbed()
            .setAuthor(reaction.message.guild.name, reaction.message.guild.iconURL())
            .setDescription(`
            Entry Denied!
            it's looks u dont have the required role ${reaction.message.guild.roles.cache.get(grole.role).name || 'Role Not Found'}
            **You've Agrred by reaction to be dmed.**`)
            .setColor(`RED`)
            .setFooter(client.user.username , client.user.displayAvatarURL())  
      reaction.users.remove(user.id)
            return user.send(embedf) 
        }
      
      })  
      } */
      })
       
      
        const guildInvites = new Map();
      client.on("inviteCreate", async invite => {
        if(!invite.guild.me.hasPermission("MANAGE_SERVER")){

          return 
        }


      guildInvites.set(invite.guild.id, await invite.guild.fetchInvites())
      }
    );
    
    
    client.on("guildMemberAdd", async member => {
      
      
      const catchedInvites = guildInvites.get(member.guild.id);
      if(!catchedInvites) return
    const newInvites = await member.guild.fetchInvites();
    if(!newInvites) return
    guildInvites.set(member.guild.id, newInvites);
    try {
      const usedInvite = newInvites.find(
        inv => catchedInvites.get(inv.code).uses < inv.uses
      );
      
      // db.set(`author_${member.guild.id}_${member.id}`, usedInvite.inviter.id);
      if(!usedInvite) {
        let vanity = config1.unkown.split("[user]")
        .join(client.users.cache.get(member.id).id)
        .split("[membercount]")
      .join(member.guild.memberCount)
        let join = db.get(`join_channel_${member.guild.id}`)
        if(!join) return 
         member.guild.channels.cache.get(join).send(vanity)
      
      let user = db.get(`invites_${member.guild.id}_${member.id}`)
      if(!user) {
      let data = { 
        invites: 0,
        regular: 0,
        leaves: 0,
        joins: 0,
        
        bonus: 0   
      }
      db.set(`invites_${member.guild.id}_${member.id}`, data) 
      }
      }
      if(!usedInvite) return;
      db.add(`invites_${member.guild.id}_${member.id}.joins`, 1)
      let invites = db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}`)
      if(!invites) {
        let brr = { 
          invites: 0,
          regular: 0,
          leaves: 0,
          joins: 0,
          by: client.users.cache.get(usedInvite.inviter.id).username,
          bouns: 0   
        }
        db.set(`invites_${member.guild.id}_${usedInvite.inviter.id}`, brr)
      }
      db.set(`author_${member.guild.id}_${member.id}`, usedInvite.inviter.id);  
      db.add(`invites_${member.guild.id}_${usedInvite.inviter.id}.invites`, 1)
  
      db.add(`invites_${member.guild.id}_${usedInvite.inviter.id}.regular`, 1)
      
      let join = db.get(`join_channel_${member.guild.id}`)
      let customize = db.get(`join_message_${member.guild.id}`)
      if(!customize) customize = "[user] has joined; Invited by [inviter] **([invites])**"
      if(!join) return;
      let splita = customize
      .split("[user]")
      .join(client.users.cache.get(member.id).id)
      .split("[inviter]")
      .join(client.users.cache.get(usedInvite.inviter.id).username)
      .split("[invites]")
      .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.invites`))
      .split("[total]")
      .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.regular`))
      .split("[leaves]")
      .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.regular`))
      .split("[jointimes]")
      .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.joins`))
      .split("[membercount]")
      .join(member.guild.memberCount)
  
       member.guild.channels.cache.get(join).send(splita)
   
    } catch (err) {
    console.log(err)
    }
    })



    client.on("guildMemberRemove", member => {
      try {
    let user = db.get(`author_${member.guild.id}_${member.id}`)
    if(!user) {
     let channel = db.get(`leave_channel_${member.guild.id}`)
     if(!channel) return;
     member.guild.channels.cache.get(channel).send(`${member.user.username} **has left**; I was unable to figure out who invited them.`)
     return
    }
  
    let channel = db.get(`leave_channel_${member.guild.id}`)
    if(!channel) return;
    let leave = db.get(`leave_message_${member.guild.id}`)
    if(!leave) leave = "[user] has left the server";
    db.add(`invites_${member.guild.id}_${user}.leaves`, 1)
    db.subtract(`invites_${member.guild.id}_${user}.invites`, 1)
    let com = leave.split("[user]")
    .join(client.users.cache.get(member.id).username)
    .split("[inviter]")
    .join(client.users.cache.get(user).username)
    .split("[invites]")
    .join(db.get(`invites_${member.guild.id}_${user}.invites`))
    .split("[total]")
    .join(db.get(`invites_${member.guild.id}_${user}.regular`))
    .split("[leaves]")
    .join(db.get(`invites_${member.guild.id}_${user}.leaves`))
    .split("[jointimes]")
    .join(db.get(`invites_${member.guild.id}_${user}.joins`))
  
    member.guild.channels.cache.get(channel).send(com)
       } catch(err) {
        console.log(err)
      }
    })
  
  
   setInterval(() => {
  client.guilds.cache.forEach(x =>{
    let ranks = db.get(`ranks_${x.id}`)
    if(!ranks) return;
    x.members.cache.forEach(o => {
    if(o.user.bot === true) return;
      let invites = db.get(`invites_${x.id}_${o.id}`)
      if(!invites) {
        let data = {
          invites: 0,
          regular: 0,
          leaves: 0,
          joins: 0,
          by: null,
          bouns: 0       
        }
        db.set(`invites_${x.id}_${o.id}`, data)
      return; 
      }    
      ranks.forEach(r => {
        let g = x.roles.cache.get(r.role)
  if(!g) return;
  x.members.fetch(o.id).then(member => {  
  if(invites.invites > r.invites-1) {
         if(member.roles.cache.has(r.role)) return
          member.roles.add(r.role, { reason: "has enough invites" })
         db.set(`r_${x.id}_${o.id}_${r.role}`, true)
      }
      if(invites.invites < r.invites-1) {
        console.log(member.user.username)
        if(member.roles.cache.has(r.role)) {
          let check = db.get(`r_${x.id}_${o.id}_${r.role}`)
          if(!check) return;
          member.roles.remove(r.role, { reason: "don't have enough invites for the role"})
          db.delete(`r_${x.id}_${o.id}_${r.role}`)
        } 
        }
      })
      })
    })
  })
   }, 5500);
  
  // simple djs economy cmds using quick.db (made by darkboy)
    /*client.on('message', message => {
  if(!message.guild) return;
  let data = db.fetch(`economy_${message.guild.id}`) // all on one big array pog
  if(!data) { 
    // database is empty let's create adata for the user
    let data = {
      id: message.author.id,
      money: 0
    }
    db.push(`economy_${message.guild.id}`, data)
    return; // we should return so we wont get apog error (saying databaase is empty)
  }
  let database = data.find(x => x.id === message.author.id)
  if(!database) {
    // let's create adata for the user!
    let data = {
      id: message.author.id,
      money: 0
    }
    db.push(`economy_${message.guild.id}`, data)
  return; // let's just stop here and when user send next message he gonna get sum coins
  }
  console.log(database) // when we console log database we should have ({ id: '697279777974911077', money: 0  }) at this moment everything is epic and works\
  let value = data.indexOf(database)
    console.log(value)
  
   
   })*/

 /*  client.on("message", async (message) => {
    if (!message.guild) return;
    if (message.author.bot) return;
  if(message.channel.type === 'dm') return;
  
    const AddMessage = await Messages.appendMessage(message.author.id, message.guild.id, 1);
  });
*/



















//MODERATION








client.on("ready", async () => {

  MLogs.sync();

  console.log(client.user.username + 'is now running!\nStorm Developmentz thanks you for your purchase.\nIf you encounter any issues or need assistance, feel free to contact us at: devs@stormdevelopmentz.xyz');



  automodspam1.clear();
  automodspam2.clear();
  automodspam3.clear();
  automodspam4.clear();
  automute1.clear();
  automute2.clear();

  client.setInterval(async () => {
    for (let i in client.pendingmutes) {
        let unmutetime = client.pendingmutes[i].time;
        let theguild = client.guilds.cache.get(botconfig.serverID);
        let member = theguild.members.cache.get(i);
        let muterole = theguild.roles.cache.find(role => role.id == botconfig.Muted_Role);
        let themodlogschannel = client.channels.cache.find(channel => channel.id == botconfig.Moderation_Logs_Channel);

        if (Date.now() > unmutetime) {
            if (member) {
                if (member.roles.cache.has(muterole.id)) {
                    await member.roles.remove(botconfig.Muted_Role);
                    delete client.pendingmutes[i];
                    fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                        if (err) console.log(err);
                    });
                    member.send(`You have been unmuted in **${theguild.name}**`);

                    let unmuteEmbed = new Discord.MessageEmbed()
                        .setAuthor("Unmute [AUTO]", member.user.displayAvatarURL({ dynamic: true }))
                        .setDescription(`\`${member.user.tag}\` has been auto-unmuted.`)
                        .setColor("#12e049")
                        .addField("Unmuted User", `${member} (${member.id})`, true)
                        .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                        .addField("Reason", "Mute duration passed", true)
                        .setTimestamp();

                    themodlogschannel.send(unmuteEmbed);
                } else delete client.pendingmutes[i];
            } else delete client.pendingmutes[i];
        };
    };
}, 15000);

client.setInterval(async () => {
  for (let i in client.pendingbans) {
      let unbantime = client.pendingbans[i].time;
      let theguild = client.guilds.cache.get(botconfig.serverID);
      let themember = theguild.members.cache.get(i);
      let themodlogschannel = client.channels.cache.find(channel => channel.id == botconfig.Moderation_Logs_Channel);

      if (Date.now() > unbantime) {
          if (themember) {
              delete client.pendingbans[i].time;
              fs.writeFile("./pendingbans.json", JSON.stringify(client.pendingbans, 2, null), (err) => {
                  if (err) console.log(err);
              });
          } else if (!themember) {

              let unbanuser = await client.users.fetch(i);
              theguild.members.unban(unbanuser.id);

              let unbanEmbed = new Discord.MessageEmbed()
                  .setAuthor("Unban [AUTO]", unbanuser.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${unbanuser.tag}\` has been auto-unbanned.`)
                  .setColor("#12e049")
                  .addField("Unbanned User", `${unbanuser} (${unbanuser.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Reason", "Ban duration passed", true)
                  .setTimestamp();

              themodlogschannel.send(unbanEmbed);

              delete client.pendingbans[i].time;
              fs.writeFile("./pendingbans.json", JSON.stringify(client.pendingbans, 2, null), (err) => {
                  if (err) console.log(err);
              });
          }
      };
  };
}, 30000);

});
/*
client.on("guildMemberAdd", async member => {
  if(db.get(`memberlogs_channel_${member.guild.id}`) == null) return;
  if(db.get(`memberlogs_channel_${member.guild.id}`) == 'false') return;
  
  let newMemberEmbed = new Discord.MessageEmbed()
      .setAuthor("Member Joined", member.user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setColor("#12e049")
      .setDescription(`${member} \`${member.user.tag}\``)
      .addField("Account Created", `${new Date(member.user.createdAt).toUTCString()}\n(${humanizeDuration(Date.now() - new Date(member.user.createdAt).getTime(), { largest: 2, round: true })} ago)`)
      .setFooter("ID: " + member.id)
      .setTimestamp();

  if (db.get(`memberlogs_channel_${member.guild.id}`)) member.guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${member.guild.id}`)).send(newMemberEmbed);

  if (client.pendingmutes[member.id]) member.roles.add(db.get(`mutedrole_id_${member.guild.id}`));

});

client.on("guildMemberRemove", async (member) => {
  if(db.get(`memberlogs_channel_${member.guild.id}`) == null) return;
if(db.get(`memberlogs_channel_${member.guild.id}`) == 'false') return;

  let leftmemberEmbed = new Discord.MessageEmbed()
      .setAuthor("Member Left", member.user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setColor("#ffa500")
      .setDescription(`${member} \`${member.user.tag}\``)
      .addField("Roles", `${member.roles.cache.filter(r => r.id !== member.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`)
      .setFooter("ID: " + member.id)
      .setTimestamp();

  if (db.get(`memberlogs_channel_${member.guild.id}`)) member.guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${member.guild.id}`)).send(leftmemberEmbed);

});

client.on("guildBanAdd", async (guild, user) => {
  if(db.get(`memberlogs_channel_${guild.id}`) == null) return;
  if(db.get(`memberlogs_channel_${guild.id}`) == 'false') return;
 
  let bannedEmbed = new Discord.MessageEmbed()
      .setAuthor("Member Banned", user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setColor("#b50712")
      .setDescription(`\`${user.tag}\` has been banned`)
      .setFooter("ID: " + user.id)
      .setTimestamp();

  if (db.get(`memberlogs_channel_${guild.id}`)) guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${guild.id}`)).send(bannedEmbed);

});

client.on("guildBanRemove", async (guild, user) => {
  if(db.get(`memberlogs_channel_${guild.id}`) == null) return;
if(db.get(`memberlogs_channel_${guild.id}`) == 'false') return;

  let unbannedEmbed = new Discord.MessageEmbed()
      .setAuthor("Member Unbanned", user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setColor("#9af963")
      .setDescription(`\`${user.tag}\` has been unbanned`)
      .setFooter("ID: " + user.id)
      .setTimestamp();

  if (db.get(`memberlogs_channel_${guild.id}`)) guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${guild.id}`)).send(unbannedEmbed);

});

client.on("roleCreate", async (role) => {
  if(db.get(`rolelogs_channel_${role.guild.id}`) == 'false') return;
  if(db.get(`rolelogs_channel_${role.guild.id}`) == null) return;
  let roleCreatedEmbed = new Discord.MessageEmbed()
      .setAuthor("Role Created", role.guild.iconURL())
      .setColor("#19cdfa")
      .setDescription(`${role.name}`)
      .setFooter("ID: " + role.id)
      .setTimestamp();

  if (db.get(`rolelogs_channel_${role.guild.id}`)) role.guild.channels.cache.find(channel => channel.id == db.get(`rolelogs_channel_${role.guild.id}`)).send(roleCreatedEmbed);

});

client.on("roleDelete", async (role) => {
  if(db.get(`rolelogs_channel_${role.guild.id}`) == null) return;
if(db.get(`rolelogs_channel_${role.guild.id}`) == 'false') return;

  let roleDeletedEmbed = new Discord.MessageEmbed()
      .setAuthor("Role Deleted", role.guild.iconURL())
      .setColor(role.color)
      .setDescription(`${role.name}`)
      .setFooter("ID: " + role.id)
      .setTimestamp();

  if (db.get(`rolelogs_channel_${role.guild.id}`)) role.guild.channels.cache.find(channel => channel.id == db.get(`rolelogs_channel_${role.guild.id}`)).send(roleDeletedEmbed);

});

client.on("roleUpdate", async (oldRole, newRole) => {
  if(db.get(`rolelogs_channel_${newRole.guild.id}`) == null) return; 
if(db.get(`rolelogs_channel_${newRole.guild.id}`) == 'false') return; 

  if (oldRole.name !== newRole.name) {

      let roleNameUpdateEmbed = new Discord.MessageEmbed()
          .setAuthor("Role Name Updated", newRole.guild.iconURL())
          .setColor(newRole.color)
          .addField("Before", oldRole.name)
          .addField("After", newRole.name)
          .setFooter("ID: " + newRole.id)
          .setTimestamp();

      if (db.get(`rolelogs_channel_${newRole.guild.id}`)) newRole.guild.channels.cache.find(channel => channel.id == db.get(`rolelogs_channel_${newRole.guild.id}`)).send(roleNameUpdateEmbed);

  };

  if (oldRole.hexColor !== newRole.hexColor) {

      let roleColorUpdateEmbed = new Discord.MessageEmbed()
          .setAuthor("Role Color Updated", newRole.guild.iconURL())
          .setColor(newRole.hexColor)
          .addField("Role", newRole.name)
          .addField("Old Color", oldRole.hexColor)
          .addField("New Color", newRole.hexColor, true)
          .setFooter("ID: " + newRole.id)
          .setTimestamp();

      if (db.get(`rolelogs_channel_${newRole.guild.id}`)) newRole.guild.channels.cache.find(channel => channel.id == db.get(`rolelogs_channel_${newRole.guild.id}`)).send(roleColorUpdateEmbed);

  };

});

client.on("channelCreate", async (channel) => {
  if(!channel.guild) return;
  if(db.get(`channellogs_channel_${channel.guild.id}`) == null) return;
if(db.get(`channellogs_channel_${channel.guild.id}`) == 'false') return;

  if (channel.type == "text") {

      
      let guildChannel = channel.guild.channels.cache.find(gChannel => gChannel.id == channel.id);

      let channelCreatedEmbed = new Discord.MessageEmbed()
          .setAuthor("Text Channel Created", guildChannel.guild.iconURL())
          .setColor("#19cdfa")
          .setDescription(`${guildChannel} \`${guildChannel.name}\``)
          .setFooter("ID: " + guildChannel.id)
          .setTimestamp();

      if (db.get(`channellogs_channel_${guildChannel.guild.id}`)) guildChannel.guild.channels.cache.find(channel => channel.id == db.get(`channellogs_channel_${guildChannel.guild.id}`)).send(channelCreatedEmbed);

  };

  if (channel.type == "voice") {

     
      let guildChannel = channel.guild.channels.cache.find(gChannel => gChannel.id == channel.id);

      let channelCreatedEmbed = new Discord.MessageEmbed()
          .setAuthor("Voice Channel Created", guildChannel.guild.iconURL())
          .setColor("#19cdfa")
          .setDescription(`\`${guildChannel.name}\``)
          .setFooter("ID: " + guildChannel.id)
          .setTimestamp();

      if (db.get(`channellogs_channel_${channel.guild.id}`)) channel.guild.channels.cache.find(channel => channel.id == db.get(`channellogs_channel_${channel.guild.id}`)).send(channelCreatedEmbed);

  };

});

client.on("channelDelete", async (channel) => {
  if(db.get(`channellogs_channel_${channel.guild.id}`) == null) return;
if(db.get(`channellogs_channel_${channel.guild.id}`) == 'false') return;

  if (channel.type == "text") {

 

      let channelDeletedEmbed = new Discord.MessageEmbed()
          .setAuthor("Text Channel Deleted", channel.guild.iconURL())
          .setColor("#19cdfa")
          .setDescription(`\`${channel.name}\``)
          .setFooter("ID: " + channel.id)
          .setTimestamp();

      if (db.get(`channellogs_channel_${channel.guild.id}`)) channel.guild.channels.cache.find(channel => channel.id == db.get(`channellogs_channel_${channel.guild.id}`)).send(channelDeletedEmbed);

  };

  if (channel.type == "voice") {

      
      let guildChannel = channel.guild.channels.cache.find(gChannel => gChannel.id == channel.id);

      let channelDeletedEmbed = new Discord.MessageEmbed()
          .setAuthor("Voice Channel Deleted", channel.guild.iconURL())
          .setColor("#19cdfa")
          .setDescription(`\`${channel.name}\``)
          .setFooter("ID: " + channel.id)
          .setTimestamp();

      if (db.get(`channellogs_channel_${channel.guild.id}`)) channel.guild.channels.cache.find(channel => channel.id == db.get(`channellogs_channel_${channel.guild.id}`)).send(channelDeletedEmbed);

  };

});

client.on("channelUpdate", async (oldChannel, newChannel) => {
  if(db.get(`channellogs_channel_${newChannel.guild.id}`) == null) return;
if(db.get(`channellogs_channel_${newChannel.guild.id}`) == 'false') return;

  if (newChannel.guild) {

      if (oldChannel.name !== newChannel.name) {

          let channelNameUpdatedEmbed = new Discord.MessageEmbed()
              .setAuthor("Channel Name Updated", newChannel.guild.iconURL())
              .setColor("#19cdfa")
              .addField("Before", oldChannel.name)
              .addField("After", newChannel.name)
              .setFooter("ID: " + newChannel.id)
              .setTimestamp();

          if (db.get(`channellogs_channel_${newChannel.guild.id}`)) newChannel.guild.channels.cache.find(channel => channel.id == db.get(`channellogs_channel_${newChannel.guild.id}`)).send(channelNameUpdatedEmbed);

      };

  };

});

client.on('voiceStateUpdate', (oldState, newState) => {
  
  let newUserChannel = newState.channel;
  let oldUserChannel = oldState.channel;
  if(db.get(`vclogs_channel_${oldState.guild.id}`) == null) return; 
  if(db.get(`vclogs_channel_${oldState.guild.id}`) == 'false') return; 
 
  if (!oldUserChannel && newUserChannel) {

      let joinvcEmbed = new Discord.MessageEmbed()
          .setAuthor(newState.member.user.tag, newState.member.user.displayAvatarURL({ dynamic: true }))
          .setColor("#08c999")
          .setDescription("**Joined VC:** " + newUserChannel.name)
          .setFooter("ID: " + newState.member.id)
          .setTimestamp();

      if (db.get(`vclogs_channel_${newUserChannel.guild.id}`)) newUserChannel.guild.channels.cache.find(channel => channel.id == db.get(`vclogs_channel_${newUserChannel.guild.id}`)).send(joinvcEmbed);

  } else if (!newUserChannel && oldUserChannel) {

      let leftvcEmbed = new Discord.MessageEmbed()
          .setAuthor(oldState.member.user.tag, oldState.member.user.displayAvatarURL({ dynamic: true }))
          .setColor("#08c999")
          .setDescription("**Left VC:** " + oldUserChannel.name)
          .setFooter("ID: " + oldState.member.id)
          .setTimestamp();

      if (db.get(`vclogs_channel_${oldUserChannel.guild.id}`)) oldUserChannel.guild.channels.cache.find(channel => channel.id == db.get(`vclogs_channel_${oldUserChannel.guild.id}`)).send(leftvcEmbed);

  };

});

client.on("guildMemberUpdate", async (oldMember, newMember) => {
  if(db.get(`memberlogs_channel_${newMember.guild.id}`) == null) return;
if(db.get(`memberlogs_channel_${newMember.guild.id}`) == 'false') return;

  if (!oldMember || !newMember || !newMember.guild || !oldMember.guild) return;

  for (var r of newMember.roles.cache.values()) {

      if (!oldMember.roles.cache.has(r.id)) {
          let givenrole = r.name;

          let givenRoleEmbed = new Discord.MessageEmbed()
              .setAuthor(newMember.user.tag, newMember.user.displayAvatarURL({ dynamic: true }))
              .setDescription(`${newMember} **Role Added:** \`${givenrole}\``)
              .setColor(r.color)
              .setFooter("ID: " + newMember.id)
              .setTimestamp();

          if (db.get(`memberlogs_channel_${newMember.guild.id}`)) newMember.guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${newMember.guild.id}`)).send(givenRoleEmbed);
      };

  };

  for (var r of oldMember.roles.cache.values()) {

      if (!newMember.roles.cache.has(r.id)) {
          let removedrole = r.name;

          let removedRoleEmbed = new Discord.MessageEmbed()
              .setAuthor(newMember.user.tag, newMember.user.displayAvatarURL({ dynamic: true }))
              .setDescription(`${newMember} **Role Removed:** \`${removedrole}\``)
              .setFooter("ID: " + newMember.id)
              .setColor(r.color)
              .setTimestamp();

          if (db.get(`memberlogs_channel_${newMember.guild.id}`)) newMember.guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${newMember.guild.id}`)).send(removedRoleEmbed);
      };

  };


  if (oldMember.displayName !== newMember.displayName) {

      if (!oldMember.nickname && newMember.nickname) {

          let nickname1Embed = new Discord.MessageEmbed()
              .setAuthor(newMember.user.tag, newMember.user.displayAvatarURL({ dynamic: true }))
              .setDescription(`${newMember} **nickname changed**`)
              .setColor("#258ce6")
              .addField("Before", "None")
              .addField("After", newMember.nickname)
              .setFooter("ID: " + newMember.user.id)
              .setTimestamp();

          if (db.get(`memberlogs_channel_${newMember.guild.id}`)) newMember.guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${newMember.guild.id}`)).send(nickname1Embed);

      } else if (oldMember.nickname && newMember.nickname) {

          let nickname2Embed = new Discord.MessageEmbed()
              .setAuthor(newMember.user.tag, newMember.user.displayAvatarURL({ dynamic: true }))
              .setDescription(`${newMember} **nickname changed**`)
              .setColor("#258ce6")
              .addField("Before", oldMember.nickname)
              .addField("After", newMember.nickname)
              .setFooter("ID: " + newMember.user.id)
              .setTimestamp();

          if (db.get(`memberlogs_channel_${newMember.guild.id}`)) newMember.guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${newMember.guild.id}`)).send(nickname2Embed);

      } else if (oldMember.nickname && !newMember.nickname) {

          let nickname3Embed = new Discord.MessageEmbed()
              .setAuthor(newMember.user.tag, newMember.user.displayAvatarURL({ dynamic: true }))
              .setDescription(`${newMember} **nickname changed**`)
              .setColor("#258ce6")
              .addField("Before", oldMember.nickname)
              .addField("After", "None")
              .setFooter("ID: " + newMember.user.id)
              .setTimestamp();

          if (db.get(`memberlogs_channel_${newMember.guild.id}`)) newMember.guild.channels.cache.find(channel => channel.id == db.get(`memberlogs_channel_${newMember.guild.id}`)).send(nickname3Embed);

      } else return;
  };

});

client.on("message", async (message) => {
  if(!message.guild) return;
  if(db.get(`automodlogs_channel_${message.guild.id}`) == null) return;
  if(db.get(`automodlogs_channel_${message.guild.id}`) == 'false') return;
  
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;

  const logs = message.guild.channels.cache.find(channel => channel.id == db.get(`automodlogs_channel_${message.guild.id}`));
  let msgcontent = message.content;
  if (msgcontent.length > 1900) msgcontent = message.content.slice(0, message.content.length - 80) + "..."

  let filterlog = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f56b16")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${message.author} deleted in <#${message.channel.id}>**\n${msgcontent}`)
      .addField("Reason", "Message contains invite link")
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();

  let filteredEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f0463a")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${message.author} deleted in <#${message.channel.id}>**\n${msgcontent}`)
      .addField("Reason", "Message contains filtered word")
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();

  let linkfilterEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f5f564")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${message.author} deleted in <#${message.channel.id}>**\n${msgcontent}`)
      .addField("Reason", "Message contains link")
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();

  let emojispamEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f0463a")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${message.author} deleted in <#${message.channel.id}>**\n${msgcontent}`)
      .addField("Reason", `Message contains ${db.get(`emojis_limit_${message.guild.id}`)}+ emojis`)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();

  let linebreaksEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f0463a")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${message.author} deleted in <#${message.channel.id}>**\n${msgcontent}`)
      .addField("Reason", `Message contains ${db.get(`linebreaks_limit_${message.guild.id}`)}+ line breaks`)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();

  let duptextEmbed = new Discord.MessageEmbed()
      .setColor("#f0463a")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${message.author} deleted in <#${message.channel.id}>**\n${msgcontent}`)
      .addField("Reason", "Sent duplicated text")
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();

  let capsEmbed = new Discord.MessageEmbed()
      .setColor("#f0463a")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${message.author} deleted in <#${message.channel.id}>**\n${msgcontent}`)
      .addField("Reason", "Sent too many capital letters")
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();

  const re = /<?(a)?:?(\w{2,32}):(\d{17,19})>?/g
  const re2 = /(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g

  if (db.get(`automod_${message.guild.id}`) == 'true' && !message.member.roles.cache.some(r => db.get(`automod_bypassroles_${message.guild.id}`).includes(r.id)) && !db.get(`automod_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) {

      if (client.filters["autoban"].some(word => message.content.toLowerCase().includes(`${word}`))) {
          await message.delete();
          await message.author.send(`You have been banned from **${message.guild.name}** | Message contained auto-ban word.`);
          message.guild.members.ban(message.author.id, { reason: `AutoBan Word Detected. See moderation log for content.` });
    
          let autobanEmbed = new Discord.MessageEmbed()
          .setColor("#39fa53")
          .setDescription(`✅ **\`${message.author.tag}\` has been banned.**`);

          message.channel.send(autobanEmbed);
    
          if (msgcontent.length > 1000) msgcontent = message.content.slice(0, message.content.length - (message.content.length - 1000)) + "...";

          let banEmbed = new Discord.MessageEmbed()
            .setTitle("Ban [AUTO]")
            .setColor("#b50712")
            .setDescription(`\`${message.author.tag}\` has been auto-banned`)
            .addField("Banned User", `${message.member}`, true)
            .addField("Responsible Staff", client.user.username, true)
            .addField("Reason", "AutoBan Word Detected", true)
            .addField("Message Content", msgcontent)
            .setTimestamp()
            .setFooter(`ID: ${message.author.id}`);
    
          message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(banEmbed);
          return;
        }

      for (let eWord in client.filters.exact) {

          if (db.get(`automod_wordsfilter_${message.guild.id}`) == 'false' || db.get(`automod_wordsfilter_${message.guild.id}`) !== 'true') return;

          if (message.member.roles.cache.some(r => db.get(`wordsfilter_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`wordsfilter_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          eRegExEntry = client.filters.exact[eWord].toLowerCase().split("").join("+(\\W|\\d|_)*");

          let eRegEx = new RegExp(`([^'‘’]|^)\\b(${eRegExEntry}+(\\W|\\d|_)*)\\b`, 'gmi');

          if (message.content.match(eRegEx)) {

              if (automute2.has(message.author.id)) {

                  let muteEmbed = new Discord.MessageEmbed()
                      .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`\`${message.author.tag}\` has been auto-muted`)
                      .setColor("#ffb53f")
                      .addField("Muted User", `${message.member} (${message.member.id})`, true)
                      .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                      .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
                      .addField("Reason", "3 Automod Violations", true)
                      .setTimestamp();

                  message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

                  client.pendingmutes[message.author.id] = {
                      time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
                  };

                  fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                      if (err) console.log(err);
                  });

                  let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));
                  message.member.roles.add(muterole.id);

              };

              if (automute1.has(message.author.id) && !automute2.has(message.author.id)) {

                  logs.send(filteredEmbed);
                  message.delete();
                  message.reply("please watch your language.").then(message => message.delete({ timeout: 4500 }));
                  automute2.add(message.author.id);
                  setTimeout(() => {
                      automute2.delete(message.author.id);
                  }, 120000);

                  return;
              };

              message.delete();
              message.reply("please watch your language.").then(message => message.delete({ timeout: 4500 }));
              logs.send(filteredEmbed);
              automute1.add(message.author.id);
              setTimeout(() => {
                  automute1.delete(message.author.id);
              }, 120000);

              return;

          };

      };

      for (let wWord in client.filters.wild) {

          if (db.get(`automod_wordsfilter_${message.guild.id}`) == 'false' || db.get(`automod_wordsfilter_${message.guild.id}`) !== 'true') return;

          if (message.member.roles.cache.some(r => db.get(`wordsfilter_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`wordsfilter_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          let wRegExEntry = client.filters.wild[wWord].toLowerCase().split("").join("+(\\W|\\d|_)*");

          let wRegEx = new RegExp(`([^'‘’]|^)\\b(${wRegExEntry}+(\\W|\\d|_)*)\\b`, 'gmi');

          if (message.content.match(wRegEx)) {

              if (automute2.has(message.author.id)) {

                  let muteEmbed = new Discord.MessageEmbed()
                      .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`\`${message.author.tag}\` has been auto-muted`)
                      .setColor("#ffb53f")
                      .addField("Muted User", `${message.member} (${message.member.id})`, true)
                      .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                      .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
                      .addField("Reason", "3 Automod Violations", true)
                      .setTimestamp();

                  message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

                  client.pendingmutes[message.author.id] = {
                      time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
                  };

                  fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                      if (err) console.log(err);
                  });

                  let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));
                  message.member.roles.add(muterole.id);

              };

              if (automute1.has(message.author.id) && !automute2.has(message.author.id)) {

                  logs.send(filteredEmbed);
                  message.delete();
                  message.reply("please watch your language.").then(message => message.delete({ timeout: 4500 }));
                  automute2.add(message.author.id);
                  setTimeout(() => {
                      automute2.delete(message.author.id);
                  }, 120000);

                  return;
              };

              message.delete();
              message.reply("please watch your language.").then(message => message.delete({ timeout: 4500 }));
              logs.send(filteredEmbed);
              automute1.add(message.author.id);
              setTimeout(() => {
                  automute1.delete(message.author.id);
              }, 120000);

              return;

          };

      };

      if (message.content.match(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/gi)) {

          if (db.get(`automod_invitelinks_${message.guild.id}`) == false || db.get(`automod_invitelinks_${message.guild.id}`) !== true) return;

          if (message.member.roles.cache.some(r => db.get(`invitelinks_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`invitelinks_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          let invMatches = message.content.matchAll(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/gi);

          for (const invMatch of invMatches) {
              let joinedInvMatch = "";
              if (invMatch.includes(" ")) joinedInvMatch = invMatch.split(" ").join("");
              if (!invMatch.includes(" ")) joinedInvMatch = invMatch;

              try {
                  let theInvite = client.fetchInvite(joinedInvMatch);
                  if ((await theInvite).guild.id == message.guild.id) return;
                  throw "automod";
              } catch (e) {
                  if (automute2.has(message.author.id)) {

                      let muteEmbed = new Discord.MessageEmbed()
                          .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
                          .setDescription(`\`${message.author.tag}\` has been auto-muted`)
                          .setColor("#ffb53f")
                          .addField("Muted User", `${message.member} (${message.member.id})`, true)
                          .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                          .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
                          .addField("Reason", "3 Automod Violations", true)
                          .setTimestamp();

                      message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

                      client.pendingmutes[message.author.id] = {
                          time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
                      };

                      fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                          if (err) console.log(err);
                      });

                      let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));
                      message.member.roles.add(muterole.id);

                  };

                  if (automute1.has(message.author.id) && !automute2.has(message.author.id)) {

                      logs.send(filterlog);
                      message.delete();
                      message.reply("please do not send any invite links.").then(message => message.delete({ timeout: 4500 }));
                      automute2.add(message.author.id);
                      setTimeout(() => {
                          automute2.delete(message.author.id);
                      }, 120000);

                      return;
                  };

                  logs.send(filterlog);
                  message.delete();
                  message.reply("please do not send any invite links.").then(message => message.delete({ timeout: 4500 }));
                  automute1.add(message.author.id);
                  setTimeout(() => {
                      automute1.delete(message.author.id);
                  }, 120000);

                  return;
              };
          };

      } else if (message.content.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi) && !["732959924807663637", "736122420737605672"].some(cID => cID == message.channel.id)) {

          if (db.get(`automod_links_${message.guild.id}`) == 'false' || db.get(`automod_links_${message.guild.id}`) !== 'true') return;

          if (message.member.roles.cache.some(r => db.get(`links_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`links_bypasschannels_${message.guild.id}`).some(c => c == message.channel.id)) return;

          if (automute2.has(message.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${message.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${message.member} (${message.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

              client.pendingmutes[message.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));
              message.member.roles.add(muterole.id);

          };

          if (automute1.has(message.author.id) && !automute2.has(message.author.id)) {

              logs.send(linkfilterEmbed);
              message.delete();
              message.reply("please do not send any links.").then(message => message.delete({ timeout: 4500 }));
              automute2.add(message.author.id);
              setTimeout(() => {
                  automute2.delete(message.author.id);
              }, 120000);

              return;

          };

          message.delete();
          message.reply("please do not send any links.").then(message => message.delete({ timeout: 4500 }));
          logs.send(linkfilterEmbed);
          automute1.add(message.author.id);
          setTimeout(() => {
              automute1.delete(message.author.id);
          }, 120000);
          return;

      } else if (client.filters["wild"].some(word => message.content.toLowerCase().includes(word))) {

          if (db.get(`automod_wordsfilter_${message.guild.id}`) == 'false' || db.get(`automod_wordsfilter_${message.guild.id}`) !== 'true') return;

          if (message.member.roles.cache.some(r => db.get(`wordsfilter_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`wordsfilter_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          if (automute2.has(message.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${message.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${message.member} (${message.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

              client.pendingmutes[message.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));
              message.member.roles.add(muterole.id);

          };

          if (automute1.has(message.author.id) && !automute2.has(message.author.id)) {

              logs.send(filteredEmbed);
              message.delete();
              message.reply("please watch your language.").then(message => message.delete({ timeout: 4500 }));
              automute2.add(message.author.id);
              setTimeout(() => {
                  automute2.delete(message.author.id)
              }, 120000);

              return;
          };

          message.delete();
          message.reply("please watch your language.").then(message => message.delete({ timeout: 4500 }));
          logs.send(filteredEmbed);
          automute1.add(message.author.id);
          setTimeout(() => {
              automute1.delete(message.author.id);
          }, 120000);

      } else if ((message.content.match(re) || []).length + (message.content.match(re2) || []).length >= db.get(`emojis_limit_${message.guild.id}`)) {

          if (db.get(`automod_emojislimit_${message.guild.id}`) == false || db.get(`automod_emojislimit_${message.guild.id}`) !== true) return;

          if (message.member.roles.cache.some(r => db.get(`emojislimit_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`emojislimit_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          if (automute2.has(message.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${message.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${message.member} (${message.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

              client.pendingmutes[message.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));
              message.member.roles.add(muterole.id);

          };

          if (automute1.has(message.author.id) && !automute2.has(message.author.id)) {

              logs.send(emojispamEmbed);
              message.delete();
              message.reply("please do not send that many emojis.").then(message => message.delete({ timeout: 4500 }));
              automute2.add(message.author.id);
              setTimeout(() => {
                  automute2.delete(message.author.id);
              }, 120000);

              return;
          };

          message.delete();
          message.reply("please do not send that many emojis.").then(message => message.delete({ timeout: 4500 }));
          logs.send(emojispamEmbed);
          automute1.add(message.author.id);
          setTimeout(() => {
              automute1.delete(message.author.id);
          }, 120000);

      } else if ((message.content.match(/\n/g) || []).length >= db.get(`linebreaks_limit_${message.guild.id}`)) {

          if (db.get(`automod_linebreaks_${message.guild.id}`) == 'false' || db.get(`automod_linebreaks_${message.guild.id}`) !== 'true') return;

          if (message.member.roles.cache.some(r => db.get(`linebreaks_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`linebreaks_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          if (automute2.has(message.author.id)) {
              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${message.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${message.member} (${message.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

              client.pendingmutes[message.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));
              message.member.roles.add(muterole.id);

          };

          if (automute1.has(message.author.id) && !automute2.has(message.author.id)) {

              logs.send(linebreaksEmbed);
              message.delete();
              message.reply("please do not send that many line breaks.").then(message => message.delete({ timeout: 4500 }));
              automute2.add(message.author.id);
              setTimeout(() => {
                  automute2.delete(message.author.id);
              }, 120000);

              return;

          };

          message.delete();
          message.reply("please do not send that many line breaks.").then(message => message.delete({ timeout: 4500 }));
          logs.send(linebreaksEmbed);
          automute1.add(message.author.id);
          setTimeout(() => {
              automute1.delete(message.author.id);
          }, 120000);

      } else if (automute1.has(message.author.id) && automodspam4.has(message.author.id)) {

          if (db.get(`automod_fastmessagespam_${message.guild.id}`) == 'false' || db.get(`automod_fastmessagespam_${message.guild.id}`) !== 'true') return;

          if (message.member.roles.cache.some(r => db.get(`fastmessagespam_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`fastmessagespam_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));

          client.pendingmutes[message.author.id] = {
              time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
          };

          fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
              if (err) console.log(err);
          });

          message.member.roles.add(muterole.id);

          message.channel.messages.fetch({ limit: 50 }).then(messages => {
              let membermsgs = messages.filter(messages => messages.author.id == message.author.id);
              message.channel.bulkDelete(membermsgs.first(10));
          })

          let muteEmbed = new Discord.MessageEmbed()
              .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
              .setDescription(`\`${message.author.tag}\` has been auto-muted`)
              .setColor("#ffb53f")
              .addField("Muted User", `${message.member}`, true)
              .addField("Responsible Staff", `${client.user.username}`, true)
              .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
              .addField("Reason", "2 Automod Violations (Fast Message Spam)", true)
              .setTimestamp()
              .setFooter(`ID: ${message.author.id}`);

          message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

          let automodspamEmbed = new Discord.MessageEmbed()
              .setColor("#f0463a")
              .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
              .setDescription(`**Messages sent by ${message.author} deleted in <#${message.channel.id}>**`)
              .addField("Reason", "User sent 5+ messages in under 1.5 seconds")
              .setFooter(`ID: ${message.author.id}`)
              .setTimestamp();

          message.guild.channels.cache.find(channel => channel.id == db.get(`automodlogs_channel_${message.guild.id}`)).send(automodspamEmbed);

      } else if (message.content.match(/(.{4,})\1{4,}/ig) || message.content.match(/(.)\1{9,}/gi)) {

          if (db.get(`automod_duplicatetext_${message.guild.id}`) == 'false' || db.get(`automod_duplicatetext_${message.guild.id}`) !== 'true') return;

          if (message.member.roles.cache.some(r => db.get(`duplicatetext_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`duplicatetext_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          if (automute2.has(message.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${message.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${message.member} (${message.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${message.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              message.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${message.guild.id}`)).send(muteEmbed);

              client.pendingmutes[message.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = message.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${message.guild.id}`));
              message.member.roles.add(muterole.id);

          };

          if (automute1.has(message.author.id) && !automute2.has(message.author.id)) {

              logs.send(duptextEmbed);
              message.delete();
              message.reply("please do not spam.").then(message => message.delete({ timeout: 4500 }));
              automute2.add(message.author.id);
              setTimeout(() => {
                  automute2.delete(message.author.id);
              }, 120000);

              return;
          };

          message.delete();
          message.reply("please do not spam.").then(message => message.delete({ timeout: 4500 }));
          logs.send(duptextEmbed);
          automute1.add(message.author.id);
          setTimeout(() => {
              automute1.delete(message.author.id);
          }, 120000);

      } else if ((message.content.match(/[A-Z]/g) || []).length > message.content.length / 2 && message.content.length > 20) {

          if (db.get(`automod_capslimit_${message.guild.id}`) == false || db.get(`automod_capslimit_${message.guild.id}`) !== true) return;

          if (message.member.roles.cache.some(r => db.get(`capslimit_bypassroles_${message.guild.id}`).includes(r.id)) || db.get(`capslimit_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) return;

          message.delete();
          message.reply("you have used too many capital letters.").then(message => message.delete({ timeout: 4500 }));
          logs.send(capsEmbed);

      };

      if (db.get(`automod_${message.guild.id}`) == 'true' && db.get(`automod_fastmessagespam_${message.guild.id}`) == 'true' && !message.member.roles.cache.some(r => db.get(`fastmessagespam_bypassroles_${message.guild.id}`).includes(r.id)) && !db.get(`fastmessagespam_bypasschannels_${message.guild.id}`).some(c => message.channel.id == c)) {

          if (automodspam3.has(message.author.id)) {
              automute1.add(message.author.id);
              automodspam4.add(message.author.id);
              setTimeout(() => {
                  automute1.delete(message.author.id);
                  automodspam4.delete(message.author.id);
              }, 1000);
          } else if (automodspam2.has(message.author.id)) {
              automodspam3.add(message.author.id);
              setTimeout(() => {
                  automodspam3.delete(message.author.id);
              }, 900);
          } else if (automodspam1.has(message.author.id)) {
              automodspam2.add(message.author.id);
              setTimeout(() => {
                  automodspam2.delete(message.author.id);
              }, 850);
          } else {
              automodspam1.add(message.author.id);
              setTimeout(() => {
                  automodspam1.delete(message.author.id);
              }, 820);
          };

      };

  };


});
/*
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if(!newMessage.guild) return;
  if(db.get(`messagelogs_channel_${newMessage.guild.id}`) == 'false') return;
  if(db.get(`messagelogs_channel_${newMessage.guild.id}`) == null) return;
  if(db.get(`messagelogs_channel_${newMessage.guild.id}`)){
  if (newMessage.partial) newMessage.fetch().catch(err => console.log(err));

  if (!newMessage.author || newMessage.author.bot) return;
  if (!newMessage.guild) return;
  if (!oldMessage.content) return;
  if (!newMessage.content) return;
  if (oldMessage.content == newMessage.content) return;

  let editEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setAuthor(newMessage.author.tag, newMessage.author.displayAvatarURL({ dynamic: true }))
      .setColor("#6d9ffc")
      .setDescription(`**Message edited in <#${newMessage.channel.id}>** [Jump to Message](${newMessage.url})`)
      .addField("Old Message", oldMessage.content)
      .addField("New Message", newMessage.content)
      .setFooter(`Author ID: ${newMessage.author.id} | Message ID: ${newMessage.id}`)
      .setTimestamp();
      /*!botconfig.Message_Logs_Ignore_Channels.some(cID => cID == newMessage.channel.id))*/
    /*  newMessage.guild.channels.cache.find(channel => channel.id == db.get(`messagelogs_channel_${newMessage.guild.id}`)).send(editEmbed);

  const logs = newMessage.guild.channels.cache.find(channel => channel.id == db.get(`messagelogs_channel_${newMessage.guild.id}`));
  let msgcontent = newMessage.content;
  if (msgcontent.length > 1900) msgcontent = newMessage.content.slice(0, newMessage.content.length - 80) + "..."

  let filterlog = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f56b16")
      .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${newMessage.author} deleted in <#${newMessage.channel.id}>** \n ${msgcontent}`)
      .addField("Reason", "Message contains an invite link")
      .setFooter(`ID: ${newMessage.author.id}`)
      .setTimestamp();

  let filteredEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f0463a")
      .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${newMessage.author} deleted in <#${newMessage.channel.id}>** \n ${msgcontent}`)
      .addField("Reason", "Message contains a filtered word")
      .setFooter(`ID: ${newMessage.author.id}`)
      .setTimestamp();

  let linkfilterEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f5f564")
      .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${newMessage.author} deleted in <#${newMessage.channel.id}>** \n ${msgcontent}`)
      .addField("Reason", "Message contains link")
      .setFooter(`ID: ${newMessage.author.id}`)
      .setTimestamp();

  let emojispamEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f0463a")
      .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${newMessage.author} deleted in <#${newMessage.channel.id}>** \n ${msgcontent}`)
      .addField("Reason", `Message contains ${db.get(`emojis_limit_${newMessage.guild.id}`)}+ emojis`)
      .setFooter(`ID: ${newMessage.author.id}`)
      .setTimestamp();

  let linebreaksEmbed = new Discord.MessageEmbed()
      .setTitle(" ")
      .setColor("#f0463a")
      .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${newMessage.author} deleted in <#${newMessage.channel.id}>** \n ${msgcontent}`)
      .addField("Reason", `Message contains ${db.get(`linebreaks_limit_${newMessage.guild.id}`)}+ line breaks`)
      .setFooter(`ID: ${newMessage.author.id}`)
      .setTimestamp();

  let duptextEmbed = new Discord.MessageEmbed()
      .setColor("#f0463a")
      .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${newMessage.author} deleted in <#${newMessage.channel.id}>** \n ${msgcontent}`)
      .addField("Reason", "Used duplicated text.")
      .setFooter(`ID: ${newMessage.author.id}`)
      .setTimestamp();

  let capsEmbed = new Discord.MessageEmbed()
      .setColor("#f0463a")
      .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Message sent by ${newMessage.author} deleted in <#${newMessage.channel.id}>**\n${msgcontent}`)
      .addField("Reason", "Sent too many capital letters.")
      .setFooter(`ID: ${newMessage.author.id}`)
      .setTimestamp();

  const re = /<?(a)?:?(\w{2,32}):(\d{17,19})>?/g
  const re2 = /(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g

  if (db.get(`automod_${newMessage.guild.id}`) == 'true' && !db.get(`automod_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID) && !newMessage.member.roles.cache.some(r => db.get(`automod_bypassroles_${newMessage.guild.id}`).includes(r.id))) {

      for (let eWord in client.filters.exact) {

          if(db.get(`automod_wordsfilter_${message.guild.id}`) == 'false') return;

          if(newMessage.member.roles.cache.some(r => db.get(`automod_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`wordsfilter_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          eRegExEntry = client.filters.exact[eWord].toLowerCase().split("").join("+(\\W|\\d|_)*");

          let eRegEx = new RegExp(`([^'‘’]|^)\\b(${eRegExEntry}+(\\W|\\d|_)*)\\b`, 'gmi');

          if (newMessage.content.match(eRegEx)) {

              if (automute2.has(newMessage.author.id)) {

                  let muteEmbed = new Discord.MessageEmbed()
                      .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                      .setColor("#ffb53f")
                      .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                      .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                      .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                      .addField("Reason", "3 Automod Violations", true)
                      .setTimestamp();

                  newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

                  client.pendingmutes[newMessage.author.id] = {
                      time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
                  };

                  fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                      if (err) console.log(err);
                  });

                  let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
                  newMessage.member.roles.add(muterole.id);

              };

              if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

                  logs.send(filteredEmbed);
                  newMessage.delete();
                  newMessage.reply("please watch your language.").then(msg => msg.delete({ timeout: 4500 }));
                  automute2.add(newMessage.author.id);
                  setTimeout(() => {
                      automute2.delete(newMessage.author.id);
                  }, 120000);

                  return;
              };

              newMessage.delete();
              newMessage.reply("please watch your language.").then(msg => msg.delete({ timeout: 4500 }));
              logs.send(filteredEmbed);
              automute1.add(newMessage.author.id);
              setTimeout(() => {
                  automute1.delete(newMessage.author.id);
              }, 120000);

              return;

          };

      };

      for (let wWord in client.filters.wild) {

          if(db.get(`automod_wordsfilter_${newMessage.guild.id}`) == 'false') return;

          if(newMessage.member.roles.cache.some(r => db.get(`wordsfilter_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`wordsfilter_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          let wRegExEntry = client.filters.wild[wWord].toLowerCase().split("").join("+(\\W|\\d|_)*");

          let wRegEx = new RegExp(`([^'‘’]|^)\\b(${wRegExEntry}+(\\W|\\d|_)*)\\b`, 'gmi');

          if (newMessage.content.match(wRegEx)) {

              if (automute2.has(newMessage.author.id)) {

                  let muteEmbed = new Discord.MessageEmbed()
                      .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                      .setColor("#ffb53f")
                      .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                      .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                      .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                      .addField("Reason", "3 Automod Violations", true)
                      .setTimestamp();

                  newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

                  client.pendingmutes[newMessage.author.id] = {
                      time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
                  };

                  fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                      if (err) console.log(err);
                  });

                  let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
                  newMessage.member.roles.add(muterole.id);

              };

              if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

                  logs.send(filteredEmbed);
                  newMessage.delete();
                  newMessage.reply("please watch your language.").then(msg => msg.delete({ timeout: 4500 }));
                  automute2.add(newMessage.author.id);
                  setTimeout(() => {
                      automute2.delete(newMessage.author.id);
                  }, 120000);

                  return;
              };

              newMessage.delete();
              newMessage.reply("please watch your language.").then(msg => msg.delete({ timeout: 4500 }));
              logs.send(filteredEmbed);
              automute1.add(newMessage.author.id);
              setTimeout(() => {
                  automute1.delete(newMessage.author.id);
              }, 120000);

              return;

          };

      };

      if (newMessage.content.match(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/gi)) {

          if(db.get(`automod_invitelinks_${newMessage.guild.id}`) == 'false') return;

          if(newMessage.member.roles.cache.some(r => db.get(`invitelinks_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`invitelinks_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          let invMatches = newMessage.content.matchAll(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/gi);

          for (const invMatch of invMatches) {
              let joinedInvMatch = "";
              if (invMatch.includes(" ")) joinedInvMatch = invMatch.split(" ").join("");
              if (!invMatch.includes(" ")) joinedInvMatch = invMatch;

              try {
                  let theInvite = client.fetchInvite(joinedInvMatch);
                  if ((await theInvite).guild.id == newMessage.guild.id) return;
                  throw "automod";
              } catch (e) {
                  if (automute2.has(newMessage.author.id)) {

                      let muteEmbed = new Discord.MessageEmbed()
                          .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                          .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                          .setColor("#ffb53f")
                          .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                          .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                          .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                          .addField("Reason", "3 Automod Violations", true)
                          .setTimestamp();

                      newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

                      client.pendingmutes[newMessage.author.id] = {
                          time: Date.now() + db.get(`automute_duration_${message.guild.id}`)
                      };

                      fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                          if (err) console.log(err);
                      });

                      let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
                      newMessage.member.roles.add(muterole.id);

                  };

                  if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

                      logs.send(filterlog);
                      newMessage.delete();
                      newMessage.reply("please do not send invite links.").then(msg => msg.delete({ timeout: 4500 }));
                      automute2.add(newMessage.author.id);
                      setTimeout(() => {
                          automute2.delete(newMessage.author.id);
                      }, 120000);

                      return;
                  };

                  logs.send(filterlog);
                  newMessage.delete();
                  newMessage.reply("please do not send invite links.").then(msg => msg.delete({ timeout: 4500 }));
                  automute1.add(newMessage.author.id);
                  setTimeout(() => {
                      automute1.delete(newMessage.author.id);
                  }, 120000);

                  return;
              };
          };

      } else if (newMessage.content.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi)){

          if(db.get(`automod_links_${newMessage.guild.id}`) == 'false') return;

          if(newMessage.member.roles.cache.some(r => db.get(`links_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`links_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          if (automute2.has(newMessage.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

              client.pendingmutes[newMessage.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${newMessage.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
              newMessage.member.roles.add(muterole.id);

          };

          if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

              logs.send(linkfilterEmbed);
              newMessage.delete();
              newMessage.reply("please do not send links.").then(msg => msg.delete({ timeout: 4500 }));
              automute2.add(newMessage.author.id);
              setTimeout(() => {
                  automute2.delete(newMessage.author.id);
              }, 120000);

              return;

          };

          newMessage.delete();
          newMessage.reply("please do not send links.").then(msg => msg.delete({ timeout: 4500 }));
          logs.send(linkfilterEmbed);
          automute1.add(newMessage.author.id);
          setTimeout(() => {
              automute1.delete(newMessage.author.id);
          }, 120000);
          return;

      } else if (client.filters["wild"].some(word => newMessage.content.toLowerCase().includes(word))) {

          if(db.get(`automod_words_${newMessage.guild.id}`) == 'false') return;

          if(newMessage.member.roles.cache.some(r => db.get(`words_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`words_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          if (automute2.has(newMessage.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

              client.pendingmutes[newMessage.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${newMessage.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
              newMessage.member.roles.add(muterole.id);

          };

          if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

              logs.send(filteredEmbed);
              newMessage.delete();
              newMessage.reply("please watch your language.").then(msg => msg.delete({ timeout: 4500 }));
              automute2.add(newMessage.author.id);
              setTimeout(() => {
                  automute2.delete(newMessage.author.id);
              }, 120000);

              return;
          };

          newMessage.delete();
          newMessage.reply("please watch your language.").then(msg => msg.delete({ timeout: 4500 }));
          logs.send(filteredEmbed);
          automute1.add(newMessage.author.id);
          setTimeout(() => {
              automute1.delete(newMessage.author.id);
          }, 120000);

      } else if ((newMessage.content.match(re) || []).length + (newMessage.content.match(re2) || []).length >= db.get(`emojis_limit_${newMessage.guild.id}`)) {

          if (db.get(`automod_emojislimit_${newMessage.guild.id}`) == false) return;
          
          if(newMessage.member.roles.cache.some(r => db.get(`emojislimit_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`emojislimit_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          if (automute2.has(newMessage.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

              client.pendingmutes[newMessage.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${newMessage.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
              newMessage.member.roles.add(muterole.id);

          };

          if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

              logs.send(emojispamEmbed);
              newMessage.delete();
              newMessage.reply("you have sent too many emojis.").then(msg => msg.delete({ timeout: 4500 }));
              automute2.add(newMessage.author.id);
              setTimeout(() => {
                  automute2.delete(newMessage.author.id);
              }, 120000);

              return;
          };

          newMessage.delete();
          newMessage.reply("you have sent too many emojis.").then(msg => msg.delete({ timeout: 4500 }));
          logs.send(emojispamEmbed);
          automute1.add(newMessage.author.id);
          setTimeout(() => {
              automute1.delete(newMessage.author.id);
          }, 120000);

      } else if ((newMessage.content.match(/\n/g) || []).length >= db.get(`linebreaks_limit_${newMessage.guild.id}`)) {

          if(db.get(`automod_linebreaks_${newMessage.guild.id}`) == 'false') return;

          if(newMessage.member.roles.cache.some(r => db.get(`linebreaks_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`linebreaks_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          if (automute2.has(newMessage.author.id)) {
              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

              client.pendingmutes[newMessage.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${newMessage.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
              newMessage.member.roles.add(muterole.id);

          };

          if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

              logs.send(linebreaksEmbed);
              newMessage.delete();
              newMessage.reply("you have sent too many line breaks").then(msg => msg.delete({ timeout: 4500 }));
              automute2.add(newMessage.author.id);
              setTimeout(() => {
                  automute2.delete(newMessage.author.id);
              }, 120000);

              return;

          };

          newMessage.delete();
          newMessage.reply("you have sent too many line breaks.").then(msg => msg.delete({ timeout: 4500 }));
          logs.send(linebreaksEmbed);
          automute1.add(newMessage.author.id);
          setTimeout(() => {
              automute1.delete(newMessage.author.id);
          }, 120000);

      }else if (newMessage.content.match(/(.{4,})\1{4,}/ig) || newMessage.content.match(/(.)\1{9,}/gi)) {

          if(db.get(`automod_duplicatetext_${newMessage.guild.id}`) == 'false') return;

          if(newMessage.member.roles.cache.some(r => db.get(`duplicatetext_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`duplicatetext_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          if (automute2.has(newMessage.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

              client.pendingmutes[newMessage.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${newMessage.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
              newMessage.member.roles.add(muterole.id);

          };

          if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

              logs.send(duptextEmbed);
              newMessage.delete();
              newMessage.reply("please do not spam.").then(msg => msg.delete({ timeout: 4500 }));
              automute2.add(newMessage.author.id);
              setTimeout(() => {
                  automute2.delete(newMessage.author.id);
              }, 120000);

              return;
          };

          newMessage.delete();
          newMessage.reply("please do not spam.").then(msg => msg.delete({ timeout: 4500 }));
          logs.send(duptextEmbed);
          automute1.add(newMessage.author.id);
          setTimeout(() => {
              automute1.delete(newMessage.author.id);
          }, 120000);

      } else if ((newMessage.content.match(/[A-Z]/g) || []).length > newMessage.content.length / 2 && newMessage.content.length > 20) {

          if(db.get(`automod_capslimit_${newMessage.guild.id}`) == false) return;

          if(newMessage.member.roles.cache.some(r => db.get(`capslimit_bypassroles_${newMessage.guild.id}`).includes(r.id)) || db.get(`capslimit_bypasschannels_${newMessage.guild.id}`).some(cID => newMessage.channel.id == cID)) return;

          if (automute2.has(newMessage.author.id)) {

              let muteEmbed = new Discord.MessageEmbed()
                  .setAuthor("Mute [AUTO]", newMessage.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`\`${newMessage.author.tag}\` has been auto-muted`)
                  .setColor("#ffb53f")
                  .addField("Muted User", `${newMessage.member} (${newMessage.member.id})`, true)
                  .addField("Responsible Staff", `${client.user.username} (${client.user.id})`, true)
                  .addField("Duration", `${db.get(`automute_duration_${newMessage.guild.id}`)/60000} minutes`, true)
                  .addField("Reason", "3 Automod Violations", true)
                  .setTimestamp();

              newMessage.guild.channels.cache.find(channel => channel.id == db.get(`modlogs_channel_${newMessage.guild.id}`)).send(muteEmbed);

              client.pendingmutes[newMessage.author.id] = {
                  time: Date.now() + db.get(`automute_duration_${newMessage.guild.id}`)
              };

              fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
                  if (err) console.log(err);
              });

              let muterole = newMessage.guild.roles.cache.find(role => role.id == db.get(`mutedrole_id_${newMessage.guild.id}`));
              newMessage.member.roles.add(muterole.id);

          };

          if (automute1.has(newMessage.author.id) && !automute2.has(newMessage.author.id)) {

              logs.send(capsEmbed);
              newMessage.delete();
              newMessage.reply("please do not spam.").then(msg => msg.delete({ timeout: 4500 }));
              automute2.add(newMessage.author.id);
              setTimeout(() => {
                  automute2.delete(newMessage.author.id);
              }, 120000);

              return;
          };

          newMessage.delete();
          newMessage.reply("you have used too many capital letters.").then(msg => msg.delete({ timeout: 4500 }));
          logs.send(capsEmbed);
          automute1.add(newMessage.author.id);
          setTimeout(() => {
              automute1.delete(newMessage.author.id);
          }, 120000);

      };

  };
  } else return
});

client.on("messageDelete", async (messageDelete) => {
  if (messageDelete.partial) return;
  if (!messageDelete.guild) return;
  if (messageDelete.author.bot) return;
  if(db.get(`messagelogs_channel_${messageDelete.guild.id}`) == 'false') return;
  if(db.get(`messagelogs_channel_${messageDelete.guild.id}`) == null) return
if(db.get(`messagelogs_channel_${messageDelete.guild.id}`)){

 
  let msgdeletecontent = messageDelete.content;
  if (msgdeletecontent.length > 1900) msgdeletecontent = messageDelete.content.slice(0, messageDelete.content.length - 80) + "...";

  if (!messageDelete.attachments.size > 0) {

      let deleteEmbed = new Discord.MessageEmbed()
          .setTitle(" ")
          .setAuthor(messageDelete.author.tag, messageDelete.author.displayAvatarURL({ dynamic: true }))
          .setColor("#3474eb")
          .setDescription(`**Message sent by ${messageDelete.author} deleted in <#${messageDelete.channel.id}>**\n${msgdeletecontent}`)
          .setFooter(`Author ID: ${messageDelete.author.id} | Message ID: ${messageDelete.id}`)
          .setTimestamp();

      return messageDelete.guild.channels.cache.find(channel => channel.id === db.get(`messagelogs_channel_${messageDelete.guild.id}`)).send(deleteEmbed);

  } else if (messageDelete.attachments.size > 0) {

      let deleteEmbed = new Discord.MessageEmbed()
          .setTitle(" ")
          .setAuthor(messageDelete.author.tag, messageDelete.author.displayAvatarURL({ dynamic: true }))
          .setColor("#3474eb")
          .setDescription(`**Message sent by ${messageDelete.author} deleted in <#${messageDelete.channel.id}>** \n${msgdeletecontent}`)
          .addField("Attachment", `[View](${messageDelete.attachments.array()[0].proxyURL})`)
          .setImage(messageDelete.attachments.array()[0].proxyURL)
          .setFooter(`Author ID: ${messageDelete.author.id} | Message ID: ${messageDelete.id}`)
          .setTimestamp();

      return messageDelete.guild.channels.cache.find(channel => channel.id === db.get(`messagelogs_channel_${messageDelete.guild.id}`)).send(deleteEmbed);
  }
} else return
});



client.on("messageReactionAdd", async (messageReaction, user) => {
  if(!messageReaction.message.guild) return;
  if(db.get(`reactionlogs_channel_${messageReaction.message.guild.id}`) == null) return;
  if(db.get(`reactionlogs_channel_${messageReaction.message.guild.id}`) == 'false') return;

  if (messageReaction.message.partial) await messageReaction.message.fetch().catch(err => console.log(err));
  if (messageReaction.partial) await messageReaction.fetch().catch(err => console.log(err));

  if (!messageReaction.message.guild || user.bot) return;

  if (messageReaction.count == 1) {

      let reactionLogEmbed = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
        .setColor("#56f0ba")
        .setDescription(`**Reaction added in** ${messageReaction.message.channel} [Jump to Message](${messageReaction.message.url}) \n\`${messageReaction.emoji.identifier}\``)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();
  
      if (messageReaction.emoji.url) reactionLogEmbed.setThumbnail(messageReaction.emoji.url);
      if (!messageReaction.emoji.url) {
        reactionLogEmbed.setDescription(`**Reaction added in** ${messageReaction.message.channel} [Jump to Message](${messageReaction.message.url}) \n${messageReaction.emoji.toString()}`)
      }

      messageReaction.message.guild.channels.cache.find(channel => channel.id == db.get(`reactionlogs_channel_${messageReaction.message.guild.id}`)).send(reactionLogEmbed);
    };

});



*/










  


client.login(client.config1.discord.token);