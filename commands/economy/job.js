const discord = require("discord.js")
const Discord = require('discord.js');
const { watchFile } = require("fs");
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'job',
    aliases: ['pickjob', 'pick'],
    category: 'User',
    utilisation: '{prefix}job',
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

if(user.currentjob == 'N/A'){
if(user.currentdegree == 'N/A') {
    message.inlineReply(`You have not completed a degree! To start working, you need to complete a degree using the \`${prefix}learn\` command!`)
} else if (user.currentdegree == 'computerscience'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Computer Science")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Programmer
        Dev-Ops Engineer
        Software Engineer
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'programmer'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Programmer")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Programmer — Up to <:nightbux:902400327410679849>[10,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Programmer!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Programmer",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'dev-ops engineer' || msg.content.toLowerCase() === 'devops engineer'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Dev-Ops Engineer")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Dev-Ops Engineer — Up to <:nightbux:902400327410679849>[10,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Dev-Ops Engineer!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Dev-Ops Engineer",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'software engineer'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Software Engineer")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Software Engineer — Up to <:nightbux:902400327410679849>[10,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Software Engineer!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Software Engineer",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}else if (user.currentdegree == 'retail'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Retail")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Retail Cashier
        Stocker
        Retail Manager
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'retail cashier'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Retail Cashier")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Retail Cashier — Up to <:nightbux:902400327410679849>[1,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Retail Cashier!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Retail Cashier",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'stocker'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Stocker")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Stocker — Up to <:nightbux:902400327410679849>[1,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Stocker!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Stocker",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'Retail Manager'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Retail Manager")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Retail Manager — Up to <:nightbux:902400327410679849>[1,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Retail Manager!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Retail Manager",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}else if (user.currentdegree == 'accountancy'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Accountancy")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Bank Teller
        Accountant
        Bank Manager
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'bank teller'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Bank Teller")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Bank Teller — Up to <:nightbux:902400327410679849>[3,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Bank Teller!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Bank Teller",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'accountant'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Accountant")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Accountant — Up to <:nightbux:902400327410679849>[3,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Accountant!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Accountant",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'bank manager'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Bank Manager")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Bank Manager — Up to <:nightbux:902400327410679849>[3,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Bank Manager!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Bank Manager",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}


else if (user.currentdegree == 'business'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Business")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Statistician
        Financial Manager
        Operations Research Analyst
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'statistician'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Statistician")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Statistician — Up to <:nightbux:902400327410679849>[9,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Statistician!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Statistician",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'financial manager'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Financial Manager")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Financial Manager — Up to <:nightbux:902400327410679849>[9,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Financial Manager!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Financial Manager",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'operations research analyst'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Operations Research Analyst")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Operations Research Analyst — Up to <:nightbux:902400327410679849>[9,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Operations Research Analyst!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Operations Research Analyst",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}


else if (user.currentdegree == 'sales'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Sales")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Salesperson
        Sales Consultant
        Sales Operations Manager
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'salesperson'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Salesperson")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Salesperson — Up to <:nightbux:902400327410679849>[2,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Salesperson!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Salesperson",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'sales consultant'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Sales Consultant")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Sales Consultant — Up to <:nightbux:902400327410679849>[2,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Sales Consultant!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Sales Consultant",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'sales operations manager'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Sales Operations Manager")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Sales Operations Manager — Up to <:nightbux:902400327410679849>[2,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Sales Operations Manager!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Sales Operations Manager",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}



else if (user.currentdegree == 'architecture'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Architecture")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Builder
        Architect Associate
        Architect
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'builder'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Builder")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Builder — Up to <:nightbux:902400327410679849>[5,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Builder!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Builder",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'architect associate'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Architect Associate")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Architect Associate — Up to <:nightbux:902400327410679849>[5,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Architect Associate!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Architect Associate",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'architect'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Architect")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Architect — Up to <:nightbux:902400327410679849>[5,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Architect!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Architect",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}



else if (user.currentdegree == 'mediamarketing'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Media Marketing")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Slut
        Only-Fans Influencer
        Twitch Streamer
        YouTuber
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'slut'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Slut")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Slut — Up to <:nightbux:902400327410679849>[6,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Slut!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Slut",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'only fans influencer' || msg.content.toLowerCase() === 'only-fans influencer' || msg.content.toLowerCase() === 'onlyfans influencer'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Only-Fans Influencer")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Only-Fans Influencer — Up to <:nightbux:902400327410679849>[6,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Only-Fans Influencer!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Only-Fans Influencer",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'twitch streamer'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Twitch Streamer")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Twitch Streamer — Up to <:nightbux:902400327410679849>[6,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Twitch Streamer!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Twitch Streamer",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }

        if(msg.content.toLowerCase() === 'youtuber'){
            const embed = new Discord.MessageEmbed()
            .setTitle("YouTuber")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `YouTuber — Up to <:nightbux:902400327410679849>[6,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: YouTuber!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Youtuber",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }

    })})
}else if (user.currentdegree == 'technology'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Technology")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `IT Service Technician
        IT Manager
        Engineering Tech Support Manager
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'it service technician'){
            const embed = new Discord.MessageEmbed()
            .setTitle("IT Service Technician")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `IT Service Technician — Up to <:nightbux:902400327410679849>[4,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: IT Service Technician!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["IT Service Technician",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'it manager'){
            const embed = new Discord.MessageEmbed()
            .setTitle("IT Manager")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `IT Manager — Up to <:nightbux:902400327410679849>[4,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: IT Manager!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["IT Manager",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'engineering tech support manager'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Engineering Tech Support Manager")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Engineering Tech Support Manager — Up to <:nightbux:902400327410679849>[4,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Engineering Tech Support Manager!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Engineering Tech Support Manager",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}

else if (user.currentdegree == 'engineering'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Engineering")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Manufacturing Engineer
        Nuclear Engineer
        Senior Engineering Manager
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'manufacturing engineer'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Manufacturing Engineer")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Manufacturing Engineer — Up to <:nightbux:902400327410679849>[7,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Manufacturing Engineer!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Manufacturing Engineer",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'nuclear engineer'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Nuclear Engineer")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Nuclear Engineer — Up to <:nightbux:902400327410679849>[7,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Nuclear Engineer!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Nuclear Engineer",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'senior engineering manager'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Senior Engineering Manager")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Senior Engineering Manager — Up to <:nightbux:902400327410679849>[7,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Senior Engineering Manager!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Senior Engineering Manager",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}



else if (user.currentdegree == 'administrativestudies'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Administrative Studies")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Administrative Assistant
        Senior Administrator
        Executive Secretary
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'administrative assistant'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Administrative Assistant")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Administrative Assistant — Up to <:nightbux:902400327410679849>[8,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Administrative Assistant!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Administrative Assistant",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'senior administrator'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Senior Administrator")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Senior Administrator — Up to <:nightbux:902400327410679849>[8,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Senior Administrator!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Senior Administrator",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'executive secretary'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Executive Secretary")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Executive Secretary — Up to <:nightbux:902400327410679849>[8,000](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Executive Secretary!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Executive Secretary",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}



else if (user.currentdegree == 'education'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Education")
        .setDescription(`Choose your job from this list!`)
        .addField('Available Jobs',
        `Elementary School Teacher
        High School Teacher
        College Professor
        `)
        message.inlineReply(embed).then(async embed => {

  
            let joina = m => m.author.id === message.author.id;
            let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
             
            join.on('collect', async msg => {
              if(msg.content.toLowerCase() === "cancel") {
                msg.channel.send(`Cancelled`)
                await embed.delete()
                await join.stop()
             return
            }
              let channel = msg.content.toLowerCase();
              
              if(!channel) { msg.inlineReply(`Please provide the Job you would like to start.`) 
            
            return;
        }
        if(msg.content.toLowerCase() === 'elementary school teacher'){
            const embed = new Discord.MessageEmbed()
            .setTitle("Elementary School Teacher")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `Elementary School Teacher — Up to <:nightbux:902400327410679849>[500](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: Elementary School Teacher!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["Elementary School Teacher",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'high school teacher' || msg.content.toLowerCase() === 'highschool teacher'){
            const embed = new Discord.MessageEmbed()
            .setTitle("High School Teacher")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `High School Teacher — Up to <:nightbux:902400327410679849>[500](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: High School Teacher!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["High School Teacher",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }


        if(msg.content.toLowerCase() === 'college professor'){
            const embed = new Discord.MessageEmbed()
            .setTitle("College Professor")
            .setDescription(`Please say \`yes\` or \`no\` to confirm this job choice!`)
            .addField('Confirm',
            `College Professor — Up to <:nightbux:902400327410679849>[500](https://discord.gg/bar)`)
            message.inlineReply(embed).then(async embed => {

  
                let joina = m => m.author.id === message.author.id;
                let join1 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
                 
                join1.on('collect', async msg1 => {
                  if(msg1.content.toLowerCase() === "cancel") {
                    msg1.channel.send(`Cancelled`)
                    await embed.delete()
                    await join1.stop()
                 return
                }
                    let channel = msg1.content.toLowerCase();
                    
                    if(!channel) { msg1.inlineReply(`Please restart this process. Next time, say Yes or No!`) 
         return;         
        }
if(msg1.content.toLowerCase() == 'yes'){
 const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your job is: College Professor!', 
            `Now you can use \`${prefix}work\` to start working and earn some money! If you ever want to switch jobs, use \`${prefix}changejob\`!`)
            db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["College Professor",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No job chosen!', 
        `Use ${prefix}job to see the job list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    })})
        }



    })})
}



} else 

message.inlineReply(`You already have a job! Use \`${prefix}work\` to start working!`)

    }};