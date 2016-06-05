var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function (message) {
    if (message.content === "!cointoss") {
        var coin = (Math.floor(Math.random() * 2) === 0);
        if (coin) {
            mybot.reply(message, "heads!");
        }
        else {
            mybot.reply(message, "tails!");
        }
    }
    if (message.content.startsWith("!diceroll")) {
        var inputs = message.content.split(" ");
        if (inputs.length !== 3) {
            mybot.reply(message, "incorrect inputs!");
        }
        else{
            var sides = inputs[1];
            var die = inputs[2];
            mybot.reply(message, "Rolling " + die + " " + sides + " sided die!");
            var rolls = [];
            for (var i = 0, len = die; i < len; i++) {
                var roll = (Math.floor(Math.random() * sides));
                rolls.push(roll);
            }
            var results = rolls.join(" and ");
            mybot.reply(message, results);
        }
    }
});

mybot.loginWithToken("token");

