const discord = require("discord.js")
module.exports = {
    name: 'work',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}work',
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
            message.inlineReply("This user isnt in the database, please ask them to run the command and try again")
            const prefix = '$'
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
            return
        }

    if(user.currentjob == 'N/A') return message.inlineReply(`You don\'t even have a job yet! Use \`${prefix}job\` to pick one!`)
    
        const number = Math.floor(Math.random() * 7)

    if(number == 2){
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You had an accident!`)
        .setDescription(`Oh no! While working as a \`${user.currentjob}\`, you suffered an injury! Unfortunately you had to use the money you got to pay for your injuries!`)
        
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    
     return message.inlineReply(embed1)
    } else 
        if(user.currentdegree == 'computerscience'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 10000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'business'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 9000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'administrativestudies'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 8000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'engineering'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 7000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'mediamarketing'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 6000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'architecture'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 5000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'technology'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 4000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'accountancy'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 3000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'sales'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 2000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'retail'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 1000) + 500;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else 
        if(user.currentdegree == 'education'){
            
    let workedFor = parseInt(user.pocket)
        const Money = Math.floor(Math.random() * 500) + 100;
        let balBefore = workedFor
        workedFor += Money
        if(!balBefore){balBefore = 0}
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have been to work!`)
        .setDescription(`You got paid for being a \`${user.currentjob}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Paid",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    
    
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)

        } else if (user.currentdegree == 'N/A'){
            message.inlineReply('You don\'t even have a degree! Go get a degree and pick a job!')
        }
 
    
    }};


    module.exports.requirements = {
        userPerms: [],
        clientPerms: [],
        ownerOnly: false
    }
    
    module.exports.limits = {
        rateLimit: 1,
        cooldown: 600000,
        embedMessage: `**Work** is currently on cooldown of **15 minutes**, please wait till the **15 minutes** is over`
    }