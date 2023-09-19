
const db = require('quick.db')
module.exports = {
    name: "enableserver",
    aliases:['enableguild'],
    description: "set ur guild  join/leave channels",
    utilisation: `{prefix}enableserver [command name]`,
    category: "Commands",
    
    async execute(client, message, prefix) {
        db.add(`commands_used`, 1)
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return
        }
        
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args[1].toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));


if(command === 'economy'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('economy')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'economy') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Economy\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Economy\` isn\'t disabled in this server!`)
    }
})
    return
}

if(command === 'fun'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('fun')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'fun') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Fun\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Fun\` isn\'t disabled in this server!`)
    }
})
    return
}

if(command === 'giveaways'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('giveaways')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'giveaways') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Giveaways\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Giveaways\` isn\'t disabled in this server!`)
    }
})
    return
}



if(command === 'invite'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('invite')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'invite') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Invite Manager\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Invite Manager\` isn\'t disabled in this server!`)
    }
})
    return
}

if(command === 'love'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('love')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'love') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Love\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Love\` isn\'t disabled in this server!`)
    }
})
    return
}


if(command === 'messages'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('messages')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'messages') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Messages\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Messages\` isn\'t disabled in this server!`)
    }
})
    return
}

if(command === 'moderation'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('moderation')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'moderation') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Moderation\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Moderation\` isn\'t disabled in this server!`)
    }
})
    return
}

if(command === 'music'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('music')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'music') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Music\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Music\` isn\'t disabled in this server!`)
    }
})
    return
}

if(command === 'utility'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('utility')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'utility') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Utility\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Utility\` isn\'t disabled in this server!`)
    }
})
    return
}

if(command === 'anti'){
    let schema = require('../schemas/disabledservercats')
    schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(err) throw err;
    if(data) {
        if(data.Cmds.includes('anti')) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === 'anti') data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`Anti-Raid\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`Anti-Raid\` isn\'t disabled in this server!`)
    }
})
    return
}
let schema = require('../schemas/disabledserver')
if(!cmd) return message.inlineReply('You need to specify a real command.')
if(!command) return message.inlineReply('You need to say a command to disable.')
schema.findOne({ Guild: message.guild.id }, async(err, data) => {
    if(err) throw err;
    if(data) {
        if(data.Cmds.includes(cmd.name)) {
            let commandNumber;

            for (let i = 0; i < data.Cmds.length; i++) {
                if(data.Cmds[i] === cmd.name) data.Cmds.splice(i, 1)
            }

            await data.save()
            message.inlineReply(`\`${cmd.name}\` has been enabled in ${message.guild.name}`)
        } else return message.inlineReply(`\`${cmd.name}\` isn\`t disabled in this server!`)
    }
})
    }};