const  Discord = require("discord.js");
const { user } = require("osenv");


module.exports = {
    name: 'sellableitems',
    aliases: ['sellable', 'sellitems', 'selllist', 'sellablelist'],
    category: 'Action',
    utilisation: '{prefix}sell [item]',
    module: 'economy',
    async execute(client, message, args, prefix) {


const embed = new Discord.MessageEmbed()
        .setAuthor(`Sellable Items | ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`To view animal and fish prices, use \`${prefix}sell fish\` || \`${prefix}sell animals\``)
        .addField('Items',`🎣 **Fishing Rod** — Starting at <:nightbux:902400327410679849>[2,500](https://discord.gg/bar)\n➔ \`${prefix}sell rod\`
\u200B
🔫 **Gun** — Starting at <:nightbux:902400327410679849>[25,000](https://discord.gg/bar)\n➔ \`${prefix}sell gun\`
\u200B
<:ninjasuit:851891822183186443> **NinjaSuit** — Starting at <:nightbux:902400327410679849>[150,00](https://discord.gg/bar)\n➔ \`${prefix}sell ninjasuit\`
\u200B
<:shovel:853051667365101568> **Shovels** — Starting at <:nightbux:902400327410679849>[2,500](https://discord.com/oauth2/authorize?client_id=961759910205489262&scope=bot&permissions=8)\n➔ \`${prefix}sell shovel\`
\u200B
<:camera:853054353355046922> **Cameras** — Starting at <:nightbux:902400327410679849>[5,000](https://discord.com/oauth2/authorize?client_id=961759910205489262&scope=bot&permissions=8)\n➔ \`${prefix}sell camera\`
\u200B
<:flashlight:853054333133651978> **Flashlights** — Starting at <:nightbux:902400327410679849>[1,000](https://discord.com/oauth2/authorize?client_id=961759910205489262&scope=bot&permissions=8)\n➔ \`${prefix}sell flashlight\`
\u200B
<:boltcutters:858580586183524362> **Bolt Cutters** — <:nightbux:902400327410679849>[10,000](https://discord.com/oauth2/authorize?client_id=961759910205489262&scope=bot&permissions=8)\n➔ \`${prefix}sell cutters\`
\u200B
<:squire:902400690712870914> **Squire Padlock** — <:nightbux:902400327410679849>[2,500,000](https://discord.com/oauth2/authorize?client_id=961759910205489262&scope=bot&permissions=8)\n➔ \`${prefix}sell squirelock\` `)

       
        .setColor("#2c2f33")
        .setFooter('Page 1 of 3')
        .setThumbnail(message.guild.iconURL())
        message.inlineReply(embed)
        return


    }};