const discord = require("discord.js")
const Discord = require('discord.js');
const { watchFile } = require("fs");
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'learn',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}learn',
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
        if(user.learningdegree == 'N/A') {
            
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
        client.limits.delete(command + '-' + message.author.id)
            return message.inlineReply(`You don\'t even have a degree, use \`${prefix}degree\` to pick one!`)
            
    } 
    



if(user.learningdegree == 'computerscience'){
    if(user.degreeprogress == 30){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(30 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)

            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 29){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
   return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 29){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
               return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 29){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
                           return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 29){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
                                       return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 29){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
                                                   return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 29){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
                                                               return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 29){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
                                                                           return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 29){
                                                                                            
                                                                                             msg.edit(new Discord.MessageEmbed()
                                                                                             .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                             .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                             .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                             )
                                                                                             db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                             db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
                                                                                        return
                                                                                            } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}


if(user.learningdegree == 'business'){
    if(user.degreeprogress == 27){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(27 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 26){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["business",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 26){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["business",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 26){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["business",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 26){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["business",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 26){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["business",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 26){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["business",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 26){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["business",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 26){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["business",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}


if(user.learningdegree == 'administrativestudies'){
    
    if(user.degreeprogress == 25){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress+1);
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(25 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 24){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 24){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 24){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 24){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 24){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 24){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 24){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 24){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}



if(user.learningdegree == 'engineering'){
    if(user.degreeprogress == 24){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(24 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 23){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["engineering",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 23){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["engineering",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 23){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["engineering",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 23){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["engineering",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 23){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["engineering",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 23){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["engineering",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 23){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["engineering",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 23){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["engineering",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}

if(user.learningdegree == 'mediamarketing'){
    if(user.degreeprogress == 22){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(22 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 21){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 21){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 21){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 21){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 21){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 21){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 21){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 21){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}




if(user.learningdegree == 'architecture'){
    if(user.degreeprogress == 20){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(20 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 19){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["architecture",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 19){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["architecture",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 19){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["architecture",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 19){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["architecture",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 19){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["architecture",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 19){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["architecture",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 19){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["architecture",message.author.id])
                                                                            return
                                                                               } else 
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 19){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["architecture",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}

if(user.learningdegree == 'technology'){
    if(user.degreeprogress == 18){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(18 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 17){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["technology",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 17){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["technology",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 17){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["technology",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 17){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["technology",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 17){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["technology",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 17){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["technology",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 17){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["technology",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 17){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["technology",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}




if(user.learningdegree == 'accountancy'){
    if(user.degreeprogress == 16){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(16 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 15){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 15){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 15){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 15){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 15){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 15){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 15){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 15){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}


if(user.learningdegree == 'sales'){
    if(user.degreeprogress == 14){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(14 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 13){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["sales",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 13){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["sales",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 13){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["sales",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 13){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["sales",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 13){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["sales",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 13){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["sales",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 13){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["sales",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 13){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["sales",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}



if(user.learningdegree == 'retail'){
    if(user.degreeprogress == 12){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(12 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 11){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["retail",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 11){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["retail",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 11){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["retail",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 11){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["retail",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 11){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["retail",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 11){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["retail",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 11){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["retail",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 11){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["retail",message.author.id])
                                                                                        return
                                                                                           } else
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}


if(user.learningdegree == 'education'){
    if(user.degreeprogress == 10){
        return message.inlineReply(`You have already completed your degree and you can now choose a job with \`${prefix}job\``)
    }
    const loveIndex = Math.floor(user.degreeprogress) + 1;
const loveLevel = '<:classbooks:902404842033664010>'.repeat(loveIndex) + '<:blackbox:902404794340225074>'.repeat(10 - loveIndex);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have sat down in your class..
        
        You are now learning and about to take a test`)

        message.inlineReply(embed).then(msg => {
            wait(2000).then(()=>{
        let chance = (Math.random() * 100);

        if(user.books == 0){
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You failed your test! You do not own any books, so you were not able to study! Go to the store and buy some books!`)
        
            )
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
        }

        if(user.books == 1){
if(chance < 50){
    if(user.degreeprogress == 9){
                                                                                            
        msg.edit(new Discord.MessageEmbed()
        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
        )
        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["education",message.author.id])
    return
       } else
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You have passed your test!`)
    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
    )
    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
} else 

if(chance > 50){
    msg.edit(new Discord.MessageEmbed()
    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)

    )
}
        }

        if(user.books == 2){
            if(chance < 67){
                if(user.degreeprogress == 9){
                                                                                            
                    msg.edit(new Discord.MessageEmbed()
                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                    )
                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["education",message.author.id])
                return
                   } else
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have passed your test!`)
                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                )
                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
            } else 
            
            if(chance > 67){
                msg.edit(new Discord.MessageEmbed()
                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
            
                )
            }
                    }

                    if(user.books == 3){
                        if(chance < 75){
                            if(user.degreeprogress == 9){
                                                                                            
                                msg.edit(new Discord.MessageEmbed()
                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                )
                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["education",message.author.id])
                            return
                               } else
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You have passed your test!`)
                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                            )
                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                        } else 
                        
                        if(chance > 75){
                            msg.edit(new Discord.MessageEmbed()
                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                        
                            )
                        }
                                }

                                if(user.books == 4){
                                    if(chance < 80){
                                        if(user.degreeprogress == 9){
                                                                                            
                                            msg.edit(new Discord.MessageEmbed()
                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                            )
                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["education",message.author.id])
                                        return
                                           } else
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You have passed your test!`)
                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                        )
                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                    } else 
                                    
                                    if(chance > 80){
                                        msg.edit(new Discord.MessageEmbed()
                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                    
                                        )
                                    }
                                            }

                                            if(user.books == 5){
                                                if(chance < 84){
                                                    if(user.degreeprogress == 9){
                                                                                            
                                                        msg.edit(new Discord.MessageEmbed()
                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                        .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                        )
                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                        db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["education",message.author.id])
                                                    return
                                                       } else
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You have passed your test!`)
                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                    )
                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                } else 
                                                
                                                if(chance > 84){
                                                    msg.edit(new Discord.MessageEmbed()
                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                    .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                
                                                    )
                                                }
                                                        }

                                                        if(user.books == 6){
                                                            if(chance < 86){
                                                                if(user.degreeprogress == 9){
                                                                                            
                                                                    msg.edit(new Discord.MessageEmbed()
                                                                    .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                    .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                    .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                    )
                                                                    db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                    db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["education",message.author.id])
                                                                return
                                                                   } else
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You have passed your test!`)
                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                )
                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                            } else 
                                                            
                                                            if(chance > 86){
                                                                msg.edit(new Discord.MessageEmbed()
                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                            
                                                                )
                                                            }
                                                                    }

                                                                    if(user.books == 7){
                                                                        if(chance < 88){
                                                                            if(user.degreeprogress == 9){
                                                                                            
                                                                                msg.edit(new Discord.MessageEmbed()
                                                                                .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                )
                                                                                db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["education",message.author.id])
                                                                            return
                                                                               } else
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You have passed your test!`)
                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                            )
                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                        } else 
                                                                        
                                                                        if(chance > 88){
                                                                            msg.edit(new Discord.MessageEmbed()
                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                            .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                        
                                                                            )
                                                                        }
                                                                                }

                                                                                if(user.books == 8){
                                                                                    if(chance < 89){
                                                                                        if(user.degreeprogress == 9){
                                                                                            
                                                                                            msg.edit(new Discord.MessageEmbed()
                                                                                            .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                            .setDescription(`Congratulations! You have officially completed your degree and you can now choose a job with \`${prefix}job\``)
                                                                                            .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                            )
                                                                                            db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                            db.query('UPDATE user SET currentdegree = ? WHERE user_id = ?',["education",message.author.id])
                                                                                        return
                                                                                           } else 
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You have passed your test!`)
                                                                                        .addField(`🏫 Class Progress`, `${loveLevel}`, true)
                                                                                        )
                                                                                        db.query('UPDATE user SET degreeprogress = degreeprogress + 1 WHERE user_id = ?', [message.author.id])
                                                                                    } else 
                                                                                    
                                                                                    if(chance > 89){
                                                                                        msg.edit(new Discord.MessageEmbed()
                                                                                        .setAuthor(`Learning | ${message.author.username}`, message.guild.iconURL())
                                                                                        .setDescription(`You failed your test! Unfortunately, you will be forced to retake that test, and your progress will stay the same!`)
                                                                                    
                                                                                        )
                                                                                    }
                                                                                            }


            })
        })
}




}};


module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 1,
    cooldown: 120000,
    embedMessage: `**Learn** is currently on cooldown of **15 minutes**, please wait till the **15 minutes** is over`
}