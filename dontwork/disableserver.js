const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../config.js')
const db = require('quick.db')


module.exports = {
name: "disableserver",
aliases:['disableguild'],
description: "set ur guild  join/leave channels",
utilisation: `{prefix}disableserver [command name]`,
category: "Commands",

async execute(client, message, prefix) {
    db.add(`commands_used`, 1)
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return
    }
  
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return
        }
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args[1].toLowerCase();
if(command === 'economy'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Economy\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Economy\` has been disabled in **${message.guild.name}**`)
    })
    return
}

if(command === 'fun'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Fun\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Fun\` has been disabled in **${message.guild.name}**`)
    })
    return
}


if(command === 'giveaways'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Giveaways\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Giveaways\` has been disabled in **${message.guild.name}**`)
    })
    return
}


if(command === 'invite'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Invite Manager\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Invite Manager\` has been disabled in **${message.guild.name}**`)
    })
    return
}



if(command === 'love'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Love\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Love\` has been disabled in **${message.guild.name}**`)
    })
    return
}

if(command === 'messages'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Messages\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Messages\` has been disabled in **${message.guild.name}**`)
    })
    return
}


if(command === 'moderation'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Moderation\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Moderation\` has been disabled in **${message.guild.name}**`)
    })
    return
}


if(command === 'music'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Music\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Music\` has been disabled in **${message.guild.name}**`)
    })
    return
}

if(command === 'utility'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Utility\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Utility\` has been disabled in **${message.guild.name}**`)
    })
    return
}

if(command === 'anti'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Anti-Raid\` is already disabled in this server!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Guild: message.guild.id,
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Anti-Raid\` has been disabled in **${message.guild.name}**`)
    })
    return
}

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));



if(!command) return message.inlineReply('You need to say a command to disable.')
let schema = require('../schemas/disabledserver')
schema.findOne({ Guild: message.guild.id }, async(err, data) => {
    if(err) throw err;
    if(data) {
        if(data.Cmds.includes(cmd.name)) return message.inlineReply(`\`${cmd.name}\` is already disabled in this server!`);
        data.Cmds.push(cmd.name)
        
    } else {
        data = new schema({
            Guild: message.guild.id,
            Cmds: cmd.name
        })
    }
    await data.save();
    message.inlineReply(`\`${cmd.name}\` has been disabled in **${message.guild.name}**`)
})
}};