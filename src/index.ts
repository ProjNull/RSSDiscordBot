import { REST } from '@discordjs/rest';
import { WebSocketManager } from '@discordjs/ws';
import { GatewayDispatchEvents, GatewayIntentBits, InteractionType, MessageFlags, Client, ApplicationCommandsAPI, API, APIEmbed } from '@discordjs/core';
import { EmbedBuilder } from '@discordjs/builders';
import Parser from 'rss-parser';
import { app, channels } from './config';
import feed_compose from './feeds/feed_compose';
const token = app.token
// Create REST and WebSocket managers directly
const rest = new REST({ version: '10' }).setToken(token);



const gateway = new WebSocketManager({
	token,
	intents: GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent,
	rest,
});

// Create a client to emit relevant events.
const client = new Client({ rest, gateway });


client.api.applicationCommands.createGlobalCommand(app.id,{
    name:"updatefeed",
    description:"Force update",
})

client.api.applicationCommands.createGlobalCommand(app.id,{
    name:"channelid",
    description:"Shows channel id (for configuration)",
})

// Listen for interactions
// Each event contains an `api` prop along with the event data that allows you to interface with the Discord REST API
// client.on(GatewayDispatchEvents.MessageCreate, async ({api,data}) => {
// 	if (data.content == "") {
//         api.channels.createMessage(data.channel_id,{content: "hello"})
		
// 	}
//     console.log(data.content)
// });


client.on(GatewayDispatchEvents.InteractionCreate, async ({ data: interaction, api }) => {
	if (interaction.type == InteractionType.ApplicationCommand) {


        if (interaction.data.name == 'updatefeed') {
            if (app.helpCommands) {
                UpdateFeed(api)
                api.interactions.reply(interaction.id,interaction.token,{content:"Updating", flags: MessageFlags.Ephemeral })
            } else {
                api.interactions.reply(interaction.id,interaction.token,{content:"Commands are disabled!", flags: MessageFlags.Ephemeral })
            }
            
        }

        if (interaction.data.name == 'channelid') {
            if (app.helpCommands) {
                api.interactions.reply(interaction.id,interaction.token,{content: interaction.channel.id, flags: MessageFlags.Ephemeral })
            } else {
                api.interactions.reply(interaction.id,interaction.token,{content:"Commands are disabled!", flags: MessageFlags.Ephemeral })
            }
        }

    }
});


function shortstring(string: string) {
    return string.substring(0,240) + '...'
  }



let parser = new Parser()

const createembed = new EmbedBuilder()

const UpdateFeed = async (api:API) => {
    let feeds = await feed_compose()
           

        channels.forEach(async (channel) => {
            let messages = (await api.channels.getMessages(channel)).reverse()
            let botmessages = messages.filter(msg => msg.author.bot)
            console.log(botmessages)
            let embedTitles: string[] = []
            botmessages.forEach((message) => {
                    message.embeds.forEach((embeddata) => {
                        if (embeddata.title) {
                            if (!(embedTitles.indexOf(embeddata.title) > -1)){
                                embedTitles.push(embeddata.title)
                                
                            }
                        }
                    })
            })
            console.log(embedTitles)
            let embeds: APIEmbed[] = []
            feeds.forEach((feed)=> {

                feed.data.forEach((item) =>{
                    if (item.title && item.content && item.link) {
                            if (!(embedTitles.indexOf(item.title) > -1)) {
                                if (!feed.icon) feed.icon = undefined
                                if (!item.author) item.author = "Unknown"
                                if (!item.image) item.image = null
                                embeds.push(
                                    createembed.setTitle(item.title)
                                    .setURL(item.link)
                                    .setDescription(shortstring(item.content))
                                    .setImage(item.image)
                                    .setAuthor({ name: item.author, iconURL: ("https://api.multiavatar.com/"+ item.author.replaceAll(" ","") +".png?apikey=" + app.avatarApiKey) })
                                    .setFooter({text: feed.name, iconURL: feed.icon})
                                    .toJSON())
                                
                            }
                        }
                })
            })
            console.log(embeds[3])
            if (embeds.length > 0) {
                const chunkSize = 10;
                for (let i = 0; i < embeds.length; i += chunkSize) {
                    const chunk = embeds.slice(i, i + chunkSize);
                    api.channels.createMessage(channel, {embeds: chunk, content: ""})
                }
                
            }
            


            
            

    })
}



// Listen for the ready event
client.once(GatewayDispatchEvents.Ready, ({api}) => {
    if (app.initMessage) {
        channels.forEach(async (channel) => {
            let embed = createembed.setTitle("Init").setDescription("Config:\nAuto Updates: "+ app.enableAutoUpdate + "\nAuto Update Interval: " + app.autoUpdateInterval  + "\nHelp commands: " + app.helpCommands).toJSON()
            await api.channels.createMessage(channel, {embeds: [embed]}) 
        })
    }
    
    
    if (app.enableAutoUpdate) {
        UpdateFeed(api)
        setInterval(async () => {
            UpdateFeed(api)
        }, app.autoUpdateInterval)
    }
    
   
    

    console.log('Ready!')
});

// Start the WebSocket connection.
gateway.connect();