//to start type in console: 'node .', to end control+c

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY5OTU0MDU4MTM5OTkyMTA1.XinWiA.fWWBkj_PZU3bhpe50D6gGUjmVUY';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', msg=>{
    if (msg.content === "Hello") {
        msg.reply('Hello World!');
    }
})

bot.login(token);
