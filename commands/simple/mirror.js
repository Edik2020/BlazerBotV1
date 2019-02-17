const commando = require('discord.js-commando');

class MirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'Look at your reflection!'
        });
    }

    async run(message, args)
    {
        message.channel.sendMessage(message.author.avatarURL);
    }
}

module.exports = MirrorCommand;