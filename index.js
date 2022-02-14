const { Telegraf } = require('telegraf')

const bot = new Telegraf('5265894081:AAGMMVP-xFeWT-Z-VLqXrpIXbwLf3McZSHU')

// bot.command('hipster', Telegraf.reply('λ'))

bot.use((ctx) => {
    console.log(ctx.update.message.from)

    if(ctx.update.message.from.username == 'beetlejuicce' && ctx.update.message.text == "/start"){
        console.log(ctx.update.message)
        bot.telegram.sendMessage(ctx.update.message.from.id, "SHA256: 04.05.2021")
    }

    if(ctx.update.message.from.username == 'beetlejuicce' && ctx.update.message.text == "31CCF77A9B4ABB0EDE125900C4848C56E7BAA10D11777C6016D06C0C62F06186"){
        console.log(ctx.update.message)
        bot.telegram.sendMessage(ctx.update.message.from.id, "Основание 64: 0Jgg0YLQsNC6LCDRjyDQvdC1INC30L3QsNGOINC00LDQttC1INCz0LTQtSDQvdCw0YfQsNGC0YwsIDQxMTg0MCDQvNC40L3Rg9GCLCA0MTE4NDAg0YHRh9Cw0YHRgtC70LjQstGL0YUg0LzQuNC90YPRgiwg0LrQvtGC0L7RgNGL0LUg0Y8g0L/RgNC+0LLRkdC7INCyINC+0YLQvdC+0YjQtdC90LjRj9GFINGBINGC0L7QsdC+0LkuIDkg0LzQtdGB0Y/RhtC10LIg0YHQutCw0LfQsNGC0Ywg0L/RgNC+0YHRgtC+LCDRgdC70LjRiNC60L7QvCDQv9GA0L7RgdGC0L4sINGN0YLQvtCz0L4g0L3QtSDQtNC+0YHRgtCw0YLQvtGH0L3QviDRh9GC0L7QsdGLINC+0L/QuNGB0LDRgtGMINCy0YHQtSDRh9GD0LLRgdGC0LLQsCDQutC+0YLQvtGA0YvQtSDQsNGB0YHQvtGG0LjQuNGA0YPRjtGC0YHRjyDRgSDRjdGC0LjQvCDQstGA0LXQvNC10L3QtdC8LiDQryDRgtC10LHRjyDQu9GO0LHQu9GOLCDRjyDRgtC10LHRjyDQvtGH0LXQvdGMINC70Y7QsdC70Y4sINCyINGC0LXQsdC1INGH0YLQvi3RgtC+INC10YHRgtGMLCDQutCw0LrQsNGPLdGC0L4g0Y3QvdC10YDQs9C40Y8sINC60L7RgtC+0YDRg9GOINGPINC90LUg0L7RidGD0YnQsNC7INC90Lgg0L7RgiDQvtC00L3QvtCz0L4g0YfQtdC70L7QstC10LrQsCwg0LzQvdC1INC60LDQttC10YLRgdGPINGN0YLQviDRgdC60YDRi9Cy0LDQtdGC0YHRjyDQsiDQvNC10LvQvtGH0LDRhS4g0KLQstC+0Lgg0LTQstC40LbQtdC90LjRjywg0YLQstC+0Y8g0YDQtdGH0YwsINGC0LLQvtC5INGO0LzQvtGALCDQstC90YPRgtGA0LXQvdC90Y/RjyDQutGA0LDRgdC+0YLQsCwg0L/QvtC00LTQtdGA0LbQutCwINC4INC30LDQsdC+0YLQsC4uLiDQrdGC0L4g0LLRgdGRINC00LXQu9Cw0LXRgiDRgtC10LHRjyDRgtC+0LHQvtC5LCDQuCDRjyDQstC70Y7QsdC70LXQvSDQsiDRgtC10LHRjyDQuNC80LXQvdC90L4g0LrQsNC6INGH0LXQu9C+0LLQtdC6LiDQotGLINCyINC/0L7RgdC70LXQtNC90LjQtSDQstGA0LXQvNGPINC00LvRjyDQvNC10L3RjyDQstGB0ZEuINCh0L/QsNGB0LjQsdC+INGC0LXQsdC1INC30LAg0Y3RgtC4INC/0YDQtdC60YDQsNGB0L3Ri9C1IDIg0LrQstCw0LTRgNC40LvQu9C40L7QvSDQt9C10L/RgtC+0YHQtdC60L3Rg9C90LQgKDI4INC90YPQu9C10LkpLiDQryDRgtC10LHRjyDQu9GO0LHQu9GOLg==")
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
