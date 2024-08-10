const fs = require('fs')
const chalk = require('chalk')

// BOT-INFO
global.botName = "ZHNZK"
global.ownerName = "𐏓꯭. ᬊ͜͡𝑹Σ𝑯𝑴𝑨𝑵ꫂ⃟🇵🇰 ³"
global.botNumber = "+923408862774"
global.devNumber = ["+923408862774"]

// ADMIN-PANEL
global.locID = "1" // Jangan Diganti
global.eggID = "15" // Jangan Diganti
global.domain = "https://example.com" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "𐏓꯭. ᬊ͜͡𝑹Σ𝑯𝑴𝑨𝑵ꫂ⃟🇵🇰 ³" // Ganti Nama Store Atau nama Host Lu

// BOT-SETTING
global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
