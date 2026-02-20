const {Telegraf, Markup} = require('telegraf');
const askGemini = require('./gemini')
// token depuis telegram 

const bot = new Telegraf('8467145772:AAFZgnCzrTBsLG9vH0N9J1rjbICzcbokk6g')

// reponse de l'accueil 

// ajout de bouton interractif 

const bouton = Markup.inlineKeyboard(
    [
        [Markup.button.callback('salutation', 'HELLO')],
        [Markup.button.callback("demander de l'aide", 'HELP')],
        [Markup.button.callback('passer en mode IA' ,'IA')]
    ]
);

bot.start((ctx) => {  ctx.reply('Bienvenue sur le bot de Daniel TCHATO  veuillez choisir une option :', bouton)
                
});

// action que les buttons effectuera 

bot.action('HELLO', (ctx) =>{
    ctx.reply("Oui bienvenue sur le bot")
})

bot.action('HELP', (ctx) =>{
    ctx.reply('envoyer de message au developpeur @agaluzi')
})

bot.action('IA', (ctx) => {
    ctx.reply('Desolé mais je ne suis pas disponible pour le moment');
    bot.on('text', async (ctx) =>{
        const userMessage = ctx.message.text;
        const reply = await askGemini(userMessage)
        ctx.reply(reply)
    })
})


// reponse aux messages 

bot.on('text', (ctx) => ctx.reply(`tu as envoyer ce message ${ctx.text}`));

// ajout de command 

bot.command('help', (ctx) => ctx.reply('vous avez cliquez sur la commande help'))

// Lancer le bot

bot.launch();