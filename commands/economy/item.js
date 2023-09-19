const Discord = require("discord.js")
const functions = require("../../structures/functions")
module.exports = {
    name: 'iteminfo',
    aliases: ['ii', 'item', 'it'],
    category: 'User',
    utilisation: '{prefix}iteminfo [item name]',
    module: 'economy',
    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)

        let ara;

        if(args[0] == 'bear'){
            ara = 'bear'
        } else if(args[0] == 'blowfish' || args[0] == 'blow' || message.content.includes('blow fish')){
            ara = 'blowfish'
        } else if(args[0] == 'blueorb' || args[0] == 'blue' || message.content.includes('blue orb') || message.content.includes('orb')){
            ara = 'blueorb'
        } else if(args[0] == 'books' || args[0] == 'classbooks' || args[0] == 'book' || args[0] == 'classbooks' || message.content.includes('book')){
            ara = 'books'
        } else if(args[0] == 'camera' || message.content.includes('camera')){
            ara = 'camera'
        } else if(args[0] == 'chipmunk' || message.content.includes('chipmunk')){
            ara = 'chipmunk'
        } else if(args[0] == 'cod' || message.content.includes('cod')){
            ara = 'cod'
        } else if(args[0] == 'cutters' || args[0] == 'boltcutters' || args[0] == 'bolt' || message.content.includes('bolt') || message.content.includes('cutter')){
            ara = 'cutters'
        } else if(args[0] == 'deer' || message.content.includes('deer')){
            ara = 'deer'
        } else if(args[0] == 'duck' || message.content.includes('duck')){
            ara = 'duck'
        } else if(args[0] == 'flashlight' || args[0] == 'flash' || message.content.includes('flash') || message.content.includes('light')){
            ara = 'flashlight'
        } else if(args[0] == 'fox' || message.content.includes('fox')){
            ara = 'fox'
        } else if(args[0] == 'golfclub' || args[0] == 'golf' || message.content.includes('golf') || message.content.includes('club')){
            ara = 'golfclub'
        } else if(args[0] == 'gun' || message.content.includes('gun')){
            ara = 'gun'
        } else if(args[0] == 'ninjasuit' || message.content.includes('ninja') || message.content.includes('suit')){
            ara = 'ninjasuit'
        } else if(args[0] == 'padlock' || args[0] == 'lock'){
            ara = 'padlock'
        } else if(args[0] == 'photos' || args[0] == 'pictures' || message.content.includes('pic') || message.content.includes('photo')){
            ara = 'photos'
        } else if(args[0] == 'plotarmor' || message.content.includes('armor')){
            ara = 'plotarmor'
        } else if(args[0] == 'rock' || args[0] == 'rocks'){
            ara = 'rock'
        } else if(args[0] == 'rod' || message.content.includes('rod')){
            ara = 'rod'
        } else if(args[0] == 'shovel' || message.content.includes('shovel')){
            ara = 'shovel'
        } else if(args[0] == 'squirelock' || message.content.includes('squire')){
            ara = 'squirelock'
        } else if(args[0] == 'tropical' || message.content.includes('tropical')){
            ara = 'tropical'
        } else if(args[0] == 'husky' || message.content.includes('husky')){
            ara = 'husky'
        } else if(args[0] == 'knuckles' || message.content.includes('knuckles') || message.content.includes('brass')){
ara = 'knuckles'
        } else if(args[0] == 'bat' || message.content.includes('baseball') || message.content.includes("bat")){
            ara = 'bat'
        } else if(args[0] == 'machete' || message.content.includes("machete") || message.content.includes('knife')){
            ara = 'machete'
        }


        let item

        try {
            await db.promise().query('SELECT * FROM items WHERE items = ?', [ara]).then(result => {
                item = result[0][0]
        
            })
        } catch (error) {
            console.error(error)
            message.inlineReply("Please provide an actual item!")
            
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
            return
        }
        if(item == null || !item) return message.inlineReply('Please provide an actual item!')
const embed = new Discord.MessageEmbed()
.setAuthor('Item Info', message.author.displayAvatarURL())
.setTitle(`${item.itemname}`)
.setDescription(`${item.description}`)
.setThumbnail(`${item.logo}`)
.addField('Prices', 
`**BUY**: ${item.buyprice}
**SELL**: ${item.sellprice}`)
.addField('Available In', 
`\`${item.toget}\``)
.addField('Item Type',
`${item.type}`)
       message.inlineReply(embed)




    }}


    module.exports.requirements = {
        userPerms: [],
        clientPerms: [],
        ownerOnly: false
    }
    
    module.exports.limits = {
        rateLimit: 1,
        cooldown: 2000,
        embedMessage: `**Item** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
    }