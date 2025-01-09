const token = '7630284623:AAGUOCzhvE1SP_Vhg3REyS7HPs205xVZ_e0'

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: true});
const webAppUrl = 'https://storied-bombolone-37d940.netlify.app'

console.log('server started!')
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
        console.log('click');
        
        if (msg?.web_app_data?.data) {
            try{
                const data = JSON.parse(msg?.web_app_data?.data);
               await bot.sendMessage(chatId, 'Спасибо за обратную связь!');
               await bot.sendMessage(chatId,'Ваша страна' + data.coutry);
               cosnole.log(data.coutry);
               await bot.sendMessage(chatId,'Ваша ваша улица' + data.street);
               console.log(data.street);
               co
               
                setTimeout(async () => {
                    await bot.sendMessage(chatId,'всю информацию вы получите в этом чате');
                }, 3000)
            } catch (e) {
                console.log('Error! - ', e)
            }
        }
    }
    console.log('ответ отправлен');
});