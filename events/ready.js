
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
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

  
    
    
      var resetAnti = new cron('00 00 12 * * *', function () {
        db.query('UPDATE usersraid SET rolecreate = 0',)
        console.log("Reset rolecreate")
    }, null, true, 'America/Los_Angeles');
    resetAnti.start()
    var resetAnti1 = new cron('00 00 00 * * *', function () {
        db.query('UPDATE usersraid SET rolecreate = 0',)
        console.log("Reset rolecreate")
    }, null, true, 'America/Los_Angeles');
    resetAnti1.start()

    var resetAnti2 = new cron('00 00 12 * * *', function () {
        db.query('UPDATE usersraid SET roledelete = 0',)
        console.log("Reset roledelete")
    }, null, true, 'America/Los_Angeles');
    resetAnti2.start()
    var resetAnti3 = new cron('00 00 00 * * *', function () {
        db.query('UPDATE usersraid SET roledelete = 0',)
        console.log("Reset roledelete")
    }, null, true, 'America/Los_Angeles');
    resetAnti3.start()

    var resetAnti4 = new cron('00 00 12 * * *', function () {
        db.query('UPDATE usersraid SET channelcreate = 0',)
        console.log("Reset channelcreate")
    }, null, true, 'America/Los_Angeles');
    resetAnti4.start()
    var resetAnti5 = new cron('00 00 00 * * *', function () {
        db.query('UPDATE usersraid SET channelcreate = 0',)
        console.log("Reset channelcreate")
    }, null, true, 'America/Los_Angeles');
    resetAnti5.start()

    var resetAnti6 = new cron('00 00 12 * * *', function () {
        db.query('UPDATE usersraid SET channeldelete = 0',)
        console.log("Reset channeldelete")
    }, null, true, 'America/Los_Angeles');
    resetAnti6.start()
    var resetAnti7 = new cron('00 00 00 * * *', function () {
        db.query('UPDATE usersraid SET channeldelete = 0',)
        console.log("Reset channeldelete")
    }, null, true, 'America/Los_Angeles');
    resetAnti7.start()

    var resetAnti8 = new cron('00 00 12 * * *', function () {
        db.query('UPDATE usersraid SET banlimit = 0',)
        console.log("Reset banlimit")
    }, null, true, 'America/Los_Angeles');
    resetAnti8.start()
    var resetAnti9 = new cron('00 00 00 * * *', function () {
        db.query('UPDATE usersraid SET banlimit = 0',)
        console.log("Reset banlimit")
    }, null, true, 'America/Los_Angeles');
    resetAnti9.start()

    var resetAnti10 = new cron('00 00 12 * * *', function () {
        db.query('UPDATE usersraid SET kicklimit = 0',)
        console.log("Reset kicklimit")
    }, null, true, 'America/Los_Angeles');
    resetAnti10.start()
    var resetAnti11 = new cron('00 00 00 * * *', function () {
        db.query('UPDATE usersraid SET kicklimit = 0',)
        console.log("Reset kicklimit")
    }, null, true, 'America/Los_Angeles');
    resetAnti11.start()


    var resetWeek = new cron('00 00 00 * * 00', function () {
        db.query('UPDATE messagecount SET weekly_messages = 0',)
        console.log("Reset week")
    }, null, true, 'America/Los_Angeles');
    resetWeek.start()

    var resetDay = new cron('00 00 00 * * *', function () {
        db.query('UPDATE messagecount SET daily_messages = 0',)
        console.log("Reset day")
    }, null, true, 'America/Los_Angeles');
    resetDay.start()

    var resetHour = new cron('00 00 * * * *', function () {
        db.query('UPDATE messagecount SET hourly_messages = 0',)
        console.log("Reset hour")
    }, null, true, 'America/Los_Angeles');
    resetHour.start()

    var messageLbWeek = new cron("*/5 * * * *", async function () {

        await db.promise().query('SELECT * FROM leaderboard WHERE guild_id = 1139828853255192727').then(result => {
            guild_info = result[0][0]
        })

        console.log("1")
        let channel = client.channels.cache.get(guild_info.wmlb_channel)
        channel.messages.fetch(guild_info.wmlb_id).then(async msg=>{
        if (channel) {
            console.log('2')
            let data
            try {
                await db.promise().query('SELECT * FROM messagecount WHERE guild_id = 1139828853255192727 ORDER BY weekly_messages DESC').then(result => {
                    data = result[0]
                })
            } catch (error) {
                console.log(error)
            }
            if (!data.length) return
            const page = functions.pages(data, 8, 1)

            const images = ['nightbuxbg.jpg', 'nightbuxbg2.jpg', 'nightbuxbg3.jpg', 'nightbuxbg4.jpg', 'nightbuxbg5.jpg', 'nightbuxbg6.jpg', 'nightbuxbg7.jpg', 'nightbuxbg8.jpg', 'nightbuxbg9.jpg', 'nightbuxbg10.png', 'nightbuxbg11.png', 'nightbuxbg12.jpg', 'nightbuxbg13.jpg', 'nightbuxbg14.png', 'nightbuxbg15.jpg', 'nightbuxbg16.jpg', 'nightbuxbg17.jpg', 'nightbuxbg18.jpg', 'nightbuxbg19.png', 'nightbuxbg20.jpg', 'nightbuxbg21.jpg', 'nightbuxbg22.png', 'nightbuxbg23.png', 'nightbuxbg24.jpg', 'nightbuxbg25.png', 'nightbuxbg26.jpg', 'nightbuxbg27.png', 'nightbuxbg28.jpg', 'nightbuxbg29.png', 'nightbuxbg30.jpg', 'nightbuxbg31.jpg',]
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
    messageLbWeek.start()




    var messageLbWeek1 = new cron("*/5 * * * *", async function () {

        await db.promise().query('SELECT * FROM leaderboard WHERE guild_id = 1139828853255192727').then(result => {
            guild_info1 = result[0][0]
        })

        console.log("1")
        let channel = client.channels.cache.get(guild_info1.wmlb_channel)
        channel.messages.fetch(guild_info1.wgmlb_id).then(async msg=>{
        if (channel) {
            console.log('2')
            let data1
            try {
                await db.promise().query('SELECT * FROM messagecount WHERE guild_id = 1139828853255192727 ORDER BY daily_messages DESC').then(result => {
                    data1 = result[0]
                })
            } catch (error) {
                console.log(error)
            }
            if (!data1.length) return
            const page = functions.pages(data1, 8, 1)

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
            ctx.fillText(`${page[0].daily_messages}`, 450, 170)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[0].username}`, 100, 170)

            //2
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[1].daily_messages}`, 450, 270)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[1].username}`, 100, 270)

            //3
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[2].daily_messages}`, 450, 370)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[2].username}`, 100, 370)

            //4
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[3].daily_messages}`, 450, 470)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[3].username}`, 100, 470)


            //5
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[4].daily_messages}`, 900, 170)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[4].username}`, 545, 170)

            //6
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[5].daily_messages}`, 900, 270)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[5].username}`, 545, 270)

            //7
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[6].daily_messages}`, 900, 370)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[6].username}`, 545, 370)

            //8
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[7].daily_messages}`, 900, 470)

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
                db.query('UPDATE leaderboard SET wgmlb_id = ? WHERE guild_id = ?',[m.id,m.guild.id])
            })
        }})
    })
    messageLbWeek1.start()







    let edit = 0
    //update messages every 30s
    var messageLbTotal = new cron("*/5 * * * *", async function () {

        await db.promise().query('SELECT * FROM leaderboard WHERE guild_id = 1139828853255192727').then(result => {
            guild_info = result[0][0]
        })


        console.log("1")
        let channel = client.channels.cache.get(guild_info.atlb_channel)
        channel.messages.fetch(guild_info.atlb_id).then(async msg=>{
        if (channel) {
            console.log('2')
            let data
            try {
                await db.promise().query('SELECT * FROM messagecount WHERE guild_id = 1139828853255192727 ORDER BY total_messages DESC').then(result => {
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
            ctx.fillText(`All-time Message Leaderboard`, 520, 60)

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
            ctx.fillText(`${page[0].total_messages}`, 450, 170)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[0].username}`, 100, 170)

            //2
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[1].total_messages}`, 450, 270)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[1].username}`, 100, 270)

            //3
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[2].total_messages}`, 450, 370)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[2].username}`, 100, 370)

            //4
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[3].total_messages}`, 450, 470)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[3].username}`, 100, 470)


            //5
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[4].total_messages}`, 900, 170)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[4].username}`, 545, 170)

            //6
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[5].total_messages}`, 900, 270)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[5].username}`, 545, 270)

            //7
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[6].total_messages}`, 900, 370)

            ctx.font = "bold 23px Arial"
            ctx.textAlign = "left"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[6].username}`, 545, 370)

            //8
            ctx.font = "bold 23px Arial"
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${page[7].total_messages}`, 900, 470)

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
                db.query('UPDATE leaderboard SET atlb_id = ? WHERE guild_id = ?',[m.id,m.guild.id])
            })
        
        }})
    })
    messageLbTotal.start()



//update messages every 30s
var messageLbTotal1 = new cron("*/5 * * * *", async function () {

    await db.promise().query('SELECT * FROM leaderboard WHERE guild_id = 1139828853255192727').then(result => {
        guild_info2 = result[0][0]
    })


    console.log("1")
    let channel3 = client.channels.cache.get(guild_info2.atlb_channel)
    channel3.messages.fetch(guild_info2.atlb_id).then(async msg=>{
    if (channel3) {
        console.log('2')
        let data2
        try {
            await db.promise().query('SELECT * FROM messagecount ORDER BY total_messages DESC').then(result => {
                data2 = result[0]
            })
        } catch (error) {
            console.log(error)
        }
        if (!data2.length) return
        const page = functions.pages(data2, 8, 1)

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
        ctx.fillText(`Global All-Time Message Leaderboard`, 520, 60)

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
        ctx.fillText(`${page[0].total_messages}`, 450, 170)

        ctx.font = "bold 23px Arial"
        ctx.textAlign = "left"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[0].username}`, 100, 170)

        //2
        ctx.font = "bold 23px Arial"
        ctx.textAlign = "right"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[1].total_messages}`, 450, 270)

        ctx.font = "bold 23px Arial"
        ctx.textAlign = "left"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[1].username}`, 100, 270)

        //3
        ctx.font = "bold 23px Arial"
        ctx.textAlign = "right"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[2].total_messages}`, 450, 370)

        ctx.font = "bold 23px Arial"
        ctx.textAlign = "left"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[2].username}`, 100, 370)

        //4
        ctx.font = "bold 23px Arial"
        ctx.textAlign = "right"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[3].total_messages}`, 450, 470)

        ctx.font = "bold 23px Arial"
        ctx.textAlign = "left"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[3].username}`, 100, 470)


        //5
        ctx.font = "bold 23px Arial"
        ctx.textAlign = "right"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[4].total_messages}`, 900, 170)

        ctx.font = "bold 23px Arial"
        ctx.textAlign = "left"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[4].username}`, 545, 170)

        //6
        ctx.font = "bold 23px Arial"
        ctx.textAlign = "right"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[5].total_messages}`, 900, 270)

        ctx.font = "bold 23px Arial"
        ctx.textAlign = "left"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[5].username}`, 545, 270)

        //7
        ctx.font = "bold 23px Arial"
        ctx.textAlign = "right"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[6].total_messages}`, 900, 370)

        ctx.font = "bold 23px Arial"
        ctx.textAlign = "left"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[6].username}`, 545, 370)

        //8
        ctx.font = "bold 23px Arial"
        ctx.textAlign = "right"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${page[7].total_messages}`, 900, 470)

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

        
        channel3.send(attachment).then(m=>{
            msg.delete()
            db.query('UPDATE leaderboard SET atlb_id = ? WHERE guild_id = ?',[m.id,m.guild.id])
        })
    
    }})
})
messageLbTotal1.start()



};