const Discord = require('discord.js')
const {PREFIX} = require('../config.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\`${PREFIX}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır.**
\`${PREFIX}atla\` : **Sıradaki Şarkıyı atlar.**
\`${PREFIX}döngü\` : **O Anki şarkıyı Hep tekrarlar.**
\`${PREFIX}durdur\` : **O anki Şarkıyı Durdurur.**
\`${PREFIX}devam\` : **Duran Şarkıyı Devam Ettirir.**
\`${PREFIX}sıra\` : **O Anki Sırayı Gösterir.**
\`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**
[Destek Sunucum](https://discord.gg/zAvGptrS8T) , [Davet Linkim](https://discord.com/api/oauth2/authorize?client_id=830862302026137640&permissions=8&scope=bot)


`)
                      )    
}
}
