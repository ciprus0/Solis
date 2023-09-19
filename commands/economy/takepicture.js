const discord = require("discord.js")
const Discord = require('discord.js')
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'takephoto',
    aliases: ['takepic', 'camera', 'tpic', 'cam', 'takepicture', 'tphoto', 'takepics', 'takephotos'],
    category: 'Action',
    utilisation: '{prefix}takephoto',
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
        if(user.camera == 0) return message.inlineReply(`You do not own a camera! Use \`${prefix}buy camera\` to buy one!`)
        const number = Math.floor(Math.random() * 3)
        if(number == 0 || number == 1 || number == 2 || number == 3) {
        const react = new Discord.MessageEmbed()
                    .setAuthor(`Take a Photo | ${message.author.username}`, message.author.displayAvatarURL())
                    .setTitle(`Where type of photo do you want to take?`)
                 
                   .setDescription(
                    `<:fashion:862853114641907732> **Fashion** — \`fashion\`, \`f\`  
\u200B
<:portrait:862852792598790154> **Portrait** — \`portrait\`, \`p\`
\u200B
<:documentary:862854012801122304> **Documentary** — \`documentary\`, \`d\``)
                    
                message.inlineReply(react).then(async react => {
            
                let camera = new Map()
                camera.set('0',"None")
                camera.set('1',"Panasonic Camera")    
                camera.set('2',"Canon Camera")
                camera.set('3',"Nikon Camera")
                
                let joina = m => m.author.id === message.author.id;
                let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                
                join.on('collect', async msg => {
                  if(msg.content.toLowerCase() === "cancel") {
                    msg.channel.send(`Cancelled`)
                    await react.delete()
                    await join.stop()
                 return
                }
                  let channel = msg.content.toLowerCase();
                  
                  if(!channel) { msg.inlineReply(`Please provide the type of photo you want to take!`) 
                
                return;
            }
            if(msg.content.toLowerCase().includes("fashion") || msg.content.toLowerCase().includes('f')) {
              
                const changed = new Discord.MessageEmbed()
                .setAuthor(`Taking a Photo | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are currently looking for the best angle to take your portrait..`)
                
               
                await react.delete()
                message.inlineReply(changed).then(msg => {
                
                    wait(2000).then(()=>{
                            if(user.camera == 3){
                                let chance = (Math.random() * 100);
                                if(chance > 67){
                                   
                                    function greatfashimage() {
                                        var rand = [
                                            'https://cdn.cliqueinc.com/posts/275267/dua-lipa-style-275267-1545071461644-image.700x0c.jpg',
                                            'https://media.glamour.com/photos/5e1135043de2880008e9ff95/master/w_1600%2Cc_limit/GettyImages-1022090734.jpg',
                                            'https://media.vogue.co.uk/photos/5e56dfdcba219c0008b88dd6/2:3/w_2560%2Cc_limit/maison2.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What an awesome fashion photo. This has to be worth a lot, right?`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance <= 67 && chance >= 25){
                                    function greatfashimage() {
                                        var rand = [
                                            'https://media1.popsugar-assets.com/files/thumbor/5FT7sMHcZN-x0A0fsdVdsQlKETU/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/11/13/693/n/1922564/f802ae245faea85d973246.82814678_/i/harry-styles-vogue-magazine-fashion-quotes-december-2020.jpg',
                                            'https://images.ctfassets.net/hbmwn5pbkdff/5CltyEWDVzgf4nCi7LVU4w/814182188ba31c0128435801bdcb1e4f/scandinavia-market-image.jpg?w=2000',
                                            'https://i.pinimg.com/originals/dc/b7/db/dcb7dbef2be2b19a0c0d9c54356821a8.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
              
                                    
                                } else if(chance < 25){
                                    function greatfashimage() {
                                        var rand = [
                                            'https://i.pinimg.com/originals/7a/35/85/7a358503927c5c275c6f779a31d5fec7.jpg',
                                            'https://www.thefashionspot.com/assets/uploads/2016/07/marcjacobs-e1467374588728.jpg',
                                            'https://pbs.twimg.com/media/DjrF8n7XoAAYhmx.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
        
        
        
                            if(user.camera == 2){
                                let chance = (Math.random() * 100);
                                if(chance >= 70){
                                    function greatfashimage() {
                                        var rand = [
                                            'https://cdn.cliqueinc.com/posts/275267/dua-lipa-style-275267-1545071461644-image.700x0c.jpg',
                                            'https://media.glamour.com/photos/5e1135043de2880008e9ff95/master/w_1600%2Cc_limit/GettyImages-1022090734.jpg',
                                            'https://media.vogue.co.uk/photos/5e56dfdcba219c0008b88dd6/2:3/w_2560%2Cc_limit/maison2.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What an awesome fashion photo. This has to be worth a lot, right?`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 70 && chance >= 35){
                                    function greatfashimage() {
                                        var rand = [
                                            'https://media1.popsugar-assets.com/files/thumbor/5FT7sMHcZN-x0A0fsdVdsQlKETU/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/11/13/693/n/1922564/f802ae245faea85d973246.82814678_/i/harry-styles-vogue-magazine-fashion-quotes-december-2020.jpg',
                                            'https://images.ctfassets.net/hbmwn5pbkdff/5CltyEWDVzgf4nCi7LVU4w/814182188ba31c0128435801bdcb1e4f/scandinavia-market-image.jpg?w=2000',
                                            'https://i.pinimg.com/originals/dc/b7/db/dcb7dbef2be2b19a0c0d9c54356821a8.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 35){
                                    function greatfashimage() {
                                        var rand = [
                                            'https://i.pinimg.com/originals/7a/35/85/7a358503927c5c275c6f779a31d5fec7.jpg',
                                            'https://www.thefashionspot.com/assets/uploads/2016/07/marcjacobs-e1467374588728.jpg',
                                            'https://pbs.twimg.com/media/DjrF8n7XoAAYhmx.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
        
                            if(user.camera == 1){
                                let chance = (Math.random() * 100);
                                if(chance >= 75){
                                    function greatfashimage() {
                                        var rand = [
                                            'https://cdn.cliqueinc.com/posts/275267/dua-lipa-style-275267-1545071461644-image.700x0c.jpg',
                                            'https://media.glamour.com/photos/5e1135043de2880008e9ff95/master/w_1600%2Cc_limit/GettyImages-1022090734.jpg',
                                            'https://media.vogue.co.uk/photos/5e56dfdcba219c0008b88dd6/2:3/w_2560%2Cc_limit/maison2.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What an awesome fashion photo. This has to be worth a lot, right?`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 75 && chance >= 50){
                                    function greatfashimage() {
                                        var rand = [
                                            'https://media1.popsugar-assets.com/files/thumbor/5FT7sMHcZN-x0A0fsdVdsQlKETU/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/11/13/693/n/1922564/f802ae245faea85d973246.82814678_/i/harry-styles-vogue-magazine-fashion-quotes-december-2020.jpg',
                                            'https://images.ctfassets.net/hbmwn5pbkdff/5CltyEWDVzgf4nCi7LVU4w/814182188ba31c0128435801bdcb1e4f/scandinavia-market-image.jpg?w=2000',
                                            'https://i.pinimg.com/originals/dc/b7/db/dcb7dbef2be2b19a0c0d9c54356821a8.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                    
                                } else if(chance < 50){
                                    function greatfashimage() {
                                        var rand = [
                                            'https://i.pinimg.com/originals/7a/35/85/7a358503927c5c275c6f779a31d5fec7.jpg',
                                            'https://www.thefashionspot.com/assets/uploads/2016/07/marcjacobs-e1467374588728.jpg',
                                            'https://pbs.twimg.com/media/DjrF8n7XoAAYhmx.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(greatfashimage())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
                    })})
            
                await join.stop()
               
            } else if(msg.content.toLowerCase().includes("portrait") || msg.content.toLowerCase().includes('p')) {
              
                const changed = new Discord.MessageEmbed()
                .setAuthor(`Taking a Photo | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are currently looking for the best angle to take your portrait..`)
                
               
                await react.delete()
                message.inlineReply(changed).then(msg => {
                
                    wait(2000).then(()=>{
                            if(user.camera == 3){
                                let chance = (Math.random() * 100);
                                if(chance > 67){
                                   
                                    function greatporimage() {
                                        var rand = [
                                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                                            'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
                                            'https://www.anthropics.com/portraitpro/img/page-images/homepage/v21/clone-tool-A.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What an awesome fashion photo. This has to be worth a lot, right?`)
                .setImage(greatporimage())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance <= 67 && chance >= 25){
                                    function porgood() {
                                        var rand = [
                                            'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
                                            'https://photofocus.com/wp-content/uploads/2019/11/IMG_1192-2.jpg',
                                            'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(porgood())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
              
                                    
                                } else if(chance < 25){
                                    function porbad() {
                                        var rand = [
                                            'https://runt-of-the-web.com/wordpress/wp-content/uploads/2016/04/thug-life.jpg',
                                            'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/funny-selfie-background-reflection-fails-28-5899890f60da7__605.jpg',
                                            'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/funny-selfie-background-reflection-fails-47-5899df5f14e30__605.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(porbad())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
        
        
        
                            if(user.camera == 2){
                                let chance = (Math.random() * 100);
                                if(chance >= 70){
                                    function greatporimage() {
                                        var rand = [
                                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                                            'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
                                            'https://www.anthropics.com/portraitpro/img/page-images/homepage/v21/clone-tool-A.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What an awesome fashion photo. This has to be worth a lot, right?`)
                .setImage(greatporimage())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 70 && chance >= 35){
                                    function porgood() {
                                        var rand = [
                                            'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
                                            'https://photofocus.com/wp-content/uploads/2019/11/IMG_1192-2.jpg',
                                            'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(porgood())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 35){
                                    function porbad() {
                                        var rand = [
                                            'https://runt-of-the-web.com/wordpress/wp-content/uploads/2016/04/thug-life.jpg',
                                            'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/funny-selfie-background-reflection-fails-28-5899890f60da7__605.jpg',
                                            'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/funny-selfie-background-reflection-fails-47-5899df5f14e30__605.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(porbad())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
        
                            if(user.camera == 1){
                                let chance = (Math.random() * 100);
                                if(chance >= 75){
                                    function greatporimage() {
                                        var rand = [
                                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                                            'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
                                            'https://www.anthropics.com/portraitpro/img/page-images/homepage/v21/clone-tool-A.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What an awesome fashion photo. This has to be worth a lot, right?`)
                .setImage(greatporimage())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 75 && chance >= 50){
                                    function porgood() {
                                        var rand = [
                                            'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
                                            'https://photofocus.com/wp-content/uploads/2019/11/IMG_1192-2.jpg',
                                            'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(porgood())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                    
                                } else if(chance < 50){
                                    function porbad() {
                                        var rand = [
                                            'https://runt-of-the-web.com/wordpress/wp-content/uploads/2016/04/thug-life.jpg',
                                            'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/funny-selfie-background-reflection-fails-28-5899890f60da7__605.jpg',
                                            'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/funny-selfie-background-reflection-fails-47-5899df5f14e30__605.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(porbad())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
                    })})
            
                await join.stop()


            } else if(msg.content.toLowerCase().includes("documentary") || msg.content.toLowerCase().includes('d')) {
              
                const changed = new Discord.MessageEmbed()
                .setAuthor(`Taking a Photo | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are currently looking for the best angle to take your documentary photo..`)
                
               
                await react.delete()
                message.inlineReply(changed).then(msg => {
                
                    wait(2000).then(()=>{
                            if(user.camera == 3){
                                let chance = (Math.random() * 100);
                                if(chance > 67){
                                   
                                    function docgreat() {
                                        var rand = [
                                            'https://lanoirimage.com/wp-content/uploads/2017/02/17383354401_68f99b8b77_b-900x600.jpg',
                                            'https://www.city-academy.com/news/wp-content/uploads/2016/08/don_mccullin_smaller-copy-930x551.jpg',
                                            'https://speckyboy.com/wp-content/uploads/2019/04/documentary-photography-16a.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What a powerful documentary photo. This has to be worth a lot, right?`)
                .setImage(docgreat())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance <= 67 && chance >= 25){
                                    function docgood() {
                                        var rand = [
                                            'http://www.thephoblographer.com/wp-content/uploads/2020/05/200511_Homeless_Feature_15.jpg',
                                            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bandit%27s_Roost_by_Jacob_Riis.jpeg/220px-Bandit%27s_Roost_by_Jacob_Riis.jpeg',
                                            'https://www.tate.org.uk/art/images/work/AR/AR01201_9.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(docgood())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
              
                                    
                                } else if(chance < 25){
                                    function docbad() {
                                        var rand = [
                                            'https://www.askideas.com/media/32/Little-Boy-Hanging-With-Wire-Funny-Black-And-White-Picture-For-Whatsapp.jpg',
                                            'https://www.askideas.com/media/32/Dog-Swing-Funny-Black-And-White-Image.jpg',
                                            'https://i.pinimg.com/474x/6b/01/c8/6b01c80ab11c99d643ca762a258f394d--elephant-photography-white-photography.jpg',
                                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgqitx-hWI6DLeItmHyqwl6KY5dh48RH7DA&usqp=CAU'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(docbad())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
        
        
        
                            if(user.camera == 2){
                                let chance = (Math.random() * 100);
                                if(chance >= 70){
                                    function docgreat() {
                                        var rand = [
                                            'https://lanoirimage.com/wp-content/uploads/2017/02/17383354401_68f99b8b77_b-900x600.jpg',
                                            'https://www.city-academy.com/news/wp-content/uploads/2016/08/don_mccullin_smaller-copy-930x551.jpg',
                                            'https://speckyboy.com/wp-content/uploads/2019/04/documentary-photography-16a.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What a powerful documentary photo. This has to be worth a lot, right?`)
                .setImage(docgreat())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 70 && chance >= 35){
                                    function docgood() {
                                        var rand = [
                                            'http://www.thephoblographer.com/wp-content/uploads/2020/05/200511_Homeless_Feature_15.jpg',
                                            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bandit%27s_Roost_by_Jacob_Riis.jpeg/220px-Bandit%27s_Roost_by_Jacob_Riis.jpeg',
                                            'https://www.tate.org.uk/art/images/work/AR/AR01201_9.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(docgood())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 35){
                                    function docbad() {
                                        var rand = [
                                            'https://www.askideas.com/media/32/Little-Boy-Hanging-With-Wire-Funny-Black-And-White-Picture-For-Whatsapp.jpg',
                                            'https://www.askideas.com/media/32/Dog-Swing-Funny-Black-And-White-Image.jpg',
                                            'https://i.pinimg.com/474x/6b/01/c8/6b01c80ab11c99d643ca762a258f394d--elephant-photography-white-photography.jpg',
                                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgqitx-hWI6DLeItmHyqwl6KY5dh48RH7DA&usqp=CAU'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(docbad())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
        
                            if(user.camera == 1){
                                let chance = (Math.random() * 100);
                                if(chance >= 75){
                                    function docgreat() {
                                        var rand = [
                                            'https://lanoirimage.com/wp-content/uploads/2017/02/17383354401_68f99b8b77_b-900x600.jpg',
                                            'https://www.city-academy.com/news/wp-content/uploads/2016/08/don_mccullin_smaller-copy-930x551.jpg',
                                            'https://speckyboy.com/wp-content/uploads/2019/04/documentary-photography-16a.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.greatimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow! What a powerful documentary photo. This has to be worth a lot, right?`)
                .setImage(docgreat())
                db.query("UPDATE user SET greatimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 75 && chance >= 50){
                                    function docgood() {
                                        var rand = [
                                            'http://www.thephoblographer.com/wp-content/uploads/2020/05/200511_Homeless_Feature_15.jpg',
                                            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bandit%27s_Roost_by_Jacob_Riis.jpeg/220px-Bandit%27s_Roost_by_Jacob_Riis.jpeg',
                                            'https://www.tate.org.uk/art/images/work/AR/AR01201_9.jpg'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.goodimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice photo! Could sell for a decent amount.`)
                .setImage(docgood())
                db.query("UPDATE user SET goodimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                    
                                } else if(chance < 50){
                                    function docbad() {
                                        var rand = [
                                            'https://www.askideas.com/media/32/Little-Boy-Hanging-With-Wire-Funny-Black-And-White-Picture-For-Whatsapp.jpg',
                                            'https://www.askideas.com/media/32/Dog-Swing-Funny-Black-And-White-Image.jpg',
                                            'https://i.pinimg.com/474x/6b/01/c8/6b01c80ab11c99d643ca762a258f394d--elephant-photography-white-photography.jpg',
                                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgqitx-hWI6DLeItmHyqwl6KY5dh48RH7DA&usqp=CAU'
                                        ];
                                      
                                        return rand[Math.floor(Math.random() * rand.length)];
                                      
                                      }
                                    
                                    const currentfashgreat = parseInt(user.badimage)
                                    const newfashgreat = (currentfashgreat + 1)
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Photo Taken | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Erm.. at least you took a photo?`)
                .setImage(docbad())
                db.query("UPDATE user SET badimage = ? WHERE user_id = ?",[newfashgreat,message.author.id])
                msg.edit(embed)
                return
                                }
                            }
        
                    })})
            
                await join.stop()

            
        
            } else {
                      return  message.reply('Please send a valid type of photo to take! (Re-send the command) **Ex:** \`portrait\`')
                    }
                    
                    
                    
                      
                        
                })}
                )
        }    
        
        
        }};
        
        
        
                module.exports.requirements = {
                    userPerms: [],
                    clientPerms: [],
                    ownerOnly: false
                }
                
                module.exports.limits = {
                    rateLimit: 1,
                    cooldown: 300000,
                    embedMessage: `**Search** is currently on cooldown of **5 minutes**, please wait till the **5 minutes** is over`
                }

    