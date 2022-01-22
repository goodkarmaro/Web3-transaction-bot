const reply = (client, trigger, reply) => {

    client.on('messageCreate', (message) => {

        if (message.content === trigger) { 
            message.reply({
                content: reply
            })
        }

    })

}

export default reply;