/*const discord = require("discord.js")
const {createCanvas, loadImage} = require("canvas")
const { join } = require("path")
module.exports = {
    name: "rank",
    aliases:['level'],
    description: "view user rank",
    utilisation: `{prefix}rank`,
    category: "Messages",
    module: 'messages',
    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
const member = message.mentions.members.first()|| message.guild.members.cache.get(args[0]) || message.member

let data;
        try{
            db.promise().query("SELECT * FROM user WHERE user_id = ?",[member.id]).then(result => {
                data = result[0][0]
            })  
        }catch (error){
            console.log(error)
        }

        if(!data) return message.reply("This member does not have a rank!")

        data1 = (data.pocket + data.bank)

        const canvas = createCanvas(1000, 333)
        const ctx = canvas.getContext("2d")
        const background = await loadImage(join(__dirname, "../..", "img", "background.jpg"))
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

        ctx.beginPath()
        ctx.lineWidth = 4
        ctx.strokeStyle = "#ffffff"
        ctx.globalAlpha = 0.2
        ctx.fillStyle = "#000000"
        ctx.fillRect(180,216,770,65)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.strokeRect(180,216,770,65)
        ctx.stroke()

        ctx.fillStyle = "#e67e22"
        ctx.globalAlpha = 0.6
        ctx.fillRect(180,216, ((100 / (data1 * 117)) *data.xp) *7.7,65)
        ctx.fill()
        ctx.globalAlpha = 1

        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${data.xp} / ${data.level *117} XP`,600,260)

        ctx.textAlign = "left"
        ctx.fillText(member.user.tag,300,120)

        ctx.font = "50px Arial"
        ctx.fillText("Level:",300,180)
        ctx.fillText(data.level,470,180)

        ctx.arc(170,160,120,0, Math.PI * 2, true)
        ctx.lineWidth = 6
        ctx.strokeStyle = "#ffffff"
        ctx.stroke()
        ctx.closePath()
        ctx.clip()

        const avatar = await loadImage(member.user.displayAvatarURL({format: "jpg"}))
        ctx.drawImage(avatar, 40, 40, 250, 250)

        const attachment = new discord.MessageAttachment(canvas.toBuffer(), "rank.png")
        message.channel.send(attachment)

    
}};


module.exports.requirements = {
    userPerms: [],
    clientPerms: ["ATTACH_FILES"],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 1,
    cooldown: 1000
}*/