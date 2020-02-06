const discord = require('discord.js');
const prefix = '/'
const token = process.env.token
const client = new discord.Client();

client.once('ready', () => {
    console.log('Bot is ready')
    client.user.setActivity('Delicious Donuts', { type: "WATCHING" })
})

client.on('message', message => {

    // Events channel

    const eventChannel = client.channels.get('674728539265695765')

    // Donuts suck thing

    var lowercase = message.toString().toLowerCase();
    if (lowercase === 'donuts suck') {
        message.channel.send('No u')
    }
    
    // Commands

    if (message.content.startsWith(`${prefix}commands`)) {
        const helpEmbed = new discord.RichEmbed()
            .setTitle('Delicious Donuts - Command List')
            .setDescription('Gives you a list of commands that I accept!')
            .addField('`/rscheck`', 'Sends an event check announcement for a recruitment session.', false)
            .addField('`/rsstart <starting time and timezone>`', 'Sends the starting announcement for a recruitment session. \nMake sure to add the starting time and timezone as an argument, i.e. \n/rsstart 18:00 EST', false)
            .addField('`/rsend`', 'Sends the ending message for a recruitment session.', false)
        message.author.send(helpEmbed)
        message.channel.send('Check your DMs, '+message.author)
        message.react('✅')
    }

    // RS Check

    if (message.content.startsWith(`${prefix}rscheck`)) {
        if (message.member.roles.has('674766572014796818')) {
            const rsCheck = new discord.RichEmbed()
                .setTitle(':doughnut: DD Recruitment Session :doughnut:')
                .setDescription('React with a :white_check_mark: for a recruitment session!')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            eventChannel.send(rsCheck)
            message.channel.send(':white_check_mark: Event check message successfully pushed, '+message.author)
        }
        else {
            message.channel.send(':warning: You are missing the required permissions (Event Host role required) '+message.author)
        }
    }

    // RS Start

    if (message.content.startsWith(`${prefix}rsstart`)) {
        if (message.member.roles.has('674766572014796818')) {
            try {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const rsStart = new discord.RichEmbed()
                    .setTitle(':alarm_clock: Recruitment Session Scheduled :alarm_clock:')
                    .setDescription('A recruitment session is starting.')
                    .addField('Host', message.author, false)
                    .addField('Starting At', finalArg, false)
                    .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
                eventChannel.send(rsStart)
                message.channel.send(':white_check_mark: Announcement has been pushed, '+message.author)
            }
            catch {
                message.channel.send(':x: Message was not able to be pushed. Perhaps you didn\'t include the time argument? '+message.author)
            }
        }
        else {
            message.channel.send(':warning: You are missing the required permissions (Event Host role required) '+message.author)
        }
    }

    // RS End

    if (message.content.startsWith(`${prefix}rsend`)) {
        if (message.member.roles.has('674766572014796818')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const rsStart = new discord.RichEmbed()
                .setTitle(':doughnut: Recruitment Session Ended :doughnut:')
                .setDescription('The recruitment session has ended. Thank you to those who attended.')
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            eventChannel.send(rsStart)
            message.channel.send(':white_check_mark: Announcement has been pushed, '+message.author)
        }
        else {
            message.channel.send(':warning: You are missing the required permissions (Event Host role required) '+message.author)
        }
    }
})

client.login(token)
