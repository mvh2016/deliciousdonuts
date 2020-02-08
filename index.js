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
            .addField('`/trainingstart`', 'Sends the starting announcement for a training.', false)
            .addField('`/trainingend`', 'Sends the ending message for a training.', false)

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

    if (message.content.startsWith(`${prefix}trainingstart`)) {
        if (message.member.roles.has('674766572014796818')) {
            var person = message.author
            const tStart = new discord.RichEmbed()
                .setTitle(':mega: Delicious Donuts Training Session Starting :mega:')
                .setDescription('**On behalf of the Delicious Donuts Management team, '+message.author+' is hosting a training right now!**\n\n↣ Promotions will be handled for dedicated and professional staff members!\n↣ LRs and MRs are getting the higher possibility to be promoted.\n↣ HRs and SRs are welcomed to oversee and a deal with problems.\n\n ')
                .setAuthor(message.member.displayName, person.avatarURL)
                .addField('**:link: Join Link :link:**', 'https://www.roblox.com/games/4616568591/Delicious-Donutss', false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            trainingChannel = client.channels.get('675375395738222609')
            trainingChannel.send(tStart)
            trainingChannel.send('@here')
            message.channel.send(':white_check_mark: Announcement has been pushed, '+message.author)
        }
        else {
            message.channel.send(':warning: You are missing the required permissions (Event Host role required) '+message.author)

        }
    }

    if (message.content.startsWith(`${prefix}trainingend`)) {
        if (message.member.roles.has('674766572014796818')) {
            var person = message.author
            const tEnd = new discord.RichEmbed()
                .setTitle(':mega: Delicious Donuts Training Session Ended :mega:')
                .setDescription('**On behalf of the Delicious Donuts Management team, '+message.author+' is hosting a training right now!**\n\n↣ Promotions will be handled for dedicated and professional staff members!\n↣ LRs and MRs are getting the higher possibility to be promoted.\n↣ HRs and SRs are welcomed to oversee and a deal with problems.\n\n ')
                .setAuthor(message.member.displayName, person.avatarURL)
                .addField('**:link: Join Link :link:**', 'https://www.roblox.com/games/4616568591/Delicious-Donutss', false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            trainingChannel = client.channels.get('675375395738222609')
            trainingChannel.send(tEnd)
            message.channel.send(':white_check_mark: Announcement has been pushed, '+message.author)
        }
        else {
            message.channel.send(':warning: You are missing the required permissions (Event Host role required) '+message.author)
        }
    }

    if (message.channel.id === '675375517721165825') {
        if (message.content.startsWith('^^')) {
            ;
        }
        else {
            if (message.author.id != '674722017659846657') {
                if (message.member.roles.has('674766572014796818')) {
                    var splitLog = message.content.split('\n')
                    if (splitLog.length === 5) {
                        try {
                            var hostName = splitLog[0].split(': ')
                            var attendees = splitLog[1].split(': ')
                            var length = splitLog[2].split(': ')
                            var extraPts = splitLog[3].split(': ')
                            var proof = splitLog[4].split(': ')
                        }
                        catch {
                            message.channel.send(message.author+' It appears you did not input an argument! Make sure all fields are filled.')
                        }
                        if (hostName[0] != 'Host') {
                            message.react('❌')
                            message.channel.send(message.author+'\n**Declined** \nTry "Host:" instead of '+'"'+hostName[0]+':"')
                        }
                        else {
                            if (attendees[0] != 'Attendees') {
                                message.react('❌')
                                message.channel.send(message.author+'\n**Declined** \nTry "Attendees:" instead of '+'"'+attendees[0]+':"')
                            }
                            else {
                                if (length[0] != 'Length') {
                                    message.react('❌')
                                    message.channel.send(message.author+'\n**Declined** \nTry "Length:" instead of '+'"'+length[0]+':"')
                                }
                                else {
                                    if (extraPts[0] != 'Extra Points') {
                                        message.react('❌')
                                        message.channel.send(message.author+'\n**Declined** \nTry "Extra Points:" instead of '+'"'+extraPts[0]+':"')
                                    }
                                    else {
                                        if (proof[0] != 'Proof') {
                                            message.react('❌')
                                            message.channel.send(message.author+'\n**Declined** \nTry "Proof:" instead of '+'"'+proof[0]+':"')
                                        }
                                        else {
                                            const logEmbed = new discord.RichEmbed()
                                                .setTitle('**:pencil: DD Event Log :pencil:**')
                                                .setDescription('DD High Command are to check the proof and all other variables of this event log.')
                                                .addField('Host', hostName[1], false)
                                                .addField('Attendees', attendees[1], false)
                                                .addField('Length of Event', length[1], false)
                                                .addField('Extra Points (for those who did well)', extraPts[1], false)
                                                .addField('Proof', proof[1], false)
                                                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
                                            var finalChannel = client.channels.get('675721032727920665')
                                            finalChannel.send('<@&666328391208927266> \nA new event log has passed its formatting check, belonging to '+message.member.displayName+'. Please review it.')
                                            finalChannel.send(logEmbed)
                                            message.channel.send(message.author+' Your log has been accepted! Wait for HC to review it.')
                                            message.react('✅')
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        message.channel.send(message.author+'\n**Declined**\n**'+splitLog.length+'** lines submitted, **5** lines expected. Make a new line with SHIFT+ENTER.')
                    }   
                }
                else {
                    message.channel.send(':warning: You are missing the required permissions (Event Host role required) '+message.author)
                }
            }
        }
    }
})

client.login(token)
