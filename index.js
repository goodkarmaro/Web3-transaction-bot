import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import dm from './dm.js'
import reply from './reply.js'
import scrape from './scraper.js'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
})


client.on('ready', async () => {

    console.log('Bot ready')

    dm(client, '!GKRbuy', 'Authorize wallet')
    reply(client, '!GKRbuy', 'Please check DM')

    reply(client, '!GKRopen', 
    'Current tokens open for purchase, Price, Total supply left, Max supply per person')

    const tokens = await scrape()

    reply(client, '!GKRclosed', `__Closed tokens__
    **${tokens.name.toUpperCase()}** Max supply: ${tokens.maxSupply}`)

})

client.login(process.env.TOKEN)