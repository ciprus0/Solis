const discord = require("discord.js")
const functions = require("../../structures/functions")
const { createCanvas, loadImage } = require("canvas")
const { join } = require("path")
module.exports = {
    name: "wmleaderboard",
    aliases:['wmlb'],
    description: "view the weekly message leaderboard",
    utilisation: `{prefix}wmlb`,
    category: "Messages",
    module: 'messages',
    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
    let data
    try {
        await db.promise().query('SELECT * FROM messagecount WHERE guild_id = ? ORDER BY weekly_messages DESC', [message.guild.id]).then(result => {
            data = result[0]
        })
    } catch (error) {
        console.log(error)
    }
    if (!data.length) return message.reply("There is no leaderboard yet!")
    const page = functions.pages(data, 8, args[0] || 1)
    if (!page) return message.reply("This page does not exist")

    const images = ['nightbuxbg.jpg', 'nightbuxbg2.jpg', 'nightbuxbg3.jpg', 'nightbuxbg4.jpg', 'nightbuxbg5.jpg', 'nightbuxbg6.jpg', 'nightbuxbg7.jpg', 'nightbuxbg8.jpg', 'nightbuxbg9.jpg', 'nightbuxbg10.png', 'nightbuxbg11.png', 'nightbuxbg12.jpg', 'nightbuxbg13.jpg', 'nightbuxbg14.png', 'nightbuxbg15.jpg', 'nightbuxbg16.jpg', 'nightbuxbg17.jpg', 'nightbuxbg18.jpg', 'nightbuxbg19.png', 'nightbuxbg20.jpg', 'nightbuxbg21.jpg', 'nightbuxbg22.png', 'nightbuxbg23.png', 'nightbuxbg24.jpg', 'nightbuxbg25.png', 'nightbuxbg26.jpg', 'nightbuxbg27.png', 'nightbuxbg28.jpg', 'nightbuxbg29.png', 'nightbuxbg30.jpg', 'nightbuxbg31.jpg',]
    const random = Math.floor(Math.random() * images.length)

    const canvas = createCanvas(1000, 525)
    const ctx = canvas.getContext("2d")
    const background = await loadImage(join(__dirname, "..", "..", "img", images[random]))
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(115, 10, 780, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(115, 10, 780, 70)
    ctx.stroke()

    ctx.font = "bold 40px Arial"
    ctx.textAlign = "center"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Weekly Message Leaderboard`, 520, 60)

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(80, 120, 400, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(80, 120, 400, 70)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(80, 220, 400, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(80, 220, 400, 70)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(80, 320, 400, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(80, 320, 400, 70)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(80, 420, 400, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(80, 420, 400, 70)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(525, 120, 400, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(525, 120, 400, 70)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(525, 220, 400, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(525, 220, 400, 70)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(525, 320, 400, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(525, 320, 400, 70)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "#000000"
    ctx.fillRect(525, 420, 400, 70)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeRect(525, 420, 400, 70)
    ctx.stroke()



    //1
    ctx.font = "bold 23px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[0].weekly_messages}`, 450, 170)

    ctx.font = "bold 23px Arial"
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[0].username}`, 100, 170)

    //2
    ctx.font = "bold 23px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[1].weekly_messages}`, 450, 270)

    ctx.font = "bold 23px Arial"
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[1].username}`, 100, 270)

    //3
    ctx.font = "bold 23px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[2].weekly_messages}`, 450, 370)

    ctx.font = "bold 23px Arial"
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[2].username}`, 100, 370)

    //4
    ctx.font = "bold 23px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[3].weekly_messages}`, 450, 470)

    ctx.font = "bold 23px Arial"
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[3].username}`, 100, 470)


    //5
    ctx.font = "bold 23px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[4].weekly_messages}`, 900, 170)

    ctx.font = "bold 23px Arial"
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[4].username}`, 545, 170)

    //6
    ctx.font = "bold 23px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[5].weekly_messages}`, 900, 270)

    ctx.font = "bold 23px Arial"
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[5].username}`, 545, 270)

    //7
    ctx.font = "bold 23px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[6].weekly_messages}`,900,370)

    ctx.font = "bold 23px Arial"
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[6].username}`,545,370)

    //8
    ctx.font = "bold 23px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[7].weekly_messages}`,900,470)

    ctx.font = "bold 23px Arial"
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`${page[7].username}`,545,470)

    ctx.font = "bold 30px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Messages`,920,110)

    ctx.font = "bold 30px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Messages`,485,110)
    const attachment = new discord.MessageAttachment(canvas.toBuffer(), "rank.png")

    message.channel.send(new discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .attachFiles(attachment)
    .setColor("#2c2f33")
    .setImage('attachment://rank.png')
    .setFooter("You can see other pages with -wmlb [pageNbr]")
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
    cooldown: 1000
}