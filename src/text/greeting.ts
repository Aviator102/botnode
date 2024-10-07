import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId, // Corrigido para 'reply_to_message_id'
  });

// Função de saudação
const greeting = () => async (ctx: Context) => {
  debug('Triggered "greeting" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name} ${ctx.message?.from.last_name}`;

  if (messageId) {
    await replyToMessage(ctx, messageId, `Hello, ${userName}!`);
  }
};

// Função para lidar com mensagens de texto
const handleTextMessages = () => async (ctx: Context) => {
  const messageText = ctx.message.text.toLowerCase(); // Converte a mensagem para minúsculas

  if (messageText === 'oi') {
    await ctx.reply('Como posso ajudar?'); // Responde com "Como posso ajudar?"
  }
};

// Exporta as funções
export { greeting, handleTextMessages };
