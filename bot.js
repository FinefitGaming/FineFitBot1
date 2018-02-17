const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = ".";
const fs = require('fs');
const commando = require('discord.js-commando');
const bot = new commando.Client();

Client.on('ready', ()=>{
console.log("Online")
})

Client.on('message', (message)=>{
 if(!message.content.startsWith(prefix)) return;

if(message.content.startsWith(prefix + "Hi")){
message.channel.send("Hello.");



//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);

}

})
bot.login("NDEzMTUzNjk5MTc1NTk2MDU5.DWe9Fg.elvMUPYJZDYYO0Ke2MP-gMCp8Yk");
Client.login("NDEzMTUzNjk5MTc1NTk2MDU5.DWZotQ.kB8ggMIME8Cju7l5QP-es99dvzI");
