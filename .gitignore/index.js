const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready". function() {
    bot.user.setGame("BlameBot, B!help");
    console.log ("Le bot a bien ete connecte");
});

bot.login("NDIwMzAzMDI2NTc4OTE1MzY4.DX8tcg.oCro3-I_OZTv6mcdBLt1c6omPm0");
