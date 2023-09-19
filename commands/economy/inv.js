const discord = require("discord.js")

module.exports = {
    name: 'inventory',
    aliases: ['inv', 'i'],
    category: 'User',
    utilisation: '{prefix}inv <user>',
    module: 'economy',
    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(args[1]) || message.guild.members.cache.get(args[2]) || message.member

    if (!member) { return message.reply(`Please ping a user or supply their ID!`) }

  
        let user

        try {
            await db.promise().query('SELECT * FROM user WHERE user_id = ?', [member.id]).then(result => {
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

    let fish
    try {
        await db.promise().query('SELECT * FROM fish WHERE user_id = ?', [member.user.id]).then(result => {
            fish = result[0][0]
         
        })
    } catch (error) {
        console.error(error)
        message.reply("This user isnt in the database, please ask them to run the command and try again")
        return
    }

    if (!fish) {
        db.query(`INSERT INTO fish (user_id) VALUES(?)`, [member.user.id]);
        return
    }

    let hunt
    try {
        await db.promise().query('SELECT * FROM hunt WHERE user_id = ?', [member.user.id]).then(result => {
            hunt = result[0][0]
           
        })
    } catch (error) {
        console.error(error)
        message.reply("This user isnt in the database, please ask them to run the command and try again")
        return
    }

    if (!hunt) {
        db.query(`INSERT INTO hunt (user_id) VALUES(?)`, [member.user.id]);
        return
    }
    let lock
    if (user.uselocker == 1) {
        lock = "Enabled"
    } else {
        lock = "Disabled"
    }

    let lock1
    if (user.usesquirelocker == 1) {
        lock1 = "Enabled"
    } else {
        lock1 = "Disabled"
    }

    let bodya1
    if (user.usebankvault == 1) {
        bodya1 = "Enabled"
    } else {
        bodya1 = "Disabled"
    }

    let bodya
    if (user.usebodyguard == 1) {
        bodya = "Enabled"
    } else {
        bodya = "Disabled"
    }
    const page = parseInt(args[0])
    


    let fishing_rod = new Map()
    fishing_rod.set('0',"None")
    fishing_rod.set('1',"Basic")    
    fishing_rod.set('2',"Pro")
    fishing_rod.set('3',"Legendary")
   
    let total_fish = fish.cod + fish.tropical + fish.blowfish


    let ninjasuit = new Map()
    ninjasuit.set('0',"None")
    ninjasuit.set('1',"Level 1")    
ninjasuit.set('2',"Level 2")
ninjasuit.set('3',"Level 3")
  

    let shovel = new Map()
    shovel.set('0',"None")
    shovel.set('1',"Beach")    
    shovel.set('2',"Dull")
shovel.set('3',"Sharp")
 

    let camera = new Map()
    camera.set('0',"None")
    camera.set('1',"Panasonic")    
    camera.set('2',"Canon")
    camera.set('3',"Nikon")
   

    let flashlight = new Map()
    flashlight.set('0',"None")
    flashlight.set('1',"Dull")    
    flashlight.set('2',"Headlamp")
    flashlight.set('3',"LED")
 




    let gun = new Map()
    gun.set('0',"None")
    gun.set('1',"Pistol")    
    gun.set('2',"Shotgun")
    gun.set('3',"Sniper")
    
    let total_animals = hunt.bear + hunt.deer + hunt.fox + hunt.chipmunk + hunt.duck

    if (args[0] == "fish") {
        return message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Fish Inventory | ${member.user.username}`, message.guild.iconURL())
            .addField('Current Fish',
            `🐟 **Cod Fish** — ${fish.cod}\n*ID* \`cod\` — Sellable
\u200B
🐠 **Tropical Fish** — ${fish.tropical}\n*ID* \`tropical\` — Sellable
\u200B
🐡 **Blowfish** — ${fish.blowfish}\n*ID* \`blowfish\` — Sellable`)
            .setColor("#2c2f33")
        )
    }
    else if (args[0] == "animals") {
        return message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Animals Inventory | ${member.user.username}`, message.guild.iconURL())
            .addField('Current Animals',
        `🐿️ **Chipmunks** — ${hunt.chipmunk}\n*ID* \`chipmunk\` — Sellable
\u200B
🦆 **Ducks** — ${hunt.duck}\n*ID* \`duck\` — Sellable
\u200B
🦊 **Foxes** — ${hunt.fox}\n*ID* \`fox\` — Sellable
\u200B
🦌 **Deer** — ${hunt.deer}\n*ID* \`deer\` — Sellable
\u200B
🐻 **Bears** — ${hunt.bear}\n*ID* \`bear\` — Sellable`)
            .setColor("#2c2f33")
        )
    }  else if (args[0] == 'tools') {
        message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Inventory | ${member.user.username}`, message.guild.iconURL())
            
            .addField('Tools Inventory', 
            `🎣 **Fishing Rod** — ${fishing_rod.get(user.fishing_rod)}\n*ID* \`rod\` — \`${prefix}fish\`
\u200B
🔫 **Gun** — ${gun.get(user.gun)}\n*ID* \`gun\` — \`${prefix}hunt\`
\u200B
<:shovel:957454727409467402> **Shovel** — ${shovel.get(user.shovel)}\n*ID* \`shovel\` — \`${prefix}dig\`
\u200B
<:camera:853054353355046922> **Camera** — ${camera.get(user.camera)}\n*ID* \`camera\` — \`${prefix}takephoto\`
\u200B
<:ninjasuit:957454544881729546> **NinjaSuit** — ${ninjasuit.get(user.ninjasuit)}\n*ID* \`ninjasuit\` — \`${prefix}bankrob\`
\u200B
<:flashlight:853054333133651978> **Flashlight** — ${flashlight.get(user.flashlight)}\n*ID* \`flashlight\` — \`${prefix}search\`
\u200B
<:boltcutters:858580586183524362> **Bolt Cutters** — ${user.boltcutters}\n*ID* \`cutters\` — \`${prefix}cutlock\``)
            .setColor("#2c2f33")
        )

    } else if (args[0] == 'items' || args[0] == 'item'){
        const pics = (parseInt(user.greatimage) + parseInt(user.goodimage) + parseInt(user.badimage))
        if(args[1] == '1' || Number.isNaN(args[1]) || !args[1] || args[1] == '1' && member || args[1] == member){ 
            
        message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Inventory | ${member.user.username}`, message.guild.iconURL())
            
            .addField('Items Inventory', 
            `🔏 **Lock** — ${lock} | ${user.locker}\n*ID* \`padlock\` — Usable
\u200B
<:squire:902400690712870914> **Squire Lock** — ${lock1} | ${user.squirelocker}\n*ID* \`squirelock\` — Usable
\u200B
<:bodyguard:863677518695235584> **Bodyguard** — ${bodya} | ${user.bodyguard}\n*ID* \`bodyguard\` — Usable
\u200B
<:class_books:852014790696239104> **Class Books** — ${user.books}\n*ID* \`books\` — Luck Enhancer
\u200B
<:bankvault:863514649287065640> **Bank Vault** — ${bodya1} | ${user.bankvault}\n*ID* \`vault\` — Usable`)
            .setColor("#2c2f33")
            .setFooter(`Page 1 of 3. View more items with Page Numbers. Ex: ${prefix}inv items 2`)
        )
        } else if(args[1] == '2'){
            message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Inventory | ${member.user.username}`, message.guild.iconURL())
            .setFooter(`Page 2 of 3. View more items with page numbers. Ex: ${prefix}inv items 3`)
            .addField('Items Inventory',
            `<:blueorb:858555160036900874> **Blue Orbs** — ${user.blueorb}\n*ID* \`orb\` — Sellable
\u200B
<:picturea:957453014904488016> **Total Photos** — ${pics}\n*ID* \`photos\` — Sellable
\u200B
<:plotarmor:858557409820016681> **Plot Armor** — Does nothing currently\n\`${user.plotarmor}\`
\u200B
<:rock:858566310689374218> **Rocks** — Does nothing currently\n\`${user.rock}\``)
            )
        } else if(args[1] == '3'){
            message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Inventory | ${member.user.username}`, message.guild.iconURL())
            .setFooter(`Page 3 of 3. View more items with page numbers. Ex: ${prefix}inv items 2`)
            .addField('Items Inventory',
            `<:golfclub:858558593846870026> **Golf Clubs** — ${user.golfclub}\n*ID* \`club\` — Protection
\u200B
<:bat:864027188902887455> **Baseball Bats** — ${user.bat}\n*ID* \`bat\` — Protection
\u200B
<:knucks:864027204814635048> **Brass Knuckles** — ${user.brassknucks}\n*ID* \`knuckles\` — Protection
\u200B
<:machete2:864026606786707477> **Machetes** — ${user.machete}\n*ID* \`machete\` — Protection`)
            )
        } 
    } else if (args[0] == 'pictures' || args[0] == 'pics' || args[0] == 'photos' || args[0] == 'pic' || args[0] == 'photo' || args[0] == 'images'){
        const pics = (parseInt(user.greatimage) + parseInt(user.goodimage) + parseInt(user.badimage))
        message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Inventory | ${member.user.username}`, message.guild.iconURL())
            
            .addField('Photos Inventory', 
            `<:picturea:957453014904488016> **Total Photos** — ${pics}
\u200B
<a:floushed:747271176350335027> **Great Photos** — ${user.greatimage}\n*ID* \`pics great\` — Sellable
\u200B
<:Thumbsup:862923505476698132> **Good Photos** — ${user.goodimage}\n*ID* \`pics good\` — Sellable
\u200B
<:Thumbsdown:862923510007463936> **Bad Photos** — ${user.badimage}\n*ID* \`pics bad\` — Sellable`)
            .setColor("#2c2f33")
            
        )
} else if (args[0] == 'pets' || args[0] == 'pet' || args[0] == 'dog' || args[0] == 'dogs'){
    const pics = (parseInt(user.greatimage) + parseInt(user.goodimage) + parseInt(user.badimage))
    message.inlineReply(new discord.MessageEmbed()
        .setAuthor(`Inventory | ${member.user.username}`, message.guild.iconURL())
        
        .addField('Pets Inventory', 
        `<:husky:863944870161809428> **Husky** — ${user.husky}\n*ID* \`husky\` — Protection
\u200B
\`More coming Soon\``)
        .setColor("#2c2f33")
        
    )
} else {
            message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Inventory | ${member.user.username}`, message.guild.iconURL())
            .setDescription(`[Inventory Commands](https://discord.gg/bar)`)
            .addField(`<:AX_newcrown:902025277536886796> Tools `, `\`${prefix}inv tools\``, true)
            .addField(`<:treasurechest:902401365995839518> Items`, `\`${prefix}inv items\``, true)
            .addField(`🦈 Fish`, `\`${prefix}inv fish\``, true)
            .addField(`🐄 Animals`, `\`${prefix}inv animals\``, true)
            .addField(`🐕 Pets`, `\`${prefix}inv pets\``, true)
            .addField(`<:picturea:957453014904488016> Photos`, `\`${prefix}inv photos\``, true)
            .setColor("#2c2f33")
      
        )
        
    }
}

};

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 1,
    cooldown: 2000,
    embedMessage: `**Inventory** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}