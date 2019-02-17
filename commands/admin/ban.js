const commando = require('discord.js-commando');

class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: '[ADMIN ONLY] Bans a player from the server.'
        });
    }

    async run(message, args)
    {
        let bannedUser = message.guild.member(message.mentions.users.first());
        if(!bannedUser)
        {
            message.channel.send("Sorry, I couldn't find that user!");
            return;
        }
        if(!message.member.hasPermission("BAN_MEMBERS"))
        {
            message.channel.send("You don't have the right privileges to ban others!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(bannedUser).ban(reason)
            .then(console.log)
            .catch(console.error);
    }  
}

module.exports = BanCommand;