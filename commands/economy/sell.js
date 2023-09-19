const  Discord = require("discord.js");
const { user } = require("osenv");


module.exports = {
    name: 'sell',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}sell [item]',
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
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
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

        

    //Add more roles here
    let pocket = parseInt(user.pocket)

    let query
    if(args[0]){
    query = args[0].toLowerCase()
    }else{
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Sellable Tools | ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`To view animal and fish prices, use \`${prefix}sell fish\` || \`${prefix}sell animals\``)
        .addField('Items',`🎣 **Fishing Rod** — Starting at <:nightbux:902400327410679849>[2,500](https://discord.gg/bar)\n➔ \`${prefix}sell rod\`
\u200B
🔫 **Gun** — Starting at <:nightbux:902400327410679849>[25,000](https://discord.gg/bar)\n➔ \`${prefix}sell gun\`
\u200B
<:ninjasuit:851891822183186443> **NinjaSuit** — Starting at <:nightbux:902400327410679849>[150,00](https://discord.gg/bar)\n➔ \`${prefix}sell ninjasuit\`
\u200B
<:shovel:853051667365101568> **Shovels** — Starting at <:nightbux:902400327410679849>[2,500](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ \`${prefix}sell shovel\`
\u200B
<:camera:853054353355046922> **Cameras** — Starting at <:nightbux:902400327410679849>[5,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ \`${prefix}sell camera\`
\u200B
<:flashlight:853054333133651978> **Flashlights** — Starting at <:nightbux:902400327410679849>[1,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n➔ \`${prefix}sell flashlight\``)

       
        .setColor("#2c2f33")
        .setFooter('Page 1 of 3')
        .setThumbnail(message.guild.iconURL())
        message.inlineReply(embed)
        return
    }

if(query == 'blueorb' || query == 'orb'){
    if(!args[1]){
        if(user.blueorb >= 1) {
        finalPocket = (pocket + 10000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Blue Orb for <:nightbux:902400327410679849>\`10,000\``)
        )
        db.query('UPDATE user SET blueorb = blueorb - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else return message.inlineReply (`You do not own any Blue Orbs! I wonder how you can get some?`)
} else if (args[1] == 'all' || args[1] == 'max'){
    if(user.blueorb >= 1) {
        a = user.blueorb * 10000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${user.blueorb} Blueorb/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE user SET blueorb = blueorb - ${user.blueorb} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else return message.inlineReply (`You do not own any Blue Orbs! I wonder how you can get some?`)
} else if(parseInt(args[1])){
    if(user.blueorb >= parseInt(args[1])) {
        a = parseInt(args[1]) * 10000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[1])} Blue Orb/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE user SET blueorb = blueorb - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Blue Orbs! I wonder how you can get more?`)
} 
}


   
    if (query == 'animals'){
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Animal Prices | ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`To sell an item, use ${prefix}sell \`item name\``)
        .addField(`🐿️ Chipmunks | $3,000`,`➔ \`${prefix}sell chipmunk\``,true)
        .addField(`🦆 Ducks | $5,000`,`➔ \`${prefix}sell duck\``,true)
        .addField(`🦊 Foxes | $7,000`,`➔ \`${prefix}sell fox\``,true)
        .addField(`🦌 Deer | $10,000`,`➔ \`${prefix}sell deer\``,true)
        .addField(`🐻 Bears | $20,000`,`➔ \`${prefix}sell bear\``,true)

        
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
        message.inlineReply(embed)
        return
    }
    if (query == 'fish'){
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Fish Prices | ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`To sell an item, use ${prefix}sell \`item name\``)
        .addField(`🐟 Cod | $1,000`,`➔ \`${prefix}sell cod\``,true)
        .addField(`🐠 Tropical | $3,000`,`➔ \`${prefix}sell tropical\``,true)
        .addField(`🐡 Blowfish | $7,000`,`➔ \`${prefix}sell blowfish\``,true)

        
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
        message.inlineReply(embed)
        return
    }





    if (query == "cod"){
        if(!args[1]){
        if(fish.cod >= 1) {
        finalPocket = (pocket + 1000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Cod Fish for <:nightbux:902400327410679849>\`1,000\``)
        )
        db.query('UPDATE fish SET cod = cod - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else return message.inlineReply (`You do not own any Cod fish! Use \`${prefix}fish\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
    if(fish.cod >= 1) {
        a = fish.cod * 1000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${fish.cod} Cod for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE fish SET cod = cod - ${fish.cod} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else return message.inlineReply (`You do not own any Cod! Use \`${prefix}fish\` to obtain some!`)
} else if(parseInt(args[1])){
    if(fish.cod >= parseInt(args[1])) {
        a = parseInt(args[1]) * 1000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[1])} Cod for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE fish SET cod = cod - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that much cod! Use \`${prefix}fish\` to obtain some!`)
} 






    };
    if (query == "tropical" || query == 'tropical fish'){
        if(!args[1]){
        if(fish.tropical >= 1) {
        finalPocket = (pocket + 3000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Tropical Fish for <:nightbux:902400327410679849>\`3,000\``)
        )
        db.query('UPDATE fish SET tropical = tropical - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    }  else return message.inlineReply (`You do not own any Tropical fish! Use \`${prefix}fish\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
    if(fish.tropical >= 1) {
        a = fish.tropical * 3000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${fish.tropical} Tropical Fish for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE fish SET tropical = tropical - ${fish.tropical} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
} else return message.inlineReply (`You do not own any Tropical Fish! Use \`${prefix}fish\` to obtain some!`)
} else if(parseInt(args[1])){
    if(fish.tropical >= parseInt(args[1])) {
        a = parseInt(args[1]) * 3000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[1])} Tropical Fish for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE fish SET tropical = tropical - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Tropical Fish! Use \`${prefix}fish\` to obtain some!`)
} 
    };




    if (query == "blowfish"){
        if(!args[1]){
        if(fish.blowfish >= 1) {
        finalPocket = (pocket + 7000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Blowfish for <:nightbux:902400327410679849>\`7,000\``)
        )
        db.query('UPDATE fish SET blowfish = blowfish - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    }  else return message.inlineReply (`You do not own any Blowfish! Use \`${prefix}fish\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
    if(fish.blowfish >= 1) {
        a = fish.blowfish * 7000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${fish.blowfish} Blowfish for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE fish SET blowfish = blowfish - ${fish.blowfish} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
} else return message.inlineReply (`You do not own any Blowfish! Use \`${prefix}fish\` to obtain some!`)
} else if(parseInt(args[1])){
    if(fish.blowfish >= parseInt(args[1])) {
        a = parseInt(args[1]) * 7000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[1])} Blowfish for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE fish SET blowfish = blowfish - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Blowfish! Use \`${prefix}fish\` to obtain some!`)
} 

    };






    if (query == "chipmunk" || query == 'chipmunks'){
        if(!args[1]){
        if(hunt.chipmunk >= 1) {
        finalPocket = (pocket + 3000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Chipmunk for <:nightbux:902400327410679849>\`3,000\``)
        )
        db.query('UPDATE hunt SET chipmunk = chipmunk - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else return message.inlineReply (`You do not own any Chipmunks! Use \`${prefix}hunt\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
    if(hunt.chipmunk >= 1) {
        a = hunt.chipmunk * 3000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${hunt.chipmunk} Chipmunk/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE hunt SET chipmunk = chipmunk - ${hunt.chipmunk} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
} else return message.inlineReply (`You do not own any Chipmunks! Use \`${prefix}hunt\` to obtain some!`)
} else if(parseInt(args[1])){
    if(hunt.chipmunk >= parseInt(args[1])) {
        a = parseInt(args[1]) * 3000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[1])} Chipmunk/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE hunt SET chipmunk = chipmunk - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Chipmunks! Use \`${prefix}fish\` to obtain some!`)
} 
    };






    if (query == "duck"){
        if(!args[1]){
        if(hunt.duck >= 1) {
        finalPocket = (pocket + 5000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Duck for <:nightbux:902400327410679849>\`5,000\``)
        )
        db.query('UPDATE hunt SET duck = duck - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
        } else return message.inlineReply (`You do not own any Ducks! Use \`${prefix}hunt\` to obtain some!`)
    } else if (args[1] == 'all' || args[1] == 'max'){
        if(hunt.duck >= 1) {
            a = hunt.duck * 5000
            finalPocket = (pocket + a)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold ${hunt.duck} Duck/s for <:nightbux:902400327410679849>\`${a}\``)
            )
            db.query(`UPDATE hunt SET duck = duck - ${hunt.duck} WHERE user_id = ?`,[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
    } else return message.inlineReply (`You do not own any Ducks! Use \`${prefix}hunt\` to obtain some!`)
    } else if(parseInt(args[1])){
        if(hunt.duck >= parseInt(args[1])) {
            a = parseInt(args[1]) * 5000
            finalPocket = (pocket + a)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold ${parseInt(args[1])} Duck/s for <:nightbux:902400327410679849>\`${a}\``)
            )
            db.query(`UPDATE hunt SET duck = duck - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
        
    } else return message.inlineReply (`You do not own that many Ducks! Use \`${prefix}fish\` to obtain some!`)
    } 
    };




    if (query == "fox"){
        if(!args[1]){
        if(hunt.fox >= 1) {
        finalPocket = (pocket + 7000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Fox for <:nightbux:902400327410679849>\`7,000\``)
        )
        db.query('UPDATE hunt SET fox = fox - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else return message.inlineReply (`You do not own any Foxes! Use \`${prefix}hunt\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
    if(hunt.fox >= 1) {
        a = hunt.fox * 7000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${hunt.fox} Fox/es for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE hunt SET fox = fox - ${hunt.fox} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
} else return message.inlineReply (`You do not own any Foxes! Use \`${prefix}hunt\` to obtain some!`)
} else if(parseInt(args[1])){
    if(hunt.fox >= parseInt(args[1])) {
        a = parseInt(args[1]) * 7000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[1])} Fox/es for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE hunt SET fox = fox - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Foxes! Use \`${prefix}fish\` to obtain some!`)
} 
    };







    if (query == "deer"){
        if(!args[1]){
        if(hunt.deer >= 1) {
        finalPocket = (pocket + 10000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Deer for <:nightbux:902400327410679849>\`10,000\``)
        )
        db.query('UPDATE hunt SET deer = deer - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else return message.inlineReply (`You do not own any Deer! Use \`${prefix}hunt\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
    if(hunt.deer >= 1) {
        a = hunt.deer * 10000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${hunt.deer} Deer/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE hunt SET deer = deer - ${hunt.deer} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
} else return message.inlineReply (`You do not own any Deer! Use \`${prefix}hunt\` to obtain some!`)
} else if(parseInt(args[1])){
    if(hunt.deer >= parseInt(args[1])) {
        a = parseInt(args[1]) * 10000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[1])} Deer for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE hunt SET deer = deer - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Deer! Use \`${prefix}fish\` to obtain some!`)
} 
    };





    if (query == "bear"){
        if(!args[1]){
        if(hunt.bear >= 1) {
        finalPocket = (pocket + 20000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold a Bear for <:nightbux:902400327410679849>\`20,000\``)
        )
        db.query('UPDATE hunt SET bear = bear - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else return message.inlineReply (`You do not own any Bears! Use \`${prefix}hunt\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
    if(hunt.bear >= 1) {
        a = hunt.bear * 20000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${hunt.bear} Bear/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE hunt SET bear = bear - ${hunt.bear} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
} else return message.inlineReply (`You do not own any Bears! Use \`${prefix}hunt\` to obtain some!`)
} else if(parseInt(args[1])){
    if(hunt.bear >= parseInt(args[1])) {
        a = parseInt(args[1]) * 20000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[1])} Bear/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE hunt SET bear = bear - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Bears! Use \`${prefix}fish\` to obtain some!`)
} 
    };







    if (query == "rod" || query == 'legendary' || query == 'basic' || query == 'fishingrod' || query == 'pro'){
        if(user.fishing_rod == 1){
        finalPocket = (pocket + 2500)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold your fishing rod for <:nightbux:902400327410679849>\`2,500\``)
        )
        db.query('UPDATE user SET fishing_rod = fishing_rod - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else if(user.fishing_rod == 2){
        finalPocket = (pocket + 7500)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold your fishing rod for <:nightbux:902400327410679849>\`7,500\``)
        )
        db.query('UPDATE user SET fishing_rod = fishing_rod - 2 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else if(user.fishing_rod == 3){
        finalPocket = (pocket + 15000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold your fishing rod for <:nightbux:902400327410679849>\`15,000\``)
        )
        db.query('UPDATE user SET fishing_rod = fishing_rod - 3 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else 
    

    return message.inlineReply(`You do not own a fishing rod! Use \`${prefix}buy rod\` to obtain one!`)

} 



if(query == 'squirelock' || query == 'squire' || query == 'squirepadlock'){
    if(user.squirelocker = 1){
        finalPocket = (pocket + 5000000)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold a <:squire:902400690712870914> Squire Padlock for <:nightbux:902400327410679849>\`5,000,000\``)
            )
            db.query('UPDATE user SET squirelocker = 0 WHERE user_id = ?',[message.author.id])
            db.query('UPDATE user SET usesquirelocker = 0 WHERE user_id = ?',[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
    } else message.inlineReply(`You do not own a Squire Padlock. Use \`${prefix}buy squirelock\` to obtain one.`)
}




if (query == "lock" || query == 'padlock' || query == 'padlocks' || query == 'locks'){
    if(user.uselocker >= 1) return message.inlineReply('You currently have a padlock enabled! Please disable it using \`removelock\` before you sell it.')
    if(!args[1]){
    if(user.locker >= 1) {
    finalPocket = (pocket + 10000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold 🔏")
    .setDescription(`You have just sold a Padlock for <:nightbux:902400327410679849>\`10,000\``)
    )
    db.query('UPDATE user SET locker = locker - 1 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else return message.inlineReply (`You do not own any Padlocks! Use \`${prefix}buy padlock\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
if(user.locker >= 1) {
    a = user.locker * 10000
    finalPocket = (pocket + a)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold 🔏")
    .setDescription(`You have just sold ${user.locker} Padlock/s for <:nightbux:902400327410679849>\`${a}\``)
    )
    db.query(`UPDATE user SET locker = locker - ${user.locker} WHERE user_id = ?`,[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else return message.inlineReply (`You do not own any Padlocks! Use \`${prefix}buy padlock\` to obtain some!`)
} else if(parseInt(args[1])){
if(user.locker >= parseInt(args[1])) {
    a = parseInt(args[1]) * 10000
    finalPocket = (pocket + a)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold 🔏")
    .setDescription(`You have just sold ${parseInt(args[1])} Padlock/s for <:nightbux:902400327410679849>\`${a}\``)
    )
    db.query(`UPDATE user SET locker = locker - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return

} else return message.inlineReply (`You do not own that many Padlocks! Use \`${prefix}buy padlock\` to obtain some!`)
} 
};




if(query == 'bankvault' || query == 'vault' || query == 'bvault'){
    if(user.bankvault = 1){
        finalPocket = (pocket + 2500000)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold a <:bankvault:863514649287065640> Bank Vault for <:nightbux:902400327410679849>\`2,500,000\``)
            )
            db.query('UPDATE user SET bankvault = 0 WHERE user_id = ?',[message.author.id])
            db.query('UPDATE user SET usebankvault = 0 WHERE user_id = ?',[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
    } else message.inlineReply(`You do not own a Bank Vault. Use \`${prefix}buy vault\` to obtain one.`)
}

if(query == 'guard' || query == 'bodyguard' || query == 'bguard'){
    if(user.bodyguard = 1){
        finalPocket = (pocket + 250000)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold a <:bodyguard:863677518695235584> Bodyguard for <:nightbux:902400327410679849>\`250,000\``)
            )
            db.query('UPDATE user SET bodyguard = 0 WHERE user_id = ?',[message.author.id])
            db.query('UPDATE user SET usebodyguard = 0 WHERE user_id = ?',[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
    } else message.inlineReply(`You do not own a Bodyguard. Use \`${prefix}buy guard\` to obtain one.`)
}


if(query == 'husky'){
    if(user.husky = 1){
        finalPocket = (pocket + 100000)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold a <:husky:863944870161809428> Husky for <:nightbux:902400327410679849>\`200,000\``)
            )
            db.query('UPDATE user SET husky = 0 WHERE user_id = ?',[message.author.id])
            
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
    } else message.inlineReply(`You do not own a Husky. Use \`${prefix}buy husky\` to obtain one.`)
}




if (query == "machete" || query == 'knife'){
    
    if(!args[1]){
    if(user.machete >= 1) {
    finalPocket = (pocket + 25000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:machete2:864026606786707477>")
    .setDescription(`You have just sold a Machete for <:nightbux:902400327410679849>\`25,000\``)
    )
    db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else return message.inlineReply (`You do not own any Machetes! Use \`${prefix}buy machete\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
if(user.machete >= 1) {
    a = user.machete * 25000
    finalPocket = (pocket + a)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:machete2:864026606786707477>")
    .setDescription(`You have just sold ${user.machete} Machete/s for <:nightbux:902400327410679849>\`${a}\``)
    )
    db.query(`UPDATE user SET machete = machete - ${user.machete} WHERE user_id = ?`,[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else return message.inlineReply (`You do not own any Machetes! Use \`${prefix}buy machete\` to obtain some!`)
} else if(parseInt(args[1])){
if(user.machete >= parseInt(args[1])) {
    a = parseInt(args[1]) * 25000
    finalPocket = (pocket + a)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:machete2:864026606786707477>")
    .setDescription(`You have just sold ${parseInt(args[1])} Machete/s for <:nightbux:902400327410679849>\`${a}\``)
    )
    db.query(`UPDATE user SET machete = machete - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return

} else return message.inlineReply (`You do not own that many Machetes! Use \`${prefix}buy machete\` to obtain some!`)
} 
};



if (query == "knuckles" || query == 'brassknuckles' || query == 'brass'){
    
    if(!args[1]){
    if(user.brassknucks >= 1) {
    finalPocket = (pocket + 20000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:knucks:864027204814635048>")
    .setDescription(`You have just sold Brass Knuckles for <:nightbux:902400327410679849>\`20,000\``)
    )
    db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else return message.inlineReply (`You do not own any Brass Knuckles! Use \`${prefix}buy knuckles\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
if(user.brassknucks >= 1) {
    a = user.brassknucks * 20000
    finalPocket = (pocket + a)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:knucks:864027204814635048>")
    .setDescription(`You have just sold ${user.brassknucks} Brass Knuckle/s for <:nightbux:902400327410679849>\`${a}\``)
    )
    db.query(`UPDATE user SET brassknucks = brassknucks - ${user.brassknucks} WHERE user_id = ?`,[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else return message.inlineReply (`You do not own any Brass Knuckles! Use \`${prefix}buy knuckles\` to obtain some!`)
} else if(parseInt(args[1])){
if(user.brassknucks >= parseInt(args[1])) {
    a = parseInt(args[1]) * 20000
    finalPocket = (pocket + a)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:knucks:864027204814635048>")
    .setDescription(`You have just sold ${parseInt(args[1])} Machete/s for <:nightbux:902400327410679849>\`${a}\``)
    )
    db.query(`UPDATE user SET brassknucks = brassknucks - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return

} else return message.inlineReply (`You do not own that many Brass Knuckles! Use \`${prefix}buy knuckles\` to obtain some!`)
} 
};


if (query == "bat" || query == 'baseballbat' || query == 'baseball'){
    
    if(!args[1]){
    if(user.bat >= 1) {
    finalPocket = (pocket + 15000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:knucks:864027204814635048>")
    .setDescription(`You have just sold a Baseball Bat for <:nightbux:902400327410679849>\`15,000\``)
    )
    db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else return message.inlineReply (`You do not own any Baseball Bats! Use \`${prefix}buy knuckles\` to obtain some!`)
} else if (args[1] == 'all' || args[1] == 'max'){
if(user.bat >= 1) {
    a = user.bat * 15000
    finalPocket = (pocket + a)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:knucks:864027204814635048>")
    .setDescription(`You have just sold ${user.bat} Baseball Bat/s for <:nightbux:902400327410679849>\`${a}\``)
    )
    db.query(`UPDATE user SET bat = bat - ${user.bat} WHERE user_id = ?`,[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else return message.inlineReply (`You do not own any Baseball Bats! Use \`${prefix}buy bat\` to obtain some!`)
} else if(parseInt(args[1])){
if(user.bat >= parseInt(args[1])) {
    a = parseInt(args[1]) * 15000
    finalPocket = (pocket + a)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold <:knucks:864027204814635048>")
    .setDescription(`You have just sold ${parseInt(args[1])} Baseball Bat/s for <:nightbux:902400327410679849>\`${a}\``)
    )
    db.query(`UPDATE user SET bat = bat - ${parseInt(args[1])} WHERE user_id = ?`,[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return

} else return message.inlineReply (`You do not own that many Baseball Bats! Use \`${prefix}buy bat\` to obtain some!`)
} 
};




if(query == 'photo' || query == 'picture' || query == 'pic' || query == 'pics' || query == 'pictures' || query == 'photos'){
const totalpics = (parseInt(user.greatimage) + parseInt(user.goodimage) + parseInt(user.badimage))
     if (args[1] == 'all' || args[1] == 'max' || !args[1]){
    if(totalpics >= 1) {
        a1 = parseInt(user.greatimage * 5000)
        a2 = parseInt(user.goodimage * 2000)
        a3 = parseInt(user.badimage * 1000)
       let a = (a1 + a2 + a3)
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold <:picturea:862922256879190057> ${totalpics} Photo/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE user SET greatimage = 0 WHERE user_id = ?`,[message.author.id])
        db.query(`UPDATE user SET goodimage = 0 WHERE user_id = ?`,[message.author.id])
        db.query(`UPDATE user SET badimage = 0 WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
} else return message.inlineReply (`You haven\'t taken any photos! Use \`${prefix}takepic\` to obtain some!`)

}  else if(args[1] == 'great' || message.content.includes('great')){
    if(parseInt(args[2])){
    if(user.greatimage >= parseInt(args[2])) {
        a = parseInt(args[2]) * 5000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[2])} Great Photo/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE user SET greatimage = greatimage - ${parseInt(args[2])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Great Photos! Use \`${prefix}takephoto\` to obtain some!`)

    } else if(!args[2] || !parseInt(args[2])){
        if(user.greatimage >= 1){
            a = parseInt(user.greatimage) * 5000
            finalPocket = (pocket + a)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold ${user.greatimage} Great Photo/s for <:nightbux:902400327410679849>\`${a}\``)
            )
            db.query(`UPDATE user SET greatimage = 0 WHERE user_id = ?`,[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
        } else return message.inlineReply (`You haven\'t taken any great photos! Use \`${prefix}takepic\` to obtain some!`)
    }
}   else if(args[1] == 'good' || message.content.includes('good')){
    if(parseInt(args[2])){
    if(user.goodimage >= parseInt(args[2])) {
        a = parseInt(args[2]) * 2000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[2])} Good Photo/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE user SET goodimage = goodimage - ${parseInt(args[2])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Good Photos! Use \`${prefix}takephoto\` to obtain some!`)
    } else if(!args[2] || !parseInt(args[2])){
        if(user.goodimage >= 1){
            a = parseInt(user.goodimage) * 2000
            finalPocket = (pocket + a)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold ${user.goodimage} Good Photo/s for <:nightbux:902400327410679849>\`${a}\``)
            )
            db.query(`UPDATE user SET goodimage = 0 WHERE user_id = ?`,[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
        } else return message.inlineReply (`You haven\'t taken any good photos! Use \`${prefix}takepic\` to obtain some!`)
    }
} else if(args[1] == 'bad' || message.content.includes('bad')){
    if(parseInt(args[2])){
    if(user.badimage >= parseInt(args[2])) {
        a = parseInt(args[2]) * 1000
        finalPocket = (pocket + a)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold ${parseInt(args[2])} Bad Photo/s for <:nightbux:902400327410679849>\`${a}\``)
        )
        db.query(`UPDATE user SET badimage = badimage - ${parseInt(args[2])} WHERE user_id = ?`,[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    
} else return message.inlineReply (`You do not own that many Bad Photos! Use \`${prefix}takephoto\` to obtain some!`)
    } else if(!args[2] || !parseInt(args[2])){
        if(user.badimage >= 1){
            a = parseInt(user.badimage) * 1000
            finalPocket = (pocket + a)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold ${user.badimage} Bad Photo/s for <:nightbux:902400327410679849>\`${a}\``)
            )
            db.query(`UPDATE user SET badimage = 0 WHERE user_id = ?`,[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
        } else return message.inlineReply (`You haven\'t taken any bad photos! Use \`${prefix}takepic\` to obtain some!`)
    }
}
}


if (query == 'cutters' || query == 'boltcutters' || query == 'bolt'){
   
        if(!args[1]){
            if(user.boltcutters >= 1) {
            finalPocket = (pocket + 1000000)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold some <:boltcutters:858580586183524362> Bolt Cutters for <:nightbux:902400327410679849>\`1,000,000\``)
            )
            db.query('UPDATE user SET boltcutters = boltcutters - 1 WHERE user_id = ?',[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
        } else return message.inlineReply (`You do not own any Bolt Cutters! Use \`${prefix}buy cutters\` to obtain some!`)
    } else if (args[1] == 'all' || args[1] == 'max'){
        if(user.boltcutters >= 1) {
            a = user.boltcutters * 1000000
            finalPocket = (pocket + a)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Sold")
            .setDescription(`You have just sold <:boltcutters:858580586183524362> ${user.boltcutters} Bolt Cutter/s for <:nightbux:902400327410679849>\`${a}\``)
            )
            db.query(`UPDATE user SET boltcutters = boltcutters - ${user.boltcutters} WHERE user_id = ?`,[message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            return
    } else return message.inlineReply (`You do not own any Bolt Cutters! Use \`${prefix}buy cutters\` to obtain some!`)
    
    }
}


if (query == "camera" || query == 'nikon' || query == 'canon' || query == 'panasonic'){
    if(user.camera == 1){
    finalPocket = (pocket + 5000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Panasonic Camera for <:nightbux:902400327410679849>\`5,000\``)
    )
    db.query('UPDATE user SET camera = camera - 1 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else if(user.camera == 2){
    finalPocket = (pocket + 10000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Canon Camera for <:nightbux:902400327410679849>\`10,000\``)
    )
    db.query('UPDATE user SET camera = camera - 2 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else if(user.camera == 3){
    finalPocket = (pocket + 15000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Nikon Camera for <:nightbux:902400327410679849>\`15,000\``)
    )
    db.query('UPDATE user SET camera = camera - 3 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else 


return message.inlineReply(`You do not own a Camera! Use \`${prefix}buy camera\` to obtain one!`)

} 



if (query == "flashlight" || query == 'dull flashlight' || query == 'led flashlight' || query == 'headlamp flashlight'){
    if(user.flashlight == 1){
    finalPocket = (pocket + 1000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Dull Flashlight for <:nightbux:902400327410679849>\`1,000\``)
    )
    db.query('UPDATE user SET flashlight = flashlight - 1 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else if(user.flashlight == 2){
    finalPocket = (pocket + 2500)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Headlamp Flashlight for <:nightbux:902400327410679849>\`2,500\``)
    )
    db.query('UPDATE user SET flashlight = flashlight - 2 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else if(user.flashlight == 3){
    finalPocket = (pocket + 5000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your LED Flashlight for <:nightbux:902400327410679849>\`5,000\``)
    )
    db.query('UPDATE user SET flashlight = flashlight - 3 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else 


return message.inlineReply(`You do not own a Flashlight! Use \`${prefix}buy camera\` to obtain one!`)

} 





if (query == "shovel" || query == 'sharp' || query == 'beach'){
    if(user.shovel == 1){
    finalPocket = (pocket + 2500)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Beach Shovel for <:nightbux:902400327410679849>\`2,500\``)
    )
    db.query('UPDATE user SET shovel = shovel - 1 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else if(user.shovel == 2){
    finalPocket = (pocket + 5000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Dull Shovel for <:nightbux:902400327410679849>\`5,000\``)
    )
    db.query('UPDATE user SET shovel = shovel - 2 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else if(user.shovel == 3){
    finalPocket = (pocket + 10000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Sharp Shovel for <:nightbux:902400327410679849>\`10,000\``)
    )
    db.query('UPDATE user SET shovel = shovel - 3 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else 


return message.inlineReply(`You do not own a Shovel! Use \`${prefix}buy shovel\` to obtain one!`)

} 




if (query == "ninjasuit" || query == 'suit' || query == 'ninja'){
    if(user.ninjasuit == 1){
    finalPocket = (pocket + 150000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Ninja Suit for <:nightbux:902400327410679849>\`150,000\``)
    )
    db.query('UPDATE user SET ninjasuit = ninjasuit - 1 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else if(user.ninjasuit == 2){
    finalPocket = (pocket + 250000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Ninja Suit for <:nightbux:902400327410679849>\`250,000\``)
    )
    db.query('UPDATE user SET ninjasuit = ninjasuit - 2 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else if(user.ninjasuit == 3){
    finalPocket = (pocket + 500000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Sold")
    .setDescription(`You have just sold your Ninja Suit for <:nightbux:902400327410679849>\`500,000\``)
    )
    db.query('UPDATE user SET ninjasuit = ninjasuit - 3 WHERE user_id = ?',[message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    return
} else 


return message.inlineReply(`You do not own a NinjaSuit! Use \`${prefix}buy ninjasuit\` to obtain one!`)

} 








  if (query == "gun" || query == 'sniper' || query == 'shotgun' || query == 'pistol'){
        if(user.gun == 1){
        finalPocket = (pocket + 25000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold your Pistol for <:nightbux:902400327410679849>\`25,000\``)
        )
        db.query('UPDATE user SET gun = gun - 1 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else if(user.gun == 2){
        finalPocket = (pocket + 50000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold your Shotgun for <:nightbux:902400327410679849>\`50,000\``)
        )
        db.query('UPDATE user SET gun = gun - 2 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else if(user.gun == 3){
        finalPocket = (pocket + 100000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Sold")
        .setDescription(`You have just sold your Sniper for <:nightbux:902400327410679849>\`100,000\``)
        )
        db.query('UPDATE user SET gun = gun - 3 WHERE user_id = ?',[message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        return
    } else 
    
    
    return message.inlineReply(`You do not own a gun! Use \`${prefix}buy gun\` to obtain one!`)

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
    embedMessage: `**Sell** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}