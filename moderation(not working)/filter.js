/*const Discord = require("discord.js");
const config = require('../botconfig.json');
const Sequelize = require('sequelize')
const fs = require('fs')
const ms = require('ms')
const SourceBin = require('sourcebin-wrapper') 
module.exports = {
    name: 'filter',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}filter [add/remove] [exact/wild/autoban] [word] || {prefix}filter list [exact/wild/autoban]',

    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if(message.author.id !== '285528911545106432') return;
client.filters = require("../filters.json");

let allowedRoles;
if(config.Filter_Command_Roles.length > 0) allowedRoles = config.Filter_Command_Roles;
if(config.Filter_Command_Roles.length == 0) allowedRoles = config.staffRoles;

let helpEmbed = new Discord.MessageEmbed()
.setTitle(`Command: ${prefix}filter`)
.setColor("RANDOM")
.setDescription("Check the filter.")
.addField("Aliases", `\`none\``, true)
.addField("Allowed Roles", `${allowedRoles.map(rID => `<@&${rID}>`).join(` | `)}`, true)
.addField("Usage", `\`${prefix}filter [add/remove] [exact/wild/autoban] [word]\`\n\`${prefix}filter list [exact/wild/autoban]\``)
.addField("Example", `\`${prefix}filter add wild noob\`\n\`${prefix}filter list exact\``)

if(!args[0]) return message.reply(helpEmbed);
if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

let errorEmbed = new Discord.MessageEmbed()
.setColor("#6b0202")
.setDescription(`❌ Invalid Argument: \"${args[0]}\"\nMust specify list, add, or remove!`);

if(args[0] && args[0].toLowerCase() !== "list" && args[0].toLowerCase() !== "add" && args[0].toLowerCase() !== "remove") return message.reply(errorEmbed);

if(args[0] && args[0].toLowerCase() !== "list" && args[0].toLowerCase() !== "add" && args[0].toLowerCase() !== "remove") return message.reply(errorEmbed);

if(args[0].toLowerCase() == "list"){

    let error2Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Mention \"exact\" , \"wild\" or \`"autoban"\`!`);

    if(!args[1]) return message.reply(error2Embed);

    let error3Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Invalid Argument: \"${args[1]}\"\nMust mention exact, wild, or autoban!`);

    if(args[1].toLowerCase() !== "exact" && args[1].toLowerCase() !== "wild" && args[1].toLowerCase() !== "autoban") return message.reply(error3Embed);

    let listfilterEmbed = new Discord.MessageEmbed()
    .setTitle(`Filtered Words (${args[1].toLowerCase()})`)
    .setColor("#fc0a3b")
    .setDescription(client.filters[`${args[1].toLowerCase()}`].join(" | "));
    
    message.channel.send(listfilterEmbed);

}else if(args[0].toLowerCase() == "add"){

    let error4Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Mention exact, wild, or autoban!`);

    if(!args[1]) return message.reply(error4Embed);

    let error5Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Invalid Argument: \"${args[1]}\"\nMust mention exact, wild, or autoban!`);

    if(args[1].toLowerCase() !== "exact" && args[1].toLowerCase() !== "wild" && args[1].toLowerCase() !== "autoban") return message.reply(error5Embed);

    let filterthis = args.slice(2).join(" ");

    let error6Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Mention a word/phrase to add to the \"${args[1]}\" filter!`);

    if(!filterthis) return message.reply(error6Embed);

    if(args[1].toLowerCase() == "exact"){

        let error7Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ This word is already in the the \"exact\" filter!`);

        if(client.filters["exact"].some(f => filterthis.toLowerCase() == f.toLowerCase())) return message.reply(error7Embed);

        client.filters["exact"].push(filterthis.toLowerCase());
        fs.writeFile("./filters.json", JSON.stringify(client.filters, null, 2), (err) =>{
            if (err) console.log(err);
        });

        let successEmbed = new Discord.MessageEmbed()
        .setColor("#39fa53")
        .setDescription(`✅ Added \`${filterthis.toLowerCase()}\` to the exact filter.`);

        message.channel.send(successEmbed);

    }else if(args[1].toLowerCase() == "wild"){

        let error8Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ This wold is already in the \"wild\" filter!`);

        if(client.filters["wild"].some(f => filterthis.toLowerCase() == f.toLowerCase())) return message.reply(error8Embed);

        client.filters["wild"].push(filterthis.toLowerCase());
        fs.writeFile("./filters.json", JSON.stringify(client.filters, null, 2), (err) =>{
            if (err) console.log(err);
        });

        let successEmbed = new Discord.MessageEmbed()
        .setColor("#39fa53")
        .setDescription(`✅ Added \`${filterthis.toLowerCase()}\` to the wild filter.`);

        message.channel.send(successEmbed);

    }else if(args[1].toLowerCase() == "autoban"){

        let error8Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ This wold is already in the "autoban" filter!`);

        if(client.filters["autoban"].some(f => filterthis.toLowerCase() == f.toLowerCase())) return message.reply(error8Embed);

        client.filters["autoban"].push(filterthis.toLowerCase());
        fs.writeFile("./filters.json", JSON.stringify(client.filters, null, 2), (err) =>{
            if (err) console.log(err);
        });

        let successEmbed = new Discord.MessageEmbed()
        .setColor("#39fa53")
        .setDescription(`✅ Added \`${filterthis.toLowerCase()}\` to the autoban filter.`);

        message.channel.send(successEmbed);

    };

}else if(args[0].toLowerCase() == "remove"){

    let error9Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Mention exact, wild, or autoban!`);

    if(!args[1]) return message.reply(error9Embed);

    let error10Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Invalid Argument: \"${args[1]}\"\nMust mention exact, wild, or autoban!`);

    if(args[1].toLowerCase() !== "exact" && args[1].toLowerCase() !== "wild" && args[1].toLowerCase() !== "autoban") return message.reply(error10Embed);

    let filterthis = args.slice(2).join(" ");

    let error11Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Mention a word/phrase to add to the \"${args[1]}\" filter!`);

    if(!filterthis) return message.reply(error11Embed);

    if(args[1].toLowerCase() == "exact"){

        let error12Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ This word is not in the \"exact\" filter!`);

        if(!client.filters["exact"].some(f => filterthis.toLowerCase() == f.toLowerCase())) return message.reply(error12Embed);

        let wordposition = 0;

        for(let f in client.filters.exact){
            if(client.filters.exact[f].toLowerCase() == filterthis.toLowerCase()){
                break;
            }else{
                wordposition++;
            };
        };
    
        await client.filters.exact.splice(wordposition, 1);
        fs.writeFile("./filters.json", JSON.stringify(client.filters, null, 2), (err) =>{
            if (err) console.log(err);
        });

        let successEmbed = new Discord.MessageEmbed()
        .setColor("#39fa53")
        .setDescription(`✅ Removed \`${filterthis}\` from the exact filter.`);

        message.channel.send(successEmbed);

    }else if(args[1].toLowerCase() == "wild"){

        let error13Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ This word is not in the \"wild\" filter!`);

        if(!client.filters["wild"].some(f => filterthis.toLowerCase() == f.toLowerCase())) return message.reply(error13Embed);

        let wordposition = 0;

        for(let f in client.filters.wild){
            if(client.filters.wild[f].toLowerCase() == filterthis.toLowerCase()){
                break;
            }else{
                wordposition++;
            };
        };
    
        await client.filters.wild.splice(wordposition, 1);
        fs.writeFile("./filters.json", JSON.stringify(client.filters, null, 2), (err) =>{
            if (err) console.log(err);
        });
    
        let successEmbed = new Discord.MessageEmbed()
        .setColor("#39fa53")
        .setDescription(`✅ Removed \`${filterthis}\` from the wild filter.`);

        message.channel.send(successEmbed);

    }else if(args[1].toLowerCase() == "autoban"){

        let error13Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ This word is not in the \"autoban\" filter!`);

        if(!client.filters["autoban"].some(f => filterthis.toLowerCase() == f.toLowerCase())) return message.reply(error13Embed);

        let wordposition = 0;

        for(let f in client.filters.autoban){
            if(client.filters.autoban[f].toLowerCase() == filterthis.toLowerCase()){
                break;
            }else{
                wordposition++;
            };
        };
    
        await client.filters.autoban.splice(wordposition, 1);
        fs.writeFile("./filters.json", JSON.stringify(client.filters, null, 2), (err) =>{
            if (err) console.log(err);
        });
    
        let successEmbed = new Discord.MessageEmbed()
        .setColor("#39fa53")
        .setDescription(`✅ Removed \`${filterthis}\` from the autoban filter.`);

        message.channel.send(successEmbed);

    };
};

    }};*/