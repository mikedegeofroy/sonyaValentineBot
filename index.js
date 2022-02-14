const { Telegraf } = require('telegraf')

const bot = new Telegraf('5265894081:AAGMMVP-xFeWT-Z-VLqXrpIXbwLf3McZSHU')

// bot.command('hipster', Telegraf.reply('λ'))

bot.use((ctx) => {
    console.log(ctx.update.message.from)

    if(ctx.update.message.from.username == 'beetlejuicce'){
        console.log('hooray')
    }
    // let channel_id = '914438292'

    // bot.telegram.sendMessage(channel_id, "Currently playing:")

})

// bot.telegram.sendMessage('-1001758725763', spotifyApi.getMyCurrentPlayingTrack()).then( (res) => {
//     console.log(res)
// })

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
