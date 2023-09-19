const  Discord = require("discord.js")
const wait = require('util').promisify(setTimeout);

module.exports = {
    name: 'search',
    aliases: ['look'],
    category: 'Action',
    utilisation: '{prefix}search',
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
if(user.flashlight == 0) return message.inlineReply(`You do not own a flashlight! Use \`${prefix}buy flashlight\` to buy one!`)
const number = Math.floor(Math.random() * 3)
if(number == 0 || number == 1) {
const react = new Discord.MessageEmbed()
            .setAuthor(`Search | ${message.author.username}`, message.author.displayAvatarURL())
            .setTitle(`Where would you like to search?`)
         
           .setDescription(
            `<:bed:862536007605813278> **Bed** — \`bed\`, \`b\`  
\u200B
<:couch:862535789519175721> **Couch** — \`couch\`, \`c\`
\u200B
<:desk:862535957173370891> **Desk** — \`desk\`, \`d\``)
            
        message.inlineReply(react).then(async react => {
    
        let flashlight = new Map()
        flashlight.set('0',"None")
        flashlight.set('1',"Dull Flashlight")    
        flashlight.set('2',"Headlamp Flashlight")
        flashlight.set('3',"LED Flashlight")
    
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
          
          if(!channel) { msg.inlineReply(`Please provide the place you want to search at!`) 
        
        return;
    }
    if(msg.content.toLowerCase().includes("bed") || msg.content.toLowerCase().includes('b')) {
      
        const changed = new Discord.MessageEmbed()
        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are searching in your bed, looking for anything..
        
        You desperately search for hours..`)
        
       
        await react.delete()
        message.inlineReply(changed).then(msg => {
        
            wait(2000).then(()=>{
                    if(user.flashlight == 3){
                        let chance = (Math.random() * 100);
                        if(chance >= 67){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the bed somehow..
        
        You have found <:nightbux:902400327410679849>${Money}!`)
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        msg.edit(embed)
        return
                        } else if(chance < 67 && chance >= 25){
                            const rocks = parseInt(user.rock)
                            const orb = parseInt(user.blueorb)
                            const armor = parseInt(user.plotarmor)
                            const golfclub = parseInt(user.golfclub)
                            const newchance = (Math.random() * 100);
                            if(newchance >= 75){
                                const finalorb = (orb + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 25){
                                const finalrock = (rocks + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`LOL! You found a <:rock:858566310689374218> Rock!`)
        db.query("UPDATE user SET rock = ? WHERE user_id = ?",[finalrock,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 25){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                            msg.edit(embed)
                            return
                        }
                    }




                    if(user.flashlight == 2){
                        let chance = (Math.random() * 100);
                        if(chance >= 70){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the bed somehow..
        
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
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance > 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance > 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 35){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                            msg.edit(embed)
                            return
                        }
                    }


                    if(user.flashlight == 1){
                        let chance = (Math.random() * 100);
                        if(chance >= 75){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the bed somehow..
        
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
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 50){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                            msg.edit(embed)
                            return
                        }
                    }

            })})
    
        await join.stop()
       
    } else if(msg.content.toLowerCase().includes("couch") || msg.content.toLowerCase().includes('c')) {
      
        const changed = new Discord.MessageEmbed()
        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are searching in your couch, looking for anything..
        
        You desperately search for hours..`)
        
       
        await react.delete()
        message.inlineReply(changed).then(msg => {
        
            wait(2000).then(()=>{
                    if(user.flashlight == 3){
                        let chance = (Math.random() * 100);
                        if(chance == 97 || chance == 98 || chance == 99){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Wow. Congratulations.. you just unlocked a secret vault! 
        
        You have obtained the <:redkey:862545327889580049> \`Blood Key\`. Good luck!`)
        const tim = '285528911545106432'
        tim.send(`${message.author.username} just got the Blood Key in ${message.guild.name}`)
        msg.edit(embed)
        return
                        } else if (chance == 100){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Well this is amazing.. you just unlocked one of the rarest keys..
        
        You have obtained the <:purplekey:862545341738778644> \`AngelShard Key\`. Good luck!`)
        const tim = '285528911545106432'
        tim.send(`${message.author.username} just got the AngelShard Key in ${message.guild.name}`)
        msg.edit(embed)
        return
                        } else if(chance > 67 && chance !== 100 && chance !== 99 && chance !== 98 && chance !== 97){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the couch somehow..
        
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
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 25){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                            msg.edit(embed)
                            return
                        }
                    }




                    if(user.flashlight == 2){
                        let chance = (Math.random() * 100);
                        if(chance >= 70){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the couch somehow..
        
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
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 35){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                            msg.edit(embed)
                            return
                        }
                    }


                    if(user.flashlight == 1){
                        let chance = (Math.random() * 100);
                        if(chance >= 75){
                            const pocket = parseInt(user.pocket)
                            
                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                            const finalPocket = (pocket + Money)
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You are lucky.. you just found money in the couch somehow..
        
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
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 75 && newchance >= 50){
                                const finalarmor = (armor + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
        msg.edit(embed)
        return
                            } else if(newchance < 50 && newchance >= 25){
                                const finalclub = (golfclub + 1)
                                const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
        msg.edit(embed)
        return
                            }
                        } else if(chance < 50){
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                            msg.edit(embed)
                            return
                        }
                    }

            })})

            await join.stop()
        } else if(msg.content.toLowerCase().includes("desk") || msg.content.toLowerCase().includes('d')) {
      
                const changed = new Discord.MessageEmbed()
                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are searching in your desk, looking for anything..
                
                You desperately search for hours..`)
                
               
                await react.delete()
                message.inlineReply(changed).then(msg => {
                
                    wait(2000).then(()=>{
                            if(user.flashlight == 3){
                                let chance = (Math.random() * 101);
                                if(chance >= 67){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the desk somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance > 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 25){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
        
        
        
                            if(user.flashlight == 2){
                                let chance = (Math.random() * 100);
                                if(chance >= 70){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the desk somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 35){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
        
                            if(user.flashlight == 1){
                                let chance = (Math.random() * 100);
                                if(chance >= 75){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the desk somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 50){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
                    })})

                

         } else {
      return  message.reply('Please send a valid place to search! (Re-send the command) **Ex:** \`bed\`')
    }
    
    
    
        })}
        )
} else if(number == 2) {
    const react = new Discord.MessageEmbed()
                .setAuthor(`Search | ${message.author.username}`, message.author.displayAvatarURL())
                .setTitle(`Where would you like to search?`)
             
               .setDescription(
                `<:tent:862535806338072616> **Tent** — \`tent\`, \`t\`  
\u200B
<:shoe:862535764096188463> **Shoe** — \`shoe\`, \`s\`
\u200B
<:bushes:862535698967953418> **Bushes** — \`bushes\`, \`b\``)
                
            message.inlineReply(react).then(async react => {
        
            let flashlight = new Map()
            flashlight.set('0',"None")
            flashlight.set('1',"Dull Flashlight")    
            flashlight.set('2',"Headlamp Flashlight")
            flashlight.set('3',"LED Flashlight")
         
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
              
              if(!channel) { msg.inlineReply(`Please provide the place you want to search at!`) 
            
            return;
        }
        if(msg.content.toLowerCase().includes("tent") || msg.content.toLowerCase().includes('t')) {
          
            const changed = new Discord.MessageEmbed()
            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You are searching in your tent, looking for anything..
            
            You desperately search for hours..`)
            
           
            await react.delete()
            message.inlineReply(changed).then(msg => {
            
                wait(2000).then(()=>{
                        if(user.flashlight == 3){
                            let chance = (Math.random() * 100);
                            if(chance > 67){
                                const pocket = parseInt(user.pocket)
                                
                                const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                const finalPocket = (pocket + Money)
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You are lucky.. you just found money in the tent somehow..
            
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
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
            db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 75 && newchance >= 50){
                                    const finalarmor = (armor + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
            db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 50 && newchance >= 25){
                                    const finalclub = (golfclub + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
            db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 25){
                                    const finalrock = (rocks + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`LOL! You found a <:rock:858566310689374218> Rock!`)
            db.query("UPDATE user SET rock = ? WHERE user_id = ?",[finalrock,message.author.id])
            msg.edit(embed)
            return
                                }
                            } else if(chance < 25){
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                msg.edit(embed)
                                return
                            }
                        }
    
    
    
    
                        if(user.flashlight == 2){
                            let chance = (Math.random() * 100);
                            if(chance >= 70){
                                const pocket = parseInt(user.pocket)
                                
                                const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                const finalPocket = (pocket + Money)
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You are lucky.. you just found money in the tent somehow..
            
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
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
            db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 75 && newchance > 50){
                                    const finalarmor = (armor + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
            db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 50 && newchance > 25){
                                    const finalclub = (golfclub + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
            db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
            msg.edit(embed)
            return
                                }
                            } else if(chance < 35){
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                msg.edit(embed)
                                return
                            }
                        }
    
    
                        if(user.flashlight == 1){
                            let chance = (Math.random() * 100);
                            if(chance >= 75){
                                const pocket = parseInt(user.pocket)
                                
                                const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                const finalPocket = (pocket + Money)
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You are lucky.. you just found money in the tent somehow..
            
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
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
            db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 75 && newchance >= 50){
                                    const finalarmor = (armor + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
            db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 50 && newchance >= 25){
                                    const finalclub = (golfclub + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
            db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
            msg.edit(embed)
            return
                                }
                            } else if(chance < 50){
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                msg.edit(embed)
                                return
                            }
                        }
    
                })})
        
            await join.stop()
           
        } else if(msg.content.toLowerCase().includes("shoe") || msg.content.toLowerCase().includes('s')) {
          
            const changed = new Discord.MessageEmbed()
            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You are searching in your shoe, looking for anything..
            
            You desperately search for hours..`)
            
           
            await react.delete()
            message.inlineReply(changed).then(msg => {
            
                wait(2000).then(()=>{
                        if(user.flashlight == 3){
                            let chance = (Math.random() * 100);
                            if(chance == 97 || chance == 98 || chance == 99){
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Wow. Congratulations.. you just unlocked a secret vault! 
            
            You have obtained the <:redkey:862545327889580049> \`Blood Key\`. Good luck!`)
            const tim = '285528911545106432'
            tim.send(`${message.author.username} just got the Blood Key in ${message.guild.name}`)
            msg.edit(embed)
            return
                            } else if (chance == 100){
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Well this is amazing.. you just unlocked one of the rarest keys..
            
            You have obtained the <:purplekey:862545341738778644> \`AngelShard Key\`. Good luck!`)
            const tim = '285528911545106432'
            tim.send(`${message.author.username} just got the AngelShard Key in ${message.guild.name}`)
            msg.edit(embed)
            return
                            } else if(chance > 67 && chance !== 100 && chance !== 99 && chance !== 98 && chance !== 97){
                                const pocket = parseInt(user.pocket)
                                
                                const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                const finalPocket = (pocket + Money)
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You are lucky.. you just found money in the shoe somehow..
            
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
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
            db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 75 && newchance >= 50){
                                    const finalarmor = (armor + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
            db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 50 && newchance >= 25){
                                    const finalclub = (golfclub + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
            db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
            msg.edit(embed)
            return
                                }
                            } else if(chance < 25){
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                msg.edit(embed)
                                return
                            }
                        }
    
    
    
    
                        if(user.flashlight == 2){
                            let chance = (Math.random() * 100);
                            if(chance >= 70){
                                const pocket = parseInt(user.pocket)
                                
                                const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                const finalPocket = (pocket + Money)
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You are lucky.. you just found money in the shoe somehow..
            
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
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
            db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 75 && newchance >= 50){
                                    const finalarmor = (armor + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
            db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 50 && newchance >= 25){
                                    const finalclub = (golfclub + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
            db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
            msg.edit(embed)
            return
                                }
                            } else if(chance < 35){
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                msg.edit(embed)
                                return
                            }
                        }
    
    
                        if(user.flashlight == 1){
                            let chance = (Math.random() * 100);
                            if(chance >= 75){
                                const pocket = parseInt(user.pocket)
                                
                                const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                const finalPocket = (pocket + Money)
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You are lucky.. you just found money in the shoe somehow..
            
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
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
            db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 75 && newchance >= 50){
                                    const finalarmor = (armor + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
            db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
            msg.edit(embed)
            return
                                } else if(newchance < 50 && newchance >= 25){
                                    const finalclub = (golfclub + 1)
                                    const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
            db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
            msg.edit(embed)
            return
                                }
                            } else if(chance < 50){
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                msg.edit(embed)
                                return
                            }
                        }
    
                })})
    
                await join.stop()
            } else if(msg.content.toLowerCase().includes("bushes") || msg.content.toLowerCase().includes('b')) {
          
                    const changed = new Discord.MessageEmbed()
                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You are searching in the bushes, looking for anything..
                    
                    You desperately search for hours..`)
                    
                   
                    await react.delete()
                    message.inlineReply(changed).then(msg => {
                    
                        wait(2000).then(()=>{
                                if(user.flashlight == 3){
                                    let chance = (Math.random() * 101);
                                    if(chance >= 67){
                                        const pocket = parseInt(user.pocket)
                                        
                                        const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                        const finalPocket = (pocket + Money)
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You are lucky.. you just found money in the bushes somehow..
                    
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
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                    db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 75 && newchance >= 50){
                                            const finalarmor = (armor + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                    db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 50 && newchance > 25){
                                            const finalclub = (golfclub + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                    db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                    msg.edit(embed)
                    return
                                        }
                                    } else if(chance < 25){
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                        msg.edit(embed)
                                        return
                                    }
                                }
            
            
            
            
                                if(user.flashlight == 2){
                                    let chance = (Math.random() * 100);
                                    if(chance >= 70){
                                        const pocket = parseInt(user.pocket)
                                        
                                        const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                        const finalPocket = (pocket + Money)
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You are lucky.. you just found money in the bushes somehow..
                    
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
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                    db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 75 && newchance >= 50){
                                            const finalarmor = (armor + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                    db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 50 && newchance >= 25){
                                            const finalclub = (golfclub + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                    db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                    msg.edit(embed)
                    return
                                        }
                                    } else if(chance < 35){
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                        msg.edit(embed)
                                        return
                                    }
                                }
            
            
                                if(user.flashlight == 1){
                                    let chance = (Math.random() * 100);
                                    if(chance >= 75){
                                        const pocket = parseInt(user.pocket)
                                        
                                        const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                        const finalPocket = (pocket + Money)
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You are lucky.. you just found money in the bushes somehow..
                    
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
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                    db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 75 && newchance >= 50){
                                            const finalarmor = (armor + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                    db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                    msg.edit(embed)
                    return
                                        } else if(newchance < 50 && newchance >= 25){
                                            const finalclub = (golfclub + 1)
                                            const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                    db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                    msg.edit(embed)
                    return
                                        }
                                    } else if(chance < 50){
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                        msg.edit(embed)
                                        return
                                    }
                                }
            
                        })})
    
                    
    
             } else {
          return  message.reply('Please send a valid place to search! (Re-send the command) **Ex:** \`bed\`')
        }
        
        
        
            })}
            )
    } else if(number == 3) {
        const react = new Discord.MessageEmbed()
                    .setAuthor(`Search | ${message.author.username}`, message.author.displayAvatarURL())
                    .setTitle(`Where would you like to search?`)
                 
                   .setDescription(
                    `<:jacket:862535729988108308> **Jacket** — \`jacket\`, \`j\`  
\u200B
<:cabinet:862535681486094357> **Cabinet** — \`cabinet\`, \`c\`
\u200B
<:trash:862535654143819846> **Trash Can** — \`trash\`, \`t\``)
                    
                message.inlineReply(react).then(async react => {
            
                let flashlight = new Map()
                flashlight.set('0',"None")
                flashlight.set('1',"Dull Flashlight")    
                flashlight.set('2',"Headlamp Flashlight")
                flashlight.set('3',"LED Flashlight")
                
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
                  
                  if(!channel) { msg.inlineReply(`Please provide the place you want to search at!`) 
                
                return;
            }
            if(msg.content.toLowerCase().includes("jacket") || msg.content.toLowerCase().includes('j')) {
              
                const changed = new Discord.MessageEmbed()
                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are searching in your jacket, looking for anything..
                
                You desperately search for hours..`)
                
               
                await react.delete()
                message.inlineReply(changed).then(msg => {
                
                    wait(2000).then(()=>{
                            if(user.flashlight == 3){
                                let chance = (Math.random() * 100);
                                if(chance > 67){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the jacket somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 25){
                                        const finalrock = (rocks + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`LOL! You found a <:rock:858566310689374218> Rock!`)
                db.query("UPDATE user SET rock = ? WHERE user_id = ?",[finalrock,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 25){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
        
        
        
                            if(user.flashlight == 2){
                                let chance = (Math.random() * 100);
                                if(chance >= 70){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the jacket somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance > 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance > 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 35){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
        
                            if(user.flashlight == 1){
                                let chance = (Math.random() * 100);
                                if(chance >= 75){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the jacket somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 50){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
                    })})
            
                await join.stop()
               
            } else if(msg.content.toLowerCase().includes("cabinet") || msg.content.toLowerCase().includes('c')) {
              
                const changed = new Discord.MessageEmbed()
                .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are searching in the cabinet, looking for anything..
                
                You desperately search for hours..`)
                
               
                await react.delete()
                message.inlineReply(changed).then(msg => {
                
                    wait(2000).then(()=>{
                            if(user.flashlight == 3){
                                let chance = (Math.random() * 100);
                                if(chance == 97 || chance == 98 || chance == 99){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Wow. Congratulations.. you just unlocked a secret vault! 
                
                You have obtained the <:redkey:862545327889580049> \`Blood Key\`. Good luck!`)
                const tim = '285528911545106432'
                tim.send(`${message.author.username} just got the Blood Key in ${message.guild.name}`)
                msg.edit(embed)
                return
                                } else if (chance == 100){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Well this is amazing.. you just unlocked one of the rarest keys..
                
                You have obtained the <:purplekey:862545341738778644> \`AngelShard Key\`. Good luck!`)
                const tim = '285528911545106432'
                tim.send(`${message.author.username} just got the AngelShard Key in ${message.guild.name}`)
                msg.edit(embed)
                return
                                } else if(chance > 67 && chance !== 100 && chance !== 99 && chance !== 98 && chance !== 97){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the cabinet somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 25){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
        
        
        
                            if(user.flashlight == 2){
                                let chance = (Math.random() * 100);
                                if(chance >= 70){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the cabinet somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 35){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
        
                            if(user.flashlight == 1){
                                let chance = (Math.random() * 100);
                                if(chance >= 75){
                                    const pocket = parseInt(user.pocket)
                                    
                                    const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                    const finalPocket = (pocket + Money)
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You are lucky.. you just found money in the cabinet somehow..
                
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
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 75 && newchance >= 50){
                                        const finalarmor = (armor + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                msg.edit(embed)
                return
                                    } else if(newchance < 50 && newchance >= 25){
                                        const finalclub = (golfclub + 1)
                                        const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                msg.edit(embed)
                return
                                    }
                                } else if(chance < 50){
                                    const embed = new Discord.MessageEmbed()
                                    .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                    .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                    msg.edit(embed)
                                    return
                                }
                            }
        
                    })})
        
                    await join.stop()
                } else if(msg.content.toLowerCase().includes("trash") || msg.content.toLowerCase().includes('t')) {
              
                        const changed = new Discord.MessageEmbed()
                        .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`You are searching in the trash, looking for anything..
                        
                        You desperately search for hours..`)
                        
                       
                        await react.delete()
                        message.inlineReply(changed).then(msg => {
                        
                            wait(2000).then(()=>{
                                    if(user.flashlight == 3){
                                        let chance = (Math.random() * 101);
                                        if(chance >= 67){
                                            const pocket = parseInt(user.pocket)
                                            
                                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                            const finalPocket = (pocket + Money)
                                            const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`You are lucky.. you just found money in the trash somehow..
                        
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
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                        msg.edit(embed)
                        return
                                            } else if(newchance < 75 && newchance >= 50){
                                                const finalarmor = (armor + 1)
                                                const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                        msg.edit(embed)
                        return
                                            } else if(newchance < 50 && newchance > 25){
                                                const finalclub = (golfclub + 1)
                                                const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                        msg.edit(embed)
                        return
                                            }
                                        } else if(chance < 25){
                                            const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                            msg.edit(embed)
                                            return
                                        }
                                    }
                
                
                
                
                                    if(user.flashlight == 2){
                                        let chance = (Math.random() * 100);
                                        if(chance >= 70){
                                            const pocket = parseInt(user.pocket)
                                            
                                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                            const finalPocket = (pocket + Money)
                                            const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`You are lucky.. you just found money in the trash somehow..
                        
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
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                        msg.edit(embed)
                        return
                                            } else if(newchance < 75 && newchance >= 50){
                                                const finalarmor = (armor + 1)
                                                const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                        msg.edit(embed)
                        return
                                            } else if(newchance < 50 && newchance >= 25){
                                                const finalclub = (golfclub + 1)
                                                const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                        msg.edit(embed)
                        return
                                            }
                                        } else if(chance < 35){
                                            const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                            msg.edit(embed)
                                            return
                                        }
                                    }
                
                
                                    if(user.flashlight == 1){
                                        let chance = (Math.random() * 100);
                                        if(chance >= 75){
                                            const pocket = parseInt(user.pocket)
                                            
                                            const Money = Math.floor(Math.random() * (500 - 150) + 150)
                                            const finalPocket = (pocket + Money)
                                            const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`You are lucky.. you just found money in the trash somehow..
                        
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
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Ooo.. You found a <:blueorb:858555160036900874> Blue Orb!`)
                        db.query("UPDATE user SET blueorb = ? WHERE user_id = ?",[finalorb,message.author.id])
                        msg.edit(embed)
                        return
                                            } else if(newchance < 75 && newchance >= 50){
                                                const finalarmor = (armor + 1)
                                                const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Nice! You found some <:plotarmor:858557409820016681> Plot Armor!`)
                        db.query("UPDATE user SET plotarmor = ? WHERE user_id = ?",[finalarmor,message.author.id])
                        msg.edit(embed)
                        return
                                            } else if(newchance < 50 && newchance >= 25){
                                                const finalclub = (golfclub + 1)
                                                const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                        .setDescription(`Nice! You found a <:golfclub:858558593846870026> Golf Club!`)
                        db.query("UPDATE user SET golfclub = ? WHERE user_id = ?",[finalclub,message.author.id])
                        msg.edit(embed)
                        return
                                            }
                                        } else if(chance < 50){
                                            const embed = new Discord.MessageEmbed()
                                            .setAuthor(`Searching | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Well that was a waste of time. You found nothing LOL.`)
                                            msg.edit(embed)
                                            return
                                        }
                                    }
                
                            })})
        
                        
        
                 } else {
              return  message.reply('Please send a valid place to search! (Re-send the command) **Ex:** \`bed\`')
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