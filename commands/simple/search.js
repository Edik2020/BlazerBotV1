const commando = require('discord.js-commando');
const encode = require('strict-uri-encode');
 
class SearchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'search',
            group: 'simple',
            memberName: 'search',
            description: 'Summons a search'
        });
    }

    async run(message, args, bot) {
 

  let question = encode(args.join(' '));
 
  // Now, we can form the link.
  let link = `https://www.google.com/search?biw=1920&bih=937&source=hp&ei=r6xXXPG3AanTjwTWkYW4BQ&q=${question}`;
 
  // Output to chat
  message.channel.send(`**<${link}>**`);
 
}
}

module.exports = SearchCommand