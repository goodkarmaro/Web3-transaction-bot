import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import dm from './dm.js'
import reply from './reply.js'

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

    dm(client, '!GKRbuy', 'Authorize wallet')

    reply(client, '!GKRopen', 
    'Current tokens open for purchase, Price, Total supply left, Max supply per person')

    reply(client, '!GKRclosed', `Closed tokens:
    Price:
    Current supply`)

})

client.login(process.env.TOKEN)