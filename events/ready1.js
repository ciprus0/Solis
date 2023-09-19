const cron = require("cron").CronJob
const discord = require("discord.js")
const functions = require("../structures/functions")
const { createCanvas, loadImage } = require("canvas")
const { join } = require("path")
const db =  require('../database/db')

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

module.exports = async (client) => {
    console.log(`Successfully Logged into ${client.user.tag}`)

  
    /*
    var messageLbDay = new cron("55 59 23 * * *", async function () {

        await db.promise().query('SELECT * FROM leaderboard WHERE guild_id = 737747949681115267').then(result => {
            guild_info = result[0][0]
        })

        console.log("1")
        let channel = client.channels.cache.get(guild_info.wmlb_channel)
        channel.messages.fetch(guild_info.wmlb_id).then(async msg=>{
        if (channel) {
            console.log('2')
            let data
            try {
                await db.promise().query('SELECT * FROM user ORDER BY daily_messages DESC').then(result => {
                    data = result[0]
                })
            } catch (error) {
                console.log(error)
            }
            if (!data.length) return
            const page = functions.pages(data, 8, 1)

            const images = ['nightbuxbg.jpg', 'nightbuxbg2.jpg', 'nightbuxbg3.jpg', 'nightbuxbg4.jpg',]
            const random = Math.floor(Math.random() * images.length)

            const canvas = createCanvas(1000, 525)
            const ctx = canvas.getContext("2d")
            const background = await loadImage(join(__dirname, "..", "img", images[random]))
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
            ctx.fillText(`Daily Message Leaderboard`, 520, 60)

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
            ctx.fillText(`${page[6].weekly_messages}`, 900, 370)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[6].username}`, 545, 370)

            //8
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[7].weekly_messages}`, 900, 470)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[7].username}`, 545, 470)

            ctx.font = "bold 30px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`Messages`, 920, 110)

            ctx.font = "bold 30px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`Messages`, 485, 110)
            let name = Date.now()
            let attachment =  new discord.MessageAttachment(canvas.toBuffer(), name + ".png")

            
            channel.send(attachment).then(m=>{
                msg.delete()
                db.query('UPDATE leaderboard SET wmlb_id = ? WHERE guild_id = ?',[m.id,m.guild.id])
            })
        }})
    })
    messageLbDay.start()*/
}