from telebot import TeleBot
from telebot import types
import random

TOKEN = "5488444855:AAHZE9wf1OhMSnMkBIKKaR6XypA8P2BVCns"

bot = TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def onStart(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    markup.add('Random_number')
    bot.send_message(message.chat.id, 'I am Artem - the best thing you might know', reply_markup=markup)

@bot.message_handler(content_types='text')
def OnTextSending(message):
    x = random.randint(1, 100)
    bot.send_message(message.chat.id, x)

if __name__ == '__main__':
    bot.infinity_polling()