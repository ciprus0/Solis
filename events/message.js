const discord = require('discord.js')
const db = require('quick.db')
const { time } = require("cron")
const { owners, levelUpMessage, prefix } = require("../config")
const db1 = require("../database/db")
const ms = require("ms")

const { PREFIX } = require('../config');
module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    let prefix1;
await db1.promise().query('SELECT * FROM prefix WHERE guild_id = ?',[message.guild.id]).then(result => {
prefix1 = result[0][0]

})

if(prefix1 == null) {

db1.query(`INSERT INTO prefix (guild_id) VALUES(?)`, [message.guild.id]);
/*console.log(`${message.guild.name} has been added to the prefix guild database`)*/
message.inlineReply(`This server's prefix has been set to \`$\`!`)

return
}

    let prefix;
    let fetched = prefix1.prefix

    if (fetched === null) {
        prefix = PREFIX
    } else {
        prefix = fetched
    }


const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    let messager = message.author.id
    let guilder = message.guild.id
    let guilda = message.guild.name
    const number = Math.floor(Math.random() * 100000000000000000000000000000000000000000000000000000)
    
    db1.query('UPDATE messagecount SET username = ? WHERE user_id = ?',[message.author.username, message.author.id])

    let rclguild;

    await db1.promise().query('SELECT * FROM antiraid WHERE guild_id = ?',[message.guild.id]).then(result => {
    rclguild = result[0][0]
    
    })
  
  if(!rclguild) {
  
  db1.query(`INSERT INTO antiraid (guild_id) VALUES(?)`, [message.guild.id]);
  console.log(`${message.author.username} has been added to the anti raid guild database.`)

  }
  
  
  
  let rcluser;
  
  await db1.promise().query('SELECT * FROM usersraid WHERE guild_id = ? AND user_id = ?',[message.guild.id, message.author.id]).then(result => {
  rcluser = result[0][0]
  
  })
  
  if(!rcluser) {
  
  db1.query(`INSERT INTO usersraid (guild_id, user_id) VALUES(?,?)`, [message.guild.id, message.author.id]);
  /*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
  
  }

  let marriageuser;
  
  await db1.promise().query('SELECT * FROM marriage WHERE user_id = ?',[message.author.id]).then(result => {
  marriageuser = result[0][0]
  
  })
  
  if(!marriageuser) {
  
  db1.query(`INSERT INTO marriage (user_id) VALUES(?)`, [message.author.id]);
  /*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
  
  }




    if (message.channel.id === db.get(`messages_channel_${message.guild.id}`)) {
        try {
            await db1.promise().query('SELECT * FROM messagecount WHERE user_id = ? AND guild_id = ?', [messager, guilder]).then(result => {
                test = result[0][0]
    
            })
            if (test) {
                db1.query('UPDATE messagecount set total_messages = total_messages+1,weekly_messages = weekly_messages+1,daily_messages = daily_messages+1,hourly_messages = hourly_messages+1 WHERE user_id = ? AND guild_id = ?', [messager, guilder])
            }
            else {
                db1.query(`INSERT INTO messagecount (guild_name,guild_id,user_id,username) VALUES(?,?,?,?)`, [guilda, guilder, messager, message.author.username]);
                /*console.log(`${message.author.username} has been added to the message count database.`)*/
               
                db1.query('UPDATE messagecount set total_messages = total_messages+1,weekly_messages = weekly_messages+1,daily_messages = daily_messages+1,hourly_messages = hourly_messages+1 WHERE user_id = ? AND guild_id = ?', [messager, guilder])
            }
        } catch (error) {
            console.log(error)
        }
    } else if(db.get(`messages_channel_${message.guild.id}`) == null){
        try {
            await db1.promise().query('SELECT * FROM messagecount WHERE user_id = ? AND guild_id = ?', [messager, guilder]).then(result => {
                test = result[0][0]
    
            })
            if (test) {
                db1.query('UPDATE messagecount set total_messages = total_messages+1,weekly_messages = weekly_messages+1,daily_messages = daily_messages+1,hourly_messages = hourly_messages+1 WHERE user_id = ? AND guild_id = ?', [messager, guilder])
            }
            else {
                db1.query(`INSERT INTO messagecount (guild_name,guild_id,user_id,username) VALUES(?,?,?,?)`, [guilda, message.guild.id, messager, message.author.username]);
                /*console.log(`${message.author.username} has been added to the message count database.`)*/
               
                db1.query('UPDATE messagecount set total_messages = total_messages+1,weekly_messages = weekly_messages+1,daily_messages = daily_messages+1,hourly_messages = hourly_messages+1 WHERE user_id = ? AND guild_id = ?', [messager, guilder])
            }
        } catch (error) {
            console.log(error)
        }
    }


    try {
        await db1.promise().query('SELECT * FROM moderation WHERE guild_id = ?', [message.guild.id]).then(result => {
            test1 = result[0][0]

        })
        if (test1) {
            
        }
        else {
            db1.query(`INSERT INTO moderation (guild_id) VALUES(?)`, [message.guild.id]);
            console.log(`${message.guild.name} has been added to the moderation guild database.`)
        }
    } catch (error) {
        console.log(error)
    }





    
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES")) return
db1.query('UPDATE user set networth = pocket + bank WHERE user_id = ?', [message.author.id])
   

   
      
   
        try {
            await db1.promise().query('SELECT * FROM user WHERE user_id = ?', [message.member.id]).then(result => {
                user = result[0][0]
                

            })

   
        } catch (error) {
            console.log(error)
            
        }
    
        if (user) { 
 
} else {
         
            try {
                db1.query(`INSERT INTO user (user_id,username) VALUES(?,?)`, [messager, message.author.username]);
                /*console.log(`${message.author.username} has been added to the user database.`)*/
            } catch (err) {
                console.log(err)
                message.inlineReply('Sorry, you were not in the database, so please say the command again!')
            } 
        }




    let messagechannela;
    let fetched1 = await db.fetch(`messages_channel_${message.guild.id}`);

        if (fetched1 === null) {
            messagechannela = 'None'
        } else {
            messagechannela = fetched1
        }
        
        /*if (messagechannela == 'None') {
            const randomMoney = Math.floor((Math.random() * 20) + 5)
            let pocketInt = parseInt(user.pocket)
            let moneyInt = parseInt(randomMoney)
            updateMoney = (pocketInt + moneyInt)
            db1.query("UPDATE user SET pocket = ? WHERE user_id = ?", [updateMoney, message.member.id])
        } else if (message.channel.id === messagechannela) {
            const randomMoney = Math.floor((Math.random() * 20) + 5)
            let pocketInt = parseInt(user.pocket)
            let moneyInt = parseInt(randomMoney)
            updateMoney = (pocketInt + moneyInt)
            db1.query("UPDATE user SET pocket = ? WHERE user_id = ?", [updateMoney, message.member.id])
        }*/
    
    const missingPerms = (member, perms) => {
        const missingPerms = member.permissions.missing(perms)
            .map(str => `\`${str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase())}\``)
    
        return missingPerms.length > 1 ?
            `${missingPerms.slice(0, -1).join(", ")} and ${missingPerms.slice(-1)[0]}` :
            missingPerms[0]
    }
    if (message.content.indexOf(prefix) !== 0) return;
    if(!cmd) return
    if (cmd.limits) {
        const current = client.limits.get(`${command}-${message.author.id}`);
        if (!current) client.limits.set(`${command}-${message.author.id}`,{
            time:Date.now()+cmd.limits.cooldown,
            limit:cmd.limits.rateLimit
        })
        else {
            if (current.limit >= cmd.limits.rateLimit) {
                let timer = current.time - Date.now()
                message.inlineReply(new discord.MessageEmbed()
                .setAuthor(`COOLDOWN`, message.guild.iconURL())
                .setTitle('YO, CHILL')
                .setDescription(`\`${cmd.name}\` is on a cooldown of **${ms(timer)}**`)
                )
                return
            }
            client.limits.set(`${command}-${message.author.id}`, current + 1)
            
        }
        setTimeout(() => {
            client.limits.delete(`${command}-${message.author.id}`)
        }, cmd.limits.cooldown)

    }

/*if(message.author.id === '864478487368826921'){
    if(cmd.module == 'economy'){
        const embed = new dsc.MessageEmbed()
        .setDescription(`You are blacklisted from using \`economy\` on Solis. If you want to appeal, [Click Here](https://discord.gg/VUc5AQEbXs) to join the Support Server, and DM tim ✓#0001`)
    message.inlineReply(embed)
    return
}}*/


/*const db3 = require('../schemas/disabledserver')
const db4 = require('../schemas/disabledchannels')
const db5 = require('../schemas/disabledchannelcats')
const db6 = require('../schemas/disabledservercats')
const check1 = await db3.findOne({ Guild: message.guild.id })
const check2 = await db4.findOne({ Channels: message.channel.id })
const check3 = await db6.findOne({ Guild: message.guild.id })
const check4 = await db5.findOne({ Channels: message.channel.id })
if(check1) {
    if(check1.Cmds.includes(cmd.name)) return message.inlineReply(`\`${cmd.name}\` is disabled in **${message.guild.name}**`)
    
} 

if(check2) {
    if(check2.Cmds.includes(cmd.name)) return message.inlineReply(`\`${cmd.name}\` is disabled in <#${message.channel.id}`)
   
}

if(check3) {
    if(check3.Cmds.includes(cmd.module)) return message.inlineReply(`\`${cmd.name}\` is disabled in **${message.guild.name}**`)
   
}

if(check4) {
    if(check4.Cmds.includes(cmd.module)) return message.inlineReply(`\`${cmd.name}\` is disabled in <#${message.channel.id}>`)
    
}*/
    cmd.execute(client, message, args, prefix)

   
    
 
};









