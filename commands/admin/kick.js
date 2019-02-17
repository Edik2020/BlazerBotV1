const commando = require('discord.js-commando');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: '[ADMIN ONLY] Kicks a player from the server.'
        });
    }

    async run(message, args)
    {
        let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            message.channel.send("**Sorry, I couldn't find that user!**");
            return;
        }
        if(!message.member.hasPermission("KICK_MEMBERS"))
        {
            message.channel.send("**You don't have the right privileges to kick others!**");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason)
            .then(console.log)
            .catch(console.error);
    }  
}

module.exports = KickCommand;