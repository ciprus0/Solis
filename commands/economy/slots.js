const discord = require("discord.js")
module.exports = {
    name: 'slots',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}slots [amount of money]',
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
var bet1 = args[0] ;
var bet = parseInt(bet1, 10);
if(!bet){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    client.limits.delete(`${command}-${message.author.id}`)
    return message.reply("Please supply an amount to bet")}


const slots = ['🔔', '🍊', '🍒', '🍌', '🍇'];

const slotOne = Math.floor(Math.random() * slots.length)
const slotTwo = Math.floor(Math.random() * slots.length)
const slotThree = Math.floor(Math.random() * slots.length)

let toWith = parseInt(args[0])
let pocket = parseInt(user.pocket)
let bank = parseInt(user.bank)

    let money = pocket
    
     if(pocket < bet)
     {
       
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return message.reply(`You do not have enough money, You have <:nightbux:902400327410679849>\`${pocket}\``)}
     if(pocket == 0){
       
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase(); 
        client.limits.delete(`${command}-${message.author.id}`)
     return message.reply(`Please provide a bet, You have <:nightbux:902400327410679849>\`${pocket}\``)}
    
    


    const machine = new discord.MessageEmbed()
        .setAuthor(`🎰 Slots!`)
        .setDescription(`**Current bet** ${bet}
        **Player** ${message.author.tag}
        
        ${wrapSlots(slotOne, false)} | ${wrapSlots(slotTwo, false)} | ${wrapSlots(slotThree, false)}
       
        ${slots[slotOne]} | ${slots[slotTwo]} | ${slots[slotThree]} **<**
        
        ${wrapSlots(slotOne, true)} | ${wrapSlots(slotTwo, true)} | ${wrapSlots(slotThree, true)}
        
        `)
        .setFooter("Want to know how slots works? do ,help slots")
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
        await slotOne === slotTwo && slotOne === slotThree ? win() : loss()
    
        
        
        
   
    function wrapSlots(slot, add) {
		if (add) {
			if (slot + 1 > slots.length - 1) return slots[0];
			return slots[slot + 1];
		}
		if (slot - 1 < 0) return slots[slots.length - 1];
		return slots[slot - 1];
    } 
    //this is called when the emop
    function win(){
        const winEmbed = new discord.MessageEmbed()
        .setAuthor(`🎰 Slots! | You Won!!`)
        .setDescription(`**Player** ${message.author.tag}
        **Played bet** <:nightbux:902400327410679849>\`${bet}\`
        **Amount won** <:nightbux:902400327410679849>\`${bet * 5}\`
    
        ${slots[slotOne]} | ${slots[slotTwo]} | ${slots[slotThree]} **<**
    
        **Well done!**

        **Voters get a 2x chance of winning on slots!**
    [Vote Here](https://top.gg/bot/823391054614626304)
        `)
        .setFooter("Want to know how slots works? do ,help slots")
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
            message.channel.send(machine).then(m => setTimeout(()=> {m.edit(winEmbed)},2000))
            money += bet * 5
            
            db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[money,message.member.id])
            
};
//This is called when the emojis arent the same
function loss(){
    const newembed = new discord.MessageEmbed()
    .setAuthor(`🎰 Slots! | You Lost!`)
    .setDescription(`**Player** ${message.author.tag}
    **Played bet** <:nightbux:902400327410679849>\`${bet}\`

    ${slots[slotOne]} | ${slots[slotTwo]} | ${slots[slotThree]} **<**

    **Better luck next time!**

    **Voters get a 2x chance of winning on slots!**
    [Vote Here](https://top.gg/bot/823391054614626304)
    `)
    .setFooter("Want to know how slots works? do ,help slots")
    .setColor("#2c2f33")
    .setThumbnail(message.guild.iconURL())
    message.inlineReply(machine).then(m => setTimeout(()=> {m.edit(newembed)},2000))
  
    money -= bet
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[money,message.member.id])
}
        
}
        
    
    
   
    };
    
    module.exports.requirements = {
        userPerms: [],
        clientPerms: [],
        ownerOnly: false
    }
    
    module.exports.limits = {
        rateLimit: 1,
        cooldown: 60000,
        embedMessage: `**Slots** is currently on cooldown of **5 minutes**, please wait till the **5 minutes** is over`
    }