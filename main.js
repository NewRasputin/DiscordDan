var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function (message) {
    var adminid = message.channel.server.roles.get("name", "Admin").id;
    if (message.author.hasRole(adminid)) {
        //admin commands
    }
    if (message.content === "!admin") {
        if (message.author.hasRole(adminid)) {
            mybot.sendMessage(message.channel, "Whoah " + message.author + ", it is looking like you are an administrator my dude!");
        }
        else  {
            
        }
    }
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
            mybot.reply(message, "rolls " + die + " " + sides + " sided die!");
            var rolls = [];
            for (var i = 0, len = die; i < len; i++) {
                var roll = (Math.floor(Math.random() * (sides - 1)+ 1 ));
                rolls.push(roll);
            }
            var results = rolls.join(" and a ");
            mybot.reply(message, "rolled a " + results + ".");
        }
    }
    if (message.content === "!help") {
        mybot.sendMessage(message, "     ------------------- Discord Dan -------------------     \n     !cointoss --------------------------- Flip a coin!\n     !diceroll <# of sides> <# of die> --- Rolls die!\n     ");
    }
});

mybot.loginWithToken("token");