const discord = require("discord.js")

module.exports = {
    name: 'messages',
    aliases: ['msgs', 'm'],
    category: 'Messages',
    utilisation: '{prefix}msgs <user>',
module: 'messages',
    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
    const member = message.mentions.members.first()|| message.guild.members.cache.get(args[0]) || message.member
    if(!member){return message.reply(`Please ping a user or supply their ID!`)}

    let user

try{
    await db.promise().query('SELECT * FROM messagecount WHERE user_id = ? AND guild_id = ?',[member.user.id, message.guild.id]).then(result => {
    user = result[0][0]
    console.log()
})
}catch (error){
    console.error(error)
    message.reply("This user isnt in the database, please ask them to run the command and try again")
    return
}

if(!user){
    db.query(`INSERT INTO messagecount (user_id,username) VALUES(?,?)`, [member.user.id, member.user.username]);
    return
}

    message.inlineReply(new discord.MessageEmbed()

    .setAuthor(`Message Stats | ${member.user.username}`, message.guild.iconURL())
    .setDescription(`**Total**: ${user.total_messages}\n**Weekly**: ${user.weekly_messages}\n**Daily**: ${user.daily_messages}\n**Hourly**: ${user.hourly_messages}`)
    .setColor("#2c2f33")
    )
}

};
module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 1,
    cooldown: 5000
}