const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
	"token": process.env.token,
    "prefix": ["sp!","<@$clientid>","<@!$clientid>"],
    "intents": "all"
})

//Events
bot.onMessage()

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

bot.status({
  text: "being developed",
  type: "WATCHING",
  status: "dnd",
  time: 12
})
bot.status({
  text: "heartbeat of SP-API",
  type: "WATCHING",
  status: "dnd",
  time: 12
})

bot.variables({
    v1: "https://apiv1.spapi.ga",
    v2: "https://apiv2.spapi.ga"
})

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

require('express')().get('/', (rq, rs) => rs.sendStatus(200)).listen(3000)