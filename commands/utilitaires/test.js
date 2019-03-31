const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var test = new Discord.RichEmbed()
        .setDescription("<:database:509825961944940554> **Le serveur est bien en ligne actuellement.**")
        .setColor("#00FF00")
    message.channel.send(test)
}

module.exports.help = {
    name: "test"
}