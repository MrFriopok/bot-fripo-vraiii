const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjQ1NjUyODU3MTI2NzgwOTQx.XdF6eQ.0LxbM5WtMPHfqA3dPbT7ty3Jcnc");

client.on("message" , message =>{
    if(!message.guild) return
    if(message.content === prefix + "hello"){
        message.channel.send("Coucou toi " + message.author + "!")
    }
});

client.on("message" , message =>{
    if(!message.guild) return
    if(message.content === prefix + "pingouin"){
        message.channel.send("*Cri du pingouin*")
    }
});

client.on("message" , message =>{
    if(!message.guild) return
    if(message.content === prefix + "blague"){
        message.channel.send("Quel est le sport le plus silancieux ? Le Parachuuuuut :joy:")
    }
});

client.on("message" , message =>{
    if(!message.guild) return
    if(message.content === prefix + "blad"){
        message.channel.send(message.author + "désire se battre contre toi, il va y avoir du rififi ! ")
    }
});

client.on("message" , message =>{
    if(!message.guild) return
    if(message.content === prefix + "cœur"){
        message.channel.send("Sache que sur ce serveur tout le monde t'adore :heart: !!")
    }
});

client.on("message" , message =>{
    if(!message.guild) return
    if(message.content === prefix + "vidéodrive"){
        message.channel.send("FORMIDABLEUH VIDEO DRIIIIIVE DES TEMPS NOUVEAAAAUUUUX... Désolé..")
    }
});
