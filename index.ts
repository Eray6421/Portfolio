// Discord Client Configurations

import DiscordConfig from './config/discord.ts'

const Client = DiscordConfig (process.env.DISCORD_CLIENT_TOKEN)

Client.on ('ready', Client => {
    
})

// Web App Configurations

import ExpressConfig from './config/express.ts'

ExpressConfig ()