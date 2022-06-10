module.exports = {
   name: 'chat',
   code: `
$djseval[
require('cleverbot-free')("$message").then(r => {
const {MessageEmbed} = require('discord.js')
const embed = new MessageEmbed()
.setFooter({text:r,iconURL:""})
.setColor("#2f3136")

msg.channel.send({embeds: [embed]})
})
]
$color[1;2f3136]
$bottyping
$suppresserrors[API Down]
`
}