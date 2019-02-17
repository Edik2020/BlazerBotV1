const commando = require('discord.js-commando');
const discord = require('discord.js');

class BotInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'info',
            memberName: 'info',
            description: 'Learn a little more about me!'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle("__Information About BlazerBot__")
            .addField("About me:", "I was made to help people do many things!")
            .addField("Developed By:", "Blazer178")
            .addField("Version:", "1.5")
            .setColor(0x00FFFF)
            .setThumbnail("https://i.imgur.com/ulMm4x1.png")
            .setFooter("Contact @Blazer178#3381 if you experience errors!")

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = BotInfoCommand;