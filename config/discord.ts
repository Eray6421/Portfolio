/**
 * A Discord client based on/connected with your Discord account.
 * If you don't have one yet, you can follow the instructions in guide/CRATE_FIRST_APP.md.
 * WARNING! Since self-bots are unallowed by Discord, please, use one of your existing Discord applications or create an especial one for your account, such as in https://www.eray.soy but don't insert your own account's token.
 */

import { Client } from 'discord.js'

const myClient = new Client ({
    intents: 131071
})

export default (Token: string) => {
    myClient.login (Token)

    return myClient
}