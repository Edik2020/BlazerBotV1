const Commando = require('discord.js-commando');
const botconfig = require('./botconfig.json')
const Discord = require('discord.js');
const fetch = require('node-fetch');
const prefix = botconfig.prefix;

const bot = new Commando.Client({
    commandPrefix: (botconfig.prefix) // <== this is used to set the prefix of BlazerBot.
})

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on('ready',function(){
    console.log("Online!");
    bot.user.setActivity("with fire | bb/help", {type: 'PLAYING'})
})

//bot.on("guildMemberAdd", function(member)
//{
//    member.send("Welcome to the Discord!");
//    let memberRole = member.guild.roles.find("name", "Member");
//    member.addRole(memberRole);
//});

bot.on('message', function(message){
    if(message.content == 'bbHello?')
    {
        message.channel.sendMessage("I'm awake, I swear! [**Test Complete**]");
    }
    else if(message.content == "What's the current team?")
    {
        var teamInfo = new discord.RichEmbed()
            .setTitle("Current Team Members")
        for(var i = 0; i < currentTeamMembers.length; i++)
        {
            teamInfo.addField("Member " + (i+1).toString(),currentTeamMembers[i].username);
        }
        message.channel.send(teamInfo);
    }
    if(message.content == "DMtest")
    {
        message.member.send("This is a Test!");
    }
});

bot.on('message', async message => {
    let blacklisted = ['faggot', 'fag', 'nigger'];
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
      if (foundInText) {
        message.delete();
        message.channel.send('Message Deleted. That word is Blacklisted!');
      }
  
  })

  bot.on('message', async message => {
    if(message.content.startsWith(`${botconfig.prefix}setavatar`)) {
      let messageArray = message.content.split(" ");
      let command = messageArray[0]
      if(!command.startsWith(botconfig.prefix)) return;
      const args = messageArray.slice(1);
      let botmessage = args.join(" ");
      if(message.author.id !== '139213278571134977') return message.reply("Only Blazer can change my profile picture!");
      
      let image = message.attachments.first().url;
  
  
      bot.user.setAvatar(image);
  
      let iEmbed = new Discord.RichEmbed()
          .setAuthor('✅ Photo successfully Changed!')
          .setColor('#1E90FF')
          .addField("Thanks, Nathan!")
      message.channel.send(iEmbed)
  } 
  })

  bot.on("channelCreate", async channel => {
    var logs = channel.guild.channels.find(c => c.name === 'logs');
    if (!logs) return console.log("Can't find logs channel!");
    const cembed = new Discord.RichEmbed()
        .setTitle("Channel Created")
        .setColor("RANDOM")
        .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
        .setTimestamp(new Date());
    logs.send(cembed)
});

bot.on("channelDelete", async channel => {
    var logs = channel.guild.channels.find(c => c.name === 'logs');
    if (!logs) return console.log("Can't find logs channel!");
    const cembed = new Discord.RichEmbed()
        .setTitle("Channel Deleted")
        .setColor("RANDOM")
        .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
        .setTimestamp(new Date())
    logs.send(cembed)
});

bot.on('guildMemberAdd', member => {
    let logChannel = member.guild.channels.find('name', 'entry-log');
    
      let logEmbed = new Discord.RichEmbed()
      .setAuthor("Someone Joined! ^-^") 
      .setDescription(member.user.username + " (" + member.user.id + ")")
      .setColor('RANDOM')
      .setFooter("BlazerBot v1.5", member.user.displayAvatarURL)
      .setTimestamp()
      logChannel.send(logEmbed);
    })
    bot.on('guildMemberRemove', member => {
    let logChannel = member.guild.channels.find('name', 'entry-log');
    
      let logEmbed = new Discord.RichEmbed()
      .setAuthor("Someone Left! ;-;") 
        .setDescription(member.user.username + " (" + member.user.id + ")")
      .setFooter("BlazerBot v1.5", member.user.displayAvatarURL)
      .setColor('RANDOM')
      .setTimestamp()
      logChannel.send(logEmbed);
    })

bot.login(botconfig.ODA0MjU0OTUxMjE5MTM0NDY0.YBJqyg.lnSwmDeLT24tYkUDfYZR29qLKKY);
