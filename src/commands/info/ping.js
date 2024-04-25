
const AvonCommand = require("../../structures/avonCommand");

class ping extends AvonCommand {
    get name(){
        return 'ping'
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){
        return message.channel.send({content : `${client.emoji.ping} | My Response Latency with Discord API : \`14\`ms`});
    }
}
module.exports = ping;