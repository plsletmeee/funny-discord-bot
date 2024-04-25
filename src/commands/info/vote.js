const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const AvonCommand = require("../../structures/avonCommand");

class Vote extends AvonCommand{
    get name(){
        return 'vote'
    }
    get aliases(){
        return ['vot']
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){
        let em = new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.info} | Click [here](https://dsc.gg/codexdev) to [vote](https://dsc.gg/codexdev) me.`);
        let row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(`https://dsc.gg/codexdev`).setLabel(`Vote`)
        );
        return message.channel.send({embeds : [em] , components : [row]});
    }
}
module.exports = Vote;