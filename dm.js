const dm = (client, trigger, dm) => {

    client.on('messageCreate', (message) => {
        if (message.content === trigger) {
            message.author.send(dm)
        } 
    })
}

export default dm;