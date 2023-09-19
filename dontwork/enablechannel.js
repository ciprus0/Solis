
const db = require('quick.db')
module.exports = {
    name: "enablechannel",
    aliases:['enablechan'],
    description: "set ur guild  join/leave channels",
    utilisation: `{prefix}enablechannel <mention channel> [command name]`,
    category: "Commands",
    
    async execute(client, message, prefix) {
        db.add(`commands_used`, 1)
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return
        }
        
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) 
        if(channel) {
            const command = args[2].toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));


if(command === 'economy'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'fun'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'giveaways'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}



if(command === 'invite'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'love'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'messages'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'moderation'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'music'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'utility'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}



if(command === 'anti'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}

if(!command) return message.inlineReply('You need to say a command to disable.')

let schema = require('../schemas/disabledchannels')
schema.findOne({ Channels: channel.id }, async(err, data) => {
    if(err) throw err;
    if(data) {
        if(data.Cmds.includes(cmd.name)) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === cmd.name) data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`${cmd.name}\` has been enabled in <#${channel.id}>`)
        } else return message.inlineReply(`\`${cmd.name}\` isn\'t disabled in this channel!`)
    }
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
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'fun'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'giveaways'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}



if(command === 'invite'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'love'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'messages'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'moderation'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'music'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}


if(command === 'utility'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}



if(command === 'anti'){
    let schema = require('../schemas/disabledchannelcats')
    schema.findOne({ Channels: message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            if(data.Cmds.includes(command)) {
                let commandNumber;
    
                for (let i = 0; i < data.Cmds.length; i++) {
                    if(data.Cmds[i] === command) data.Cmds.splice(i, 1)
                }
    
                await data.save()
                message.inlineReply(`\`${command}\` has been enabled in <#${channel.id}>`)
            } else return message.inlineReply(`\`${command}\` isn\'t disabled in this channel!`)
        }
    })
}



let schema = require('../schemas/disabledchannels')
if(!command) return message.inlineReply('You need to say a command to disable.')
schema.findOne({ Channels: message.channel.id }, async(err, data) => {
    if(err) throw err;
    if(data) {
        if(data.Cmds.includes(cmd.name)) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === cmd.name) data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`${cmd.name}\` has been enabled in <#${message.channel.id}>`)
        } else return message.inlineReply(`\`${cmd.name}\` isn\'t disabled in this channel!`)
    }
})
    }};