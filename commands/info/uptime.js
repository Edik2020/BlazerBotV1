const commando = require('discord.js-commando');
const hours = require('discord.js-commando');

class UptimeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'uptime',
            group: 'info',
            memberName: 'uptime',
            description: 'checks how long the bot has been online.'
        });
    }

    async run(message, args)
    {
        let uptime = `${hours} + ${minutes} + ${seconds}`;
        let totalSeconds = (bot.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
    }
}

module.exports = UptimeCommand;