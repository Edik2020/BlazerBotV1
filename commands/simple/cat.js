const commando = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require('node-fetch');

class CatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'simple',
            memberName: 'cat',
            description: 'Summons a pretty cat'
        });
    }

    async run(message, args, bot) {
        let getLink = function (link) {
            return new Promise(async (resolve, reject) => {
                fetch(link).then(r => r.json().then(json => resolve(json)))
            })
        }

        var cat = await getLink('http://aws.random.cat/meow');
        let embed = new Discord.RichEmbed()
            .setTitle("Whose a pretty kitty??")
            .setImage(cat.file)
            .setColor(`${message.member.displayHexColor}`)
        message.channel.send(embed)
    }
}

module.exports = CatCommand