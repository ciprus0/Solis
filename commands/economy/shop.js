const  Discord = require("discord.js")


module.exports = {
    name: 'shop',
    aliases: ['store', 's'],
    category: 'Action',
    utilisation: '{prefix}shop',
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

    //Add more roles here


if(args[0] == 'tools'){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Shop | Tools`, message.author.displayAvatarURL())
    .setDescription(`To buy a tool out of the shop, use ${prefix}buy \`item name\`\n**NOTE:** All tools are permanent.`)
    .addField(`**Store Items**`,  `🎣 **Fishing Rods** — Starting at <:nightbux:902400327410679849>[5,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Allows you to obtain fish\n\`${prefix}buy rod\`
\u200B
🔫 **Guns** — Starting at <:nightbux:902400327410679849>[50,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Allows you to obtain animals\n\`${prefix}buy gun\`
\u200B
<:shovel:853051667365101568> **Shovels** — Starting at <:nightbux:902400327410679849>[5,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Allows you to dig for items/money\n\`${prefix}buy shovel\`
\u200B
<:camera:853054353355046922> **Cameras** — Starting at <:nightbux:902400327410679849>[10,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Allows you to take pictures \n\`${prefix}buy camera\`
\u200B
<:flashlight:853054333133651978> **Flashlights** — Starting at <:nightbux:902400327410679849>[2,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Allows you to search for items/money \n\`${prefix}buy flashlight\`
\u200B
<:boltcutters:858580586183524362> **Bolt Cutters** — <:nightbux:902400327410679849>[2,000,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Allows you to cut users locks\n\`${prefix}buy cutters\``)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
message.inlineReply(embed)
return
    }
    else if (args[0] == 'items'){
        if(!args[1]){
           const embed = new Discord.MessageEmbed()
           .setAuthor(`Shop | Items`, message.author.displayAvatarURL())
           .setDescription(`To buy a item out of the shop, use ${prefix}buy \`item name\``)
           .addField(`**Store Items**`,`🔏 **Lock** — <:nightbux:902400327410679849>[20,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Locks your pocket from being robbed\n\`${prefix}buy lock\`
   \u200B
   <:squire:902400690712870914> **Squire Padlock** — <:nightbux:902400327410679849>[10,000,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Impenetrable lock for your pocket. Nobody can rob it now.\n\`${prefix}buy squirelock\`
   \u200B
   <:bankvault:863514649287065640> **Bank Vault** — <:nightbux:902400327410679849>[5,000,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Impenetrable vault for your bank. Nobody can rob it now.\n\`${prefix}buy vault\``)
           
         
           .setColor("#2c2f33")
           .setThumbnail(message.guild.iconURL())
           .setFooter(`Page 1 of 3. Say \`${prefix}shop items 2\` to view another page.`)
           message.inlineReply(embed)
           return
        } else if(args[1] == '2'){
            const embed = new Discord.MessageEmbed()
           .setAuthor(`Shop | Items`, message.author.displayAvatarURL())
           .setDescription(`To buy a item out of the shop, use ${prefix}buy \`item name\``)
           .addField(`**Store Items**`,`<:bodyguard:863677518695235584> **Bodyguard** — <:nightbux:902400327410679849>[500,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Your bodyguard will protect you from being robbed.\n\`${prefix}buy guard\`
           \u200B
           <:ninjasuit:851891822183186443> **NinjaSuits** — Starting at <:nightbux:902400327410679849>[300,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Allows you to solo rob user's banks\n\`${prefix}buy ninjasuit\`
           \u200B
           <:class_books:852014790696239104> **Class Books** — <:nightbux:902400327410679849>[15,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ Raises your chances of passing your classes\n**Tip:** Buy more books to raise your chances of passing! \n\`${prefix}buy book\``)
           
         
           .setColor("#2c2f33")
           .setThumbnail(message.guild.iconURL())
           .setFooter(`Page 2 of 3. Say \`${prefix}shop items 3\` to view another page.`)
           message.inlineReply(embed)
           return
            
        } else if(args[1] == '3'){
            const embed = new Discord.MessageEmbed()
           .setAuthor(`Shop | Items`, message.author.displayAvatarURL())
           .setDescription(`To buy a item out of the shop, use ${prefix}buy \`item name\``)
           .addField(`**Store Items**`,`<:bat:864027188902887455> **Baseball Bat** — <:nightbux:902400327410679849>[30,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ You can use this to attack or defend yourself.\n\`${prefix}buy bat\`
           \u200B
           <:knucks:864027204814635048> **Brass Knuckles** — Starting at <:nightbux:902400327410679849>[40,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ You can use this to attack or defend yourself.\n\`${prefix}buy knuckles\`
           \u200B
           <:machete2:864026606786707477> **Machete** — <:nightbux:902400327410679849>[50,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ You can use this to attack or defend yourself.\n\`${prefix}buy machete\``)
           
         
           .setColor("#2c2f33")
           .setThumbnail(message.guild.iconURL())
           .setFooter(`Page 3 of 3. Say \`${prefix}shop items\` to view another page.`)
           message.inlineReply(embed)
           return
        }
    } else if(args[0] == 'pets' || args[0] == 'pet' || args[0] == 'dog' || args[0] == 'dogs' || args[0] == 'husky'){
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Shop | Pets`, message.author.displayAvatarURL())
        .setDescription(`To buy a item out of the shop, use ${prefix}buy \`item name\``)
        .addField(`**Pets**`,`<:husky:863944870161809428> **Husky** — <:nightbux:902400327410679849>[200,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ A husky will watch your back, and make sure you aren\'t in danger.\n\`${prefix}buy husky\`
        \u200B
        \`More coming Soon\``)
        
      
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
        
        message.inlineReply(embed)
        return
    }
 else {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Shop | ${message.author.username}`, message.author.displayAvatarURL())
    .setDescription(`[Shop Commands](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)`)
    .addField(`<:IconDiscordStaff:816171838379917333> Tools`, `\`${prefix}shop tools\``, true)
    .addField(`<:treasurechest:902401365995839518> Items`, `\`${prefix}shop items\``, true)
    .addField(`🐕 Pets`, `\`${prefix}shop pets\``, true)
    .setColor("#2c2f33")
      
    message.inlineReply(embed)
    return
 }

    }
};




module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 2,
    cooldown: 2000,
    embedMessage: `**Shop** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}