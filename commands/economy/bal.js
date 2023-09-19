module.exports = {
    name: 'balance',
    aliases: ['bal', 'b', 'wallet', 'bank'],
    category: 'User',
    utilisation: '{prefix}bal [user]',
    module: 'economy',
    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
    let member; 
    
    if(!args[0]){
        member = message.member
    } else {
        member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    }
if(!member){return message.inlineReply(`Please ping a user or supply their ID! Also make sure this user is in the server.`)}

    let user

    try {
        await db.promise().query('SELECT * FROM user WHERE user_id = ?', [member.user.id]).then(result => {
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


    const embed = new dsc.MessageEmbed()
        .setAuthor(`Balance | ${member.user.tag}`,member.user.displayAvatarURL())
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
        .addField("<:wallet:902400881029431348> Wallet", `<:nightbux:902400327410679849>\`${user.pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${user.bank}\``,true)
        message.inlineReply(embed)

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
    embedMessage: `**Balance** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}