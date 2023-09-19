const discord = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    name: 'degree',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}degree',
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

if(user.learningdegree == 'N/A'){
    const react = new Discord.MessageEmbed()
        .setTitle("Education")
        .setDescription(`Choose from this list for your degree! **Example:** \`retail\``)
        .addField('Degree Options',
        `Architecture
Retail
Media Marketing
Sales
Business
Engineering
Technology
Administrative Studies
Accountancy
Education
Computer Science
        `)
        
    message.inlineReply(react).then(async react => {

  
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
      
      if(!channel) { msg.inlineReply(`Please provide the Degree you would like to see information about or choose.`) 
    
    return;
}
if(msg.content.toLowerCase() === 'computer science' || msg.content.includes('computer science')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Computer Science')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Programmer — <:NB:780875868276260884>[1,000](https://discord.gg/bar)
    Dev-Ops Engineer — <:NB:780875868276260884>[2,000](https://discord.gg/bar)
    Software Engineer — <:NB:780875868276260884>[5,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Computer Science!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["computerscience",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else



if(msg.content.toLowerCase() === 'retail' || msg.content.includes('retail')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Retail')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Retail Cashier — Up to <:NB:780875868276260884>[1,000](https://discord.gg/bar)
    Stocker — Up to <:NB:780875868276260884>[1,000](https://discord.gg/bar)
    Retail Manager — Up to <:NB:780875868276260884>[1,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Retail!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["retail",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else



if(msg.content.toLowerCase() === 'accountancy' || msg.content.includes('accountancy')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Accountancy')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Bank Teller — Up to <:NB:780875868276260884>[3,000](https://discord.gg/bar)
    Accounant — Up to <:NB:780875868276260884>[3,000](https://discord.gg/bar)
    Bank Manager — Up to <:NB:780875868276260884>[3,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Accountancy!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["accountancy",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else


if(msg.content.toLowerCase() === 'business' || msg.content.includes('business')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Business')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Statistician — Up to <:NB:780875868276260884>[9,000](https://discord.gg/bar)
    Financial Manager — Up to <:NB:780875868276260884>[9,000](https://discord.gg/bar)
    Operations Research Analyst — Up to <:NB:780875868276260884>[9,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Business!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["business",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else


if(msg.content.toLowerCase() === 'sales' || msg.content.includes('sales')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Sales')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Salesperson — Up to <:NB:780875868276260884>[2,000](https://discord.gg/bar)
    Sales Consultant — Up to <:NB:780875868276260884>[2,000](https://discord.gg/bar)
    Sales Operations Manager — Up to <:NB:780875868276260884>[2,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Sales!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["sales",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else


if(msg.content.toLowerCase() === 'architecture' || msg.content.includes('architecture')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Architecture')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Builder — Up to <:NB:780875868276260884>[5,000](https://discord.gg/bar)
    Architect Associate — Up to <:NB:780875868276260884>[5,000](https://discord.gg/bar)
    Architect — Up to <:NB:780875868276260884>[5,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Architecture!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["architecture",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})
 
} else

if(msg.content.toLowerCase() === 'media marketing' || msg.content.includes('media marketing')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Media Marketing')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Only Fans Influencer — Up to <:NB:780875868276260884>[6,000](https://discord.gg/bar)
    Twitch Streamer — Up to <:NB:780875868276260884>[6,000](https://discord.gg/bar)
    YouTuber — Up to <:NB:780875868276260884>[6,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Media Marketing!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["mediamarketing",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else


if(msg.content.toLowerCase() === 'technology' || msg.content.includes('technology')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Technology')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `IT Service Technician — Up to <:NB:780875868276260884>[4,000](https://discord.gg/bar)
    IT Manager — Up to <:NB:780875868276260884>[4,000](https://discord.gg/bar)
    Engineering Tech Support Manager — Up to <:NB:780875868276260884>[4,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Technology!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["technology",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else


if(msg.content.toLowerCase() === 'engineering' || msg.content.includes('engineering')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Engineering')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Manufacturing Engineer — Up to <:NB:780875868276260884>[7,000](https://discord.gg/bar)
    Nuclear Engineer — Up to <:NB:780875868276260884>[7,000](https://discord.gg/bar)
    Senior Engineering Manager — Up to <:NB:780875868276260884>[7,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Engineering!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["engineering",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else

if(msg.content.toLowerCase() === 'administrative studies' || msg.content.includes('administrative studies')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Administrative Studies')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Administrative Assistant — Up to <:NB:780875868276260884>[8,000](https://discord.gg/bar)
    Senior Administrator — Up to <:NB:780875868276260884>[8,000](https://discord.gg/bar)
    Executive Secretary — Up to <:NB:780875868276260884>[8,000](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Administrative Studies!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["administrativestudies",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else



if(msg.content.toLowerCase() === 'education' || msg.content.includes('education')){
    await react.delete()
    await join.stop()
    const embed = new Discord.MessageEmbed()
    .setTitle('Education')
    .setDescription('Please say \`Yes\` or \`No\` to confirm this degree!')
    .addField('Available Jobs',
    `Elementary School Teacher — Up to <:NB:780875868276260884>[500](https://discord.gg/bar)
    High School Teacher — Up to <:NB:780875868276260884>[500](https://discord.gg/bar)
    College Professor — Up to <:NB:780875868276260884>[500](https://discord.gg/bar)
    `)
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
      
      if(msg1.content.toLowerCase() === 'yes'){
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .addField('Your degree is: Education!', 
            `Now you can use \`${prefix}learn\` to continue your degree, and work your way to a job!`)
            db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["education",message.author.id])
            await join1.stop()
            await embed.delete()
            message.inlineReply(embed2)
      } else

      if(msg1.content.toLowerCase() === 'no'){
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Cancelled')
        .addField('No degree chosen!', 
        `Use ${prefix}degree to see the degree list again!`)
        await embed.delete()
        await join1.stop()
        message.inlineReply(embed2)
      } else message.inlineReply('You have to say yes or no! Redo this process and say yes or no next time!')
    
    })})

} else message.inlineReply('You need to provide an actual degree! Please restart the process. **Example:** \`retail\`')



}
     )})} else message.inlineReply(`You already have a degree! If you want to change degrees, use the command \`${prefix}changedegree\`!`)




    }};
