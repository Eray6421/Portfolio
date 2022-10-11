// Discord Client Configurations

import { Client } from 'discord.js'

const myClient = new Client ({
    intents: 131071
})

myClient.login (process.env.DISCORD_CLIENT_TOKEN)

// Web App Configurations

import Express from 'express'

