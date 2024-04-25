const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const AvonCommand = require("../../structures/avonCommand");

class Invite extends AvonCommand{
    get name(){
        return 'invite'
    }
    get aliases(){
        return 'inv'
    }
    get cat(){
        return 'info';
    }
    async run(client,message,args,prefix)
    {
        let e = new EmbedBuilder().setColor(client.config.color).setDescription(`Click [here](https://discord.com/oauth2/authorize?client_id=1080778721507672094&permissions=8&scope=bot%20applications.commands) to [invite](https://discord.com/oauth2/authorize?client_id=1080778721507672094&permissions=8&scope=bot%20applications.commands) me`);
        let r = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(`https://discord.com/oauth2/authorize?client_id=1080778721507672094&permissions=8&scope=bot%20applications.commands`).setLabel(`Invite`)
        )
        return message.channel.send({embeds : [e] , components : [r]});
    }
}
module.exports = Invite;