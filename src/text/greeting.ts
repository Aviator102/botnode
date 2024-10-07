import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN); // Usa a variável de ambiente

// Exemplo de comando para responder com um cumprimento
bot.start((ctx) => ctx.reply('Bem-vindo! Como posso ajudar?'));

// Exemplo de comando de saudação
const greeting = () => async (ctx) => {
    const userName = `${ctx.message?.from.first_name} ${ctx.message?.from.last_name}`;
    await ctx.reply(`Olá, ${userName}!`);
};

bot.on('text', greeting()); // Responde a mensagens de texto

// Inicia o bot
bot.launch();
