module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    async execute(client, message, args, prefix) {
        const db = require("quick.db")
      db.add(`commands_used`, 1)
        
        function check(msg, arr) {
          return arr.some(op => op.toLowerCase() === msg.toLowerCase());
        }
          const cmd = args[0];
        if(!cmd) {
            

            return message.inlineReply({
                embed: {
                    color: 0x000000,
                    author: { name: 'Help | Solis', iconURL: message.guild.iconURL()},
                    footer: { text: 'Created by tim.' },
                    timestamp: {},
                    fields: [
                        { name: '<:shield:849427414081994772>' + ' Anti-Raid', value: `\`${prefix}help raid\``, inline: true },
                        { name: '<:add:1119726014914891896>' + ' Invites', value: `\`${prefix}help invites\``, inline: true },
                        
                        { name: '<:AX_acidicrobux:906616885192306708>' + ' Economy', value: `\`${prefix}help economy\``, inline: true },
                        /*{ name : '🎧 Music', value: `\`${prefix}help music\``, inline: true},*/
                        
                        /*{ name: '💍 Love', value: `\`${prefix}help love\``, inline: true},*/
                        { name: '<:NB_IconPinUnread:871430291191914556>' + ' Msg Count', value: `\`${prefix}help msgcount\``, inline: true },
                        { name: '<:AX_newcrown:902025277536886796>' + ' Moderation', value: `\`${prefix}help mod\``, inline: true },
                        
                        { name: '<:NB_IconBotDev:743341284420223066>' + ' Utility', value: `\`${prefix}help utility\``, inline: true },
                        { name: '⚙️' + ' Configuration', value: `\`${prefix}help config\``, inline: true },
                        { name: '<:AX_bearsmile:903108093737594981>' + ' Fun', value: `\`${prefix}help fun\``, inline: true },
                        { name: '<a:AX_attention:906616882235334676>' + ' Contact Info', value: `\`${prefix}contact\``, inline: true }, 
                        { name: '<:AX_attention2:906616880867983402>' + ' Policies', value: `\`${prefix}help policy\``, inline: true },
                       /* { name: '<:AX_arrow3:906616885666275328>' + 'Credits', value: `\`${prefix}credits\``, inline: true }, */
                    ],
                    timestamp: new Date(),
                    description: 'Join our [Support Server](https://discord.gg/socialhouse)! | [Invite Me!](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=1101121711351)',
                }});
                
    } 
/*{ name: '<:tadas:846940408910053427> Giveaways', value: `\`${prefix}help giveaways\``, inline: true },*/
    if(cmd.toLowerCase() === 'economy') {
        const money = message.client.commands.filter(x => x.category == 'Money').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const user = message.client.commands.filter(x => x.category == 'User').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const random = message.client.commands.filter(x => x.category == 'Random').map((x) => `\`${prefix}` + x.name + '`').join(', ');
const action = message.client.commands.filter(x => x.category == 'Action').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        return message.inlineReply({
            embed: {
                color: 0x000000,
                author: { name: 'Economy | Solis', iconURL: message.guild.iconURL()},
                footer: { text: 'Created by tim.' },
                timestamp: {},
                fields: [
                    { name: 'Money', value: money }, 
                    { name: 'User', value: user },
                    { name: 'Actions', value: action },
                    { name: 'Random', value: random }
                ],
                timestamp: new Date(),
                description: '[Support Server](https://discord.gg/socialhouse)',
            }})
    }

    if(cmd.toLowerCase() === 'invitemanager') {
        const info = message.client.commands.filter(x => x.category == 'Info').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const manage = message.client.commands.filter(x => x.category == 'Manage').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const invitej1 = message.client.commands.filter(x => x.category == 'Invitej').map((x) => `\`${prefix}` + x.name + '`').join(', ');

        return message.inlineReply({
            embed: {
                color: 0x000000,
                author: { name: 'Invite Manager | Solis', iconURL: message.guild.iconURL()},
                footer: { text: 'Created by tim.' },
                timestamp: {},
                fields: [
                    { name: 'Configuration', value: invitej1 }, 
                    { name: 'Info', value: info }
                ],
                timestamp: new Date(),
                description: '[Support Server](https://discord.gg/socialhouse)',
            }})
    }
    if(cmd.toLowerCase() === 'messages') {
        const messagesa = message.client.commands.filter(x => x.category == 'Messages').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        


        return message.inlineReply({
            embed: {
                color: 0x000000,
                author: { name: 'Message System | Solis', iconURL: message.guild.iconURL()},
                footer: { text: 'Created by tim.' },
                timestamp: {},
                fields: [
                    { name: 'Commands', value: messagesa }, 
                ],
                timestamp: new Date(),
                description: '[Support Server](https://discord.gg/socialhouse)',
            }})
    }
    if(cmd.toLowerCase() === 'love') {
        const marriage = message.client.commands.filter(x => x.category == 'Love').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        


        return message.inlineReply({
            embed: {
                color: 0x000000,
                author: { name: 'Love | Solis', iconURL: message.guild.iconURL()},
                footer: { text: 'Created by tim.' },
                timestamp: {},
                fields: [
                    { name: 'Commands', value: marriage }, 
                ],
                timestamp: new Date(),
                description: '[Support Server](https://discord.gg/socialhouse)',
            }})
    }
    /*if(cmd.toLowerCase() === 'music') {
    const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => `\`${prefix}` + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => `\`${prefix}` + x.name + '`').join(', ');

            return message.inlineReply({
                embed: {
                    color: 0x000000,
                    author: { name: 'Music | Solis',  iconURL: message.guild.iconURL()},
                    footer: { text: 'Created by tim.' },
                    timestamp: {},
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `To use filters, \`${prefix}filter (the filter)\`. ` + `To view certain commands, use \`${prefix}helpmusic <command>\`.`,
                }})};
    */

    if(cmd.toLowerCase() === 'raid') {

        return message.inlineReply({
            embed: {
                color: 0x000000,
                author: { name: 'Anti-Raid | Solis',  iconURL: message.guild.iconURL()},
                footer: { text: 'Created by tim.' },
                timestamp: {},
                fields: [
                    { name: 'General', value: `\`set\` \`whitelist\` \`unbanall\``, inline: false},
                    { name: 'Configuration', value: `\`channelCreateLimit\` \`channelDeleteLimit\` \`roleCreateLimit\` \`roleDeleteLimit\` \`banLimit\` \`kickLimit\` \`addbot\` \`logs\` \`limits\` \`punishment\``, inline: false },
                    { name: 'Whitelist', value: `\`add\` \`remove\``, inline: false},
                ],
                timestamp: new Date(),
                description: 'These are the Anti-Raid commands for Owner use only. Use $h for the main bot commands.',
            }})
    }

    if(cmd.toLowerCase() === 'mod') {
        const moderation = message.client.commands.filter(x => x.category == 'Moderation').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const staff = message.client.commands.filter(x => x.category == 'Staff').map((x) => `\`${prefix}` + x.name + '`').join(', ');
                   return message.inlineReply({
                       embed: {
                           color: 0x000000,
                           author: { name: 'Staff | Solis', iconURL: message.guild.iconURL()},
                           footer: { text: 'Created by tim.' },
                           timestamp: {},
                           fields: [
                               { name: 'Moderation', value: moderation }, 
                               { name: 'Staff', value: staff }
                           ],
                           timestamp: new Date(),
                           description: '[Support Server](https://discord.gg/socialhouse)',
                       }})
                   
    }
    
    if(cmd.toLowerCase() === 'fun') {
        const actions = message.client.commands.filter(x => x.category == 'Actions').map((x) => `\`${prefix}` + x.name + '`').join(', ');
 const randomstuff = message.client.commands.filter(x => x.category == 'Randomstuff').map((x) => `\`${prefix}` + x.name + '`').join(', ');
 const games = message.client.commands.filter(x => x.category == 'Games').map((x) => `\`${prefix}` + x.name + '`').join(', ');
 const images = message.client.commands.filter(x => x.category == 'Images').map((x) => `\`${prefix}` + x.name + '`').join(', ');
 const imagineman = message.client.commands.filter(x => x.category == 'Image Manipulation').map((x) => `\`${prefix}` + x.name + '`').join(', ');
            return message.inlineReply({
                embed: {
                    color: 0x000000,
                    author: { name: 'Fun | Solis', iconURL: message.guild.iconURL()},
                    footer: { text: 'Created by tim.' },
                    timestamp: {},
                    fields: [
                        { name: 'Actions', value: actions }, 
                        { name: 'Bot', value: randomstuff },
                        { name: 'Games', value: games },
                        { name: 'Images', value: images },
                        { name: 'Image Manipulation', value: imagineman }
                    ],
                    timestamp: new Date(),
                    description: '[Support Server](https://discord.gg/socialhouse)',
                }})
    }
    
    if(cmd.toLowerCase() === 'utility') {
        const server = message.client.commands.filter(x => x.category == 'Server').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const users = message.client.commands.filter(x => x.category == 'Users').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        return message.inlineReply({
            embed: {
                color: 0x000000,
                author: { name: 'Utility | Solis', iconURL: message.guild.iconURL()},
                footer: { text: 'Created by tim.' },
                timestamp: {},
                fields: [
                    { name: 'Users', value: users }, 
                    { name: 'Server', value: server },
                ],
                timestamp: new Date(),
                description: '[Support Server](https://discord.gg/socialhouse)',
            }})
    }
    
    if(cmd.toLowerCase() === 'config') {
        const invitej = message.client.commands.filter(x => x.category == 'Invitej').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const welcomem = message.client.commands.filter(x => x.category == 'Welcomem').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const strike = message.client.commands.filter(x => x.category == 'Strike').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const commands = message.client.commands.filter(x => x.category == 'Messages').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const mod = message.client.commands.filter(x => x.category == 'Moderation1').map((x) => `\`${prefix}` + x.name + '`').join(', ');
                   return message.inlineReply({
                       embed: {
                           color: 0x000000,
                           author: { name: 'Configuration | Solis', iconURL: message.guild.iconURL()},
                           footer: { text: 'Created by tim.' },
                           timestamp: {},
                           fields: [
                               { name: 'Invite Join/Leave', value: invitej}, 
                               { name: 'Strike', value: strike },
                               { name: 'Welcome', value: welcomem },
                               { name: 'Messages', value: commands },
                               { name: 'Moderation', value: mod }
                           ],
                           timestamp: new Date(),
                           description: '[Support Server](https://discord.gg/socialhouse)',
                       }})
    }
    
    if(cmd.toLowerCase() === 'giveaway') {
        const botstats = message.client.commands.filter(x => x.category == 'BotStats').map((x) => `\`${prefix}` + x.name + '`').join(', ');
        const configuration = message.client.commands.filter(x => x.category == 'Configuration').map((x) => `\`${prefix}` + x.name + '`').join(', ');
                  return message.inlineReply({
                      embed: {
                          color: 0x000000,
                          author: { name: 'Giveaways | Solis', iconURL: message.guild.iconURL()},
                          footer: { text: 'Created by tim.' },
                          timestamp: {},
                          fields: [
                              { name: 'Configuration', value: configuration }, 
                              { name: 'Bot Stats', value: botstats }
                          ],
                          timestamp: new Date(),
                          description: '[Support Server](https://discord.gg/socialhouse)',
                      }})
    }

  else {
    const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

    if (!command) return
    message.inlineReply({
        embed: {
            color: 0x000000,
            author: { name: 'Help Panel', iconURL: message.guild.iconURL()},
            footer: { text: 'Created by tim.' },
            fields: [
                { name: 'Name', value: command.name, inline: true },
                { name: 'Category', value: command.category, inline: true },
                { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                { name: 'Usage', value: command.utilisation.replace('{prefix}', prefix), inline: true },
            ],
            timestamp: new Date(),
            description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
        }
    })}}};