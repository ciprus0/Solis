const  Discord = require("discord.js")
const wait = require('util').promisify(setTimeout);

module.exports = {
    name: 'dig',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}dig',
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
if(user.shovel == 0) return message.inlineReply(`You do not own a shovel! Use \`${prefix}buy shovel\` to buy one!`)

const react = new Discord.MessageEmbed()
            .setAuthor(`Dig | ${message.author.username}`, message.author.displayAvatarURL())
            .setTitle(`Where would you like to dig?`)
         
           .setDescription(
            `🏡 **Your House** — \`house\`, \`h\`  
\u200B
🏞️ **Local Park** — \`park\`, \`p\`
\u200B
🌊 **A Lake** — \`lake\`, \`l\`
\u200B
🏖️ **A Beach** — \`beach\`, \`b\``)
            
        message.inlineReply(react).then(async react => {
    
        let shovel = new Map()
        shovel.set('0',"None")
        shovel.set('1',"Beach Shovel")    
        shovel.set('2',"Dull Shovel")
        shovel.set('3',"Sharp Shovel")
        
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
          
          if(!channel) { msg.inlineReply(`Please provide the place you want to dig at!`) 
        
        return;
    }
    if(msg.content.toLowerCase().includes("house") || msg.content.toLowerCase().includes('h')) {
      
        const changed = new Discord.MessageEmbed()
        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are digging around your house looking for anything..
        
        You desperately dig for hours..`)
        
       
        await react.delete()
        message.inlineReply(changed).then(msg => {
        
            wait(2000).then(()=>{
                    if(user.shovel == 3){
                        let chance = (Math.random() * 100);
                        if(chance > 67){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the ground somehow..
        
        You have found <:nightbux:902400327410679849>${Money}!`)
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        msg.edit(embed)
        return
                        } else if(chance <= 67 && chance >= 25){
                            const rocks = parseInt(user.rock)
                            const orb = parseInt(user.blueorb)
                            const armor = parseInt(user.plotarmor)
                            const golfclub = parseInt(user.golfclub)
                            const newchance = (Math.random() * 100);
                            if(newchance >= 75){
                                const finalorb = (orb + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 25){
                                const finalrock = (rocks + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`LOL! You dug up a <:rock:858566310689374218> Rock!`)
        db.query("UPDATE user SET rock = ? WHERE user_id = ?",[finalrock,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 25){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                            msg.edit(embed)
                            return
                        }
                    }




                    if(user.shovel == 2){
                        let chance = (Math.random() * 100);
                        if(chance >= 70){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the ground somehow..
        
        You have found <:nightbux:902400327410679849>${Money}!`)
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        msg.edit(embed)
        return
                        } else if(chance < 70 && chance >= 35){
                            const orb = parseInt(user.blueorb)
                            const armor = parseInt(user.plotarmor)
                            const golfclub = parseInt(user.golfclub)
                            const newchance = (Math.random() * 101);
                            if(newchance > 75){
                                const finalorb = (orb + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance > 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance > 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 35){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                            msg.edit(embed)
                            return
                        }
                    }


                    if(user.shovel == 1){
                        let chance = (Math.random() * 100);
                        if(chance >= 75){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the ground somehow..
        
        You have found <:nightbux:902400327410679849>${Money}!`)
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        msg.edit(embed)
        return
                        } else if(chance < 75 && chance >= 50){
                            const orb = parseInt(user.blueorb)
                            const armor = parseInt(user.plotarmor)
                            const golfclub = parseInt(user.golfclub)
                            const newchance = (Math.random() * 101);
                            if(newchance >= 75){
                                const finalorb = (orb + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 50){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                            msg.edit(embed)
                            return
                        }
                    }

            })})
    
        await join.stop()
       
    } else if(msg.content.toLowerCase().includes("lake") || msg.content.toLowerCase().includes('l')) {
      
        const changed = new Discord.MessageEmbed()
        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are digging around the lake looking for anything..
        
        You desperately dig for hours..`)
        
       
        await react.delete()
        message.inlineReply(changed).then(msg => {
        
            wait(2000).then(()=>{
                    if(user.shovel == 3){
                        let chance = (Math.random() * 100);
                        if(chance == 97 || chance == 98 || chance == 99){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Wow. Congratulations.. you just unlocked a secret vault! 
        
        You have obtained the <:bluekey1:862415303299956777> \`Tides Key\`. Good luck!`)

        client.users.cache.get('285528911545106432').send(`${message.author.username} just got the Tides Key in ${message.guild.name}`)
        msg.edit(embed)
        return
                        } else if (chance == 100){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Well this is amazing.. you just unlocked one of the rarest keys..
        
        You have obtained the <:orangekey:862415339686199316> \`Sol Key\`. Good luck!`)
    
        client.users.cache.get('285528911545106432').send(`${message.author.username} just got the Sol Key in ${message.guild.name}`)
        msg.edit(embed)
        return
                        } else if(chance > 67 && chance !== 100 && chance !== 99 && chance !== 98 && chance !== 97){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the ground somehow..
        
        You have found <:nightbux:902400327410679849>${Money}!`)
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        msg.edit(embed)
        return
                        } else if(chance <= 67 && chance >= 25){
                            const orb = parseInt(user.blueorb)
                            const armor = parseInt(user.plotarmor)
                            const golfclub = parseInt(user.golfclub)
                            const newchance = (Math.random() * 101);
                            if(newchance >= 75){
                                const finalorb = (orb + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 25){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                            msg.edit(embed)
                            return
                        }
                    }




                    if(user.shovel == 2){
                        let chance = (Math.random() * 100);
                        if(chance >= 70){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the ground somehow..
        
        You have found <:nightbux:902400327410679849>${Money}!`)
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        msg.edit(embed)
        return
                        } else if(chance < 70 && chance >= 35){
                            const orb = parseInt(user.blueorb)
                            const armor = parseInt(user.plotarmor)
                            const golfclub = parseInt(user.golfclub)
                            const newchance = (Math.random() * 101);
                            if(newchance >= 75){
                                const finalorb = (orb + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 35){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                            msg.edit(embed)
                            return
                        }
                    }


                    if(user.shovel == 1){
                        let chance = (Math.random() * 100);
                        if(chance >= 75){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the ground somehow..
        
        You have found <:nightbux:902400327410679849>${Money}!`)
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        msg.edit(embed)
        return
                        } else if(chance < 75 && chance >= 50){
                            const orb = parseInt(user.blueorb)
                            const armor = parseInt(user.plotarmor)
                            const golfclub = parseInt(user.golfclub)
                            const newchance = (Math.random() * 101);
                            if(newchance > 75){
                                const finalorb = (orb + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 50){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                            msg.edit(embed)
                            return
                        }
                    }

            })})

            await join.stop()
        } else if(msg.content.toLowerCase().includes("park") || msg.content.toLowerCase().includes('p')) {
      
                const changed = new Discord.MessageEmbed()
                .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are digging around the park looking for anything..
                
                You desperately dig for hours..`)
                
               
                await react.delete()
                message.inlineReply(changed).then(msg => {
                
                    wait(2000).then(()=>{
                            if(user.shovel == 3){
                                let chance = (Math.random() * 101);
                                if(chance >= 67){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the ground somehow..
                
                You have found <:nightbux:902400327410679849>${Money}!`)
                db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 67 && chance >= 25){
                                    const orb = parseInt(user.blueorb)
                                    const armor = parseInt(user.plotarmor)
                                    const golfclub = parseInt(user.golfclub)
                                    const newchance = (Math.random() * 101);
                                    if(newchance > 75){
                                        const finalorb = (orb + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance > 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 25){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
        
        
        
                            if(user.shovel == 2){
                                let chance = (Math.random() * 100);
                                if(chance >= 70){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the ground somehow..
                
                You have found <:nightbux:902400327410679849>${Money}!`)
                db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 70 && chance >= 35){
                                    const orb = parseInt(user.blueorb)
                                    const armor = parseInt(user.plotarmor)
                                    const golfclub = parseInt(user.golfclub)
                                    const newchance = (Math.random() * 101);
                                    if(newchance >= 75){
                                        const finalorb = (orb + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 35){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
        
                            if(user.shovel == 1){
                                let chance = (Math.random() * 100);
                                if(chance >= 75){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the ground somehow..
                
                You have found <:nightbux:902400327410679849>${Money}!`)
                db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
                msg.edit(embed)
                return
                                } else if(chance < 75 && chance >= 50){
                                    const orb = parseInt(user.blueorb)
                                    const armor = parseInt(user.plotarmor)
                                    const golfclub = parseInt(user.golfclub)
                                    const newchance = (Math.random() * 101);
                                    if(newchance >= 75){
                                        const finalorb = (orb + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 50){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
                    })})

                } else if(msg.content.toLowerCase().includes("beach") || msg.content.toLowerCase().includes('b')) {
      
                    const changed = new Discord.MessageEmbed()
                    .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You are digging around the beach looking for anything..
                    
                    You desperately dig for hours..`)
                    
                   
                    await react.delete()
                    message.inlineReply(changed).then(msg => {
                    
                        wait(2000).then(()=>{
                                if(user.shovel == 3){
                                    let chance = (Math.random() * 101);
                                    if(chance >= 67){
                                        const pocket = parseInt(user.pocket)
                                        
                                        const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                        const finalPocket = (pocket + Money)
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You are lucky.. you just found money in the ground somehow..
                    
                    You have found <:nightbux:902400327410679849>${Money}!`)
                    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
                    msg.edit(embed)
                    return
                                    } else if(chance < 67 && chance >= 25){
                                        const orb = parseInt(user.blueorb)
                                        const armor = parseInt(user.plotarmor)
                                        const golfclub = parseInt(user.golfclub)
                                        const newchance = (Math.random() * 101);
                                        if(newchance >= 75){
                                            const finalorb = (orb + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
                    db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 75 && newchance >= 50){
                                            const finalarmor = (armor + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
                    db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 50 && newchance >= 25){
                                            const finalclub = (golfclub + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
                    db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                    msg.edit(embed)
                    return
                                        }
                                    } else if(chance < 25){
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                                        msg.edit(embed)
                                        return
                                    }
                                }
            
            
            
            
                                if(user.shovel == 2){
                                    let chance = (Math.random() * 100);
                                    if(chance >= 70){
                                        const pocket = parseInt(user.pocket)
                                        
                                        const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                        const finalPocket = (pocket + Money)
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You are lucky.. you just found money in the ground somehow..
                    
                    You have found <:nightbux:902400327410679849>${Money}!`)
                    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
                    msg.edit(embed)
                    return
                                    } else if(chance < 70 && chance >= 35){
                                        const orb = parseInt(user.blueorb)
                                        const armor = parseInt(user.plotarmor)
                                        const golfclub = parseInt(user.golfclub)
                                        const newchance = (Math.random() * 101);
                                        if(newchance >= 75){
                                            const finalorb = (orb + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
                    db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 75 && newchance >= 50){
                                            const finalarmor = (armor + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
                    db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 50 && newchance >= 25){
                                            const finalclub = (golfclub + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
                    db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                    msg.edit(embed)
                    return
                                        }
                                    } else if(chance < 35){
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                                        msg.edit(embed)
                                        return
                                    }
                                }
            
            
                                if(user.shovel == 1){
                                    let chance = (Math.random() * 100);
                                    if(chance >= 75){
                                        const pocket = parseInt(user.pocket)
                                        
                                        const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                        const finalPocket = (pocket + Money)
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You are lucky.. you just found money in the ground somehow..
                    
                    You have found <:nightbux:902400327410679849>${Money}!`)
                    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
                    msg.edit(embed)
                    return
                                    } else if(chance < 75 && chance >= 50){
                                        const orb = parseInt(user.blueorb)
                                        const armor = parseInt(user.plotarmor)
                                        const golfclub = parseInt(user.golfclub)
                                        const newchance = (Math.random() * 101);
                                        if(newchance >= 75){
                                            const finalorb = (orb + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Ooo.. You dug up a <:blueorb:858555160036900874> Blue Orb!`)
                    db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 75 && newchance >= 50){
                                            const finalarmor = (armor + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You dug up some <:plotarmor:858557409820016681> Plot Armor!`)
                    db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 50 && newchance >= 25){
                                            const finalclub = (golfclub + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You dug up a <:golfclub:858558593846870026> Golf Club!`)
                    db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                    msg.edit(embed)
                    return
                                        }
                                    } else if(chance < 50){
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Digging | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`Unlucky mate, you dug up absolutely NOTHING.`)
                                        msg.edit(embed)
                                        return
                                    }
                                }
            
                        })})

         } else {
      return  message.reply('Please send a valid place to dig! (Re-send the command) **Ex:** \`house\`')
    }
    
    
    
        })}
        )}};



        module.exports.requirements = {
            userPerms: [],
            clientPerms: [],
            ownerOnly: false
        }
        
        module.exports.limits = {
            rateLimit: 1,
            cooldown: 300000,
            embedMessage: `**Dig** is currently on cooldown of **5 minutes**, please wait till the **5 minutes** is over`
        }