const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILD_SCHEDULED_EVENTS"]}
)

client.login("OTQzNTc1MzczODg5ODAyMjQw.Yg1DCw.rkfNAASlBjVSrv664gFP5GlcfeI")

client.on("ready",() => {
    console.log('BOT ONLINE')
})

client.on("messageCreate", (message) => {
    if(message.content == "!piero")
        message.channel.send("VAFFANCULO STRONZO")

    if(message.content == "!fortnite")
     message.channel.send("Questo è il link del sito di fortnite: https://www.epicgames.com/fortnite/it/home?sessionInvalidated=true")

    if(message.content == "!PORCO")
        message.channel.send("PORCODIO")
    
})