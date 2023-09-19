const discord = require("discord.js")
const Discord = require('discord.js');
const { watchFile } = require("fs");
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'degreeprogress',
    aliases: ['progress'],
    category: 'User',
    utilisation: '{prefix}degreeprogress',
    module: 'economy',
    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let user

        try {
            await db.promise().query('SELECT * FROM user WHERE user_id = ?', [message.author.id]).then(result => {
                user = result[0][0]
            
            })
        } catch (error) {
            console.error(error)
            message.inlineReply("Sorry, you were not in the database, please send the command again!")
            
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
            return
        }

        if(user.learningdegree == 'N/A') {
            return message.inlineReply(`You don\'t even have a degree, use \`${prefix}degree\` to pick one!`)
    } 
    
    if(user.learningdegree == 'computerscience'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Computer Science!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }
    if(user.learningdegree == 'business'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Business!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }
    if(user.learningdegree == 'administrativestudies'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Administrative Studies!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }

    if(user.learningdegree == 'engineering'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Engineering!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }
    if(user.learningdegree == 'mediamarketing'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Media Marketing!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }

    if(user.learningdegree == 'architecture'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Architecture!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }

    if(user.learningdegree == 'technology'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Technology!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }


    if(user.learningdegree == 'accountancy'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Accountancy!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }


    if(user.learningdegree == 'sales'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Sales!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }

    if(user.learningdegree == 'retail'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Retail!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }


    if(user.learningdegree == 'education'){
        const loveIndex = Math.floor(user.degreeprogress);
const loveLevel = '<:class_books:852014790696239104>'.repeat(loveIndex) + '<:progressbox:852046913678344192>'.repeat(30 - loveIndex);

const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Here is your progress for the degree of Education!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    message.inlineReply(embed)
    }


}};