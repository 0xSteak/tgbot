const TelegramApi = require('node-telegram-bot-api');
const fs = require('fs');

const token = '6701162065:AAGhll9USuE4vZrCE_ZzMp9-bXsa0OQgThs';

const bot = new TelegramApi(token, {polling: true})

bot.on('chat_join_request', request => {
    bot.approveChatJoinRequest(request.chat.id, request.user_chat_id)
    console.log('joined user')
})

bot.on('message', msg => {
    if (msg.text == 'test') {
        bot.sendMessage(msg.chat.id, 'a')
    }
})

console.log('bot enabled')