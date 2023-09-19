const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../config.js')
const db = require('quick.db')
const schema = require('../schemas/disabledchannels')
module.exports = {
name: "disablechannel",
aliases:['disablechan'],
description: "set ur guild  join/leave channels",
utilisation: `{prefix}disablechannel [mention channel] [command name]`,
category: "Commands",

async execute(client, message, prefix) {
    db.add(`commands_used`, 1)
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return
    }
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
    if(channel) {

        
    if(!args[2]) return message.inlineReply(`Please use the correct format: \`${prefix}disablechannel [mention channel] [command/category name]\``)
    const command = args[2].toLowerCase();
    if(command === 'economy'){
        let schema = require('../schemas/disabledchannelcats')
        schema.findOne({ Channels: channel.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                if(data.Cmds.includes(command)) return message.inlineReply(`\`economy\` is already disabled in this channel!`);
                data.Cmds.push(command)
                
            } else {
                
                data = new schema({
                    Channels: channel.id, 
                    Cmds: command
                })
                
            }
            await data.save();
        
    
            return message.inlineReply(`The category \`economy\` has been disabled in <#${channel.id}>`)
        })
        return
    }
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
if(!message.member.hasPermission('ADMINISTRATOR')) {
    return
}
const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel.id
  if(!channel) return message.channel.send(`Please specify a channel.`) 
if(!cmd) return message.inlineReply('You need to specify a real command.')
if(!command) return message.inlineReply('You need to say a command to disable.')
schema.findOne({ Channels: channel.id }, async(err, data) => {
    if(err) throw err;
    if(data) {
        if(data.Cmds.includes(cmd.name)) return message.inlineReply('This command is already disabled in this channel!');
        data.Cmds.push(cmd.name)
        
    } else {
        data = new schema({
            Channels: channel.id,
            Cmds: cmd.name
        })
    }
    await data.save();
    message.inlineReply(`\`${cmd.name}\` has been disabled in ${args[1]}`)
})
    }

    const command = args[1].toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
if(!message.member.hasPermission('ADMINISTRATOR')) {
    return
}

 
if(command === 'economy'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`economy\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`economy\` has been disabled in <#${message.channel.id}>`)
    })
    return
}


if(command === 'fun'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Fun\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Fun\` has been disabled in <#${message.channel.id}>`)
    })
    return
}


if(command === 'giveaways'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Giveaways\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Giveaways\` has been disabled in <#${message.channel.id}>`)
    })
    return
}

if(command === 'invite'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Invite Manager\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Invite Manager\` has been disabled in <#${message.channel.id}>`)
    })
    return
}

if(command === 'love'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Love\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Love\` has been disabled in <#${message.channel.id}>`)
    })
    return
}


if(command === 'messages'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Messages\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Messages\` has been disabled in <#${message.channel.id}>`)
    })
    return
}

if(command === 'moderation'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Moderation\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Moderation\` has been disabled in <#${message.channel.id}>`)
    })
    return
}


if(command === 'music'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Music\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Music\` has been disabled in <#${message.channel.id}>`)
    })
    return
}


if(command === 'utility'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Utility\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Utility\` has been disabled in <#${message.channel.id}>`)
    })
    return
}


if(command === 'anti'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) return message.inlineReply(`\`Anti-Raid\` is already disabled in this channel!`);
            data.Cmds.push(command)
            
        } else {
            
            data = new schema({
                Channels: message.channel.id, 
                Cmds: command
            })
            
        }
        await data.save();
    

        return message.inlineReply(`The category \`Anti-Raid\` has been disabled in <#${message.channel.id}>`)
    })
    return
}
if(!cmd) return message.inlineReply('You need to specify a real command.')
if(!command) return message.inlineReply('You need to say a command to disable.')
schema.findOne({ Channels: message.channel.id }, async(err, data) => {
    if(err) throw err;
    if(data) {
        if(data.Cmds.includes(cmd.name)) return message.inlineReply('This command is already disabled in this channel!');
        data.Cmds.push(cmd.name)
        
    } else {
        data = new schema({
            Channels: message.channel.id,
            Cmds: cmd.name
        })
    }
    await data.save();
    message.inlineReply(`\`${cmd.name}\` has been disabled in <#${message.channel.id}>`)
})
}};