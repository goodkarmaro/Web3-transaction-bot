import DiscordJS, { Intents } from "discord.js"
import dotenv from "dotenv"

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Bot ready')
})

client.on('messageCreate', (message) => {
    if (message.content === '!GKRbuy') message.reply({
        content: 'pong'
    })
    if (message.content === '!GKRopen') { }
    if (message.content === '!GKRclosed') { }
})

client.login(process.env.TOKEN)