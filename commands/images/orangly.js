const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const talkedRecently = new Set();
    if (talkedRecently.has(message.author.id)) {
          return;
    } else {
        let member = message.mentions.members.first() || message.member;
        message.channel.send({
          files: [{
            attachment: `https://www.arcadia-api.xyz/api/v1/orangly?url=${member.user.displayAvatarURL}`, 
            name: 'orangly.png' 
          }]
        })
    }
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 3000);
}

module.exports.help = {
    name: "orangly"
}