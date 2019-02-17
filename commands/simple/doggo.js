const commando = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require('node-fetch');

class DoggoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'doggo',
            group: 'simple',
            memberName: 'doggo',
            description: 'Summons a good boi'
        });
    }

    async run(message, args, bot) {
        let getLink = function (link) {
            return new Promise(async (resolve, reject) => {
                fetch(link).then(r => r.json().then(json => resolve(json)))
            })
        }

        var dog = await getLink('https://dog.ceo/api/breeds/image/random');
        let embed = new Discord.RichEmbed()
            .setTitle("Whose a good boii?")
            .setImage(dog.message)
            .setColor(`${message.member.displayHexColor}`)
        message.channel.send(embed)
    }
}

module.exports = DoggoCommand