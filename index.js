const token = '7630284623:AAGUOCzhvE1SP_Vhg3REyS7HPs205xVZ_e0'

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: true});
const webAppUrl = 'https://storied-bombolone-37d940.netlify.app/'



 bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    if (text === '/start') {
        await bot.sendMessage(chatId, 'ниже появится конопка заполнить', {
            reply_markup: {
                keyboard: [
                    [{text: 'сделать заказ', web_app: {url: webAppUrl + '/form'}}],
                ],
            },
        });
        await bot.sendMessage(chatId, 'ниже появится конопка заполнить', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'заполнить форму', web_app: {url: webAppUrl}}],
                ],
            },
        });
    }
    
    
    
    bot.sendMessage(chatId, 'здарова заебал');
    console.log('ответ отправлен');
});