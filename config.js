//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "263710264014" 
global.namaCreator = "YUNGTEE"
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.𝟏' 
global.codeInvite = "https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e"
global.isLink = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝖑𝖔𝖗𝖉 𝖈𝖍𝖎𝖇𝖚𝖊𝖟𝖊" 
global.author = "LIGHT" 
global.jumlah = "5" 
global.namabot = "DEATH" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
e.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
