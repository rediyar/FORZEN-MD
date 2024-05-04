const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94741897654")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/yasiyaofc1/FORZEN-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94741897654'
global.devs = '94760018802';
global.website = 'https://github.com/yasiyaofc1/FORZEN-MD' //wa.me/+94741897654
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/0b5a7839e8ee21874921e.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'FORZEN MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'M.R Rediya' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'FORZEN-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklRa3lKRjdnOURoUGZIaG4zS3NsbEtDbVF1MForeWNSNS9odU5KYjVGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjRtV2p3b3NLd0VnYWUzaGhzZUp5aTFQZ08rV20zSTFiMWQyT3pQWStVdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTXBvRXhHSHFOdndlWDNSU1dFZEtNeVVjNTRzN3Fkcm1FNGtOQnYvVFh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCNUZ5YjEvWjdranh5a2NJZHJycUdPeEh5NWJQeEdNQ3lFZmZ6UDY2dlZZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJRDU2TlAvY09Kbk1xQmxNTnR5UDVBdnlWcXNObklGUGJhek9GbWtEWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIvZU5QamhkVzJjRjVhTlpCMTJrUG9SNGY4enVBeWxLS3o4R2FUcnk4VU09In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiaU85dlVCMVhKSENhQ3FXREx4bWVycHQyTEJ2YUU5UVc1NUV2OVNYV2Q4ZTNFODNnOEloc0tCZy9NWUxld2JjNFJacXREYUtEYXB3czk3N1N6RUZDUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2LCJhZHZTZWNyZXRLZXkiOiJlNmxEKythdVBYWFVkdVdOc3hSK2pUb2JmWXRpc25EM3pLeGoyd01sT2FRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNblhxS3hBb1FHbTVCMWxXVkloWlFRIiwicGhvbmVJZCI6ImIyZDZhODM1LTZhOTAtNDAyYi1iMTdmLWE2ODhiZjQxYzE2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFNXQ5UTRtdWJSNjNBbmt4dnRHcHEraGNKN0E9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFMbmFvQjBkcE9JdDBBQ1FncmRta3k0bVJnYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lQZGpla0dFUG1OMmJFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVtYWNJRTlaZDkwdk1PTnc4Nk92WFZtZkZCSXN5cUdMbnN4L2k2VmtaUzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZEeXlhdTQvUy80REkvbnp0enlidWdBeFhpOUJhK3FWb1ZsbXFLZ3pGZWpRMXA1R2tiSWticmMvWmdMbURRZlh0dkwxNXZnUCtjTXhGTXRjUzM1cEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuZExEZzVvcDVaNjhHSmRjVVlDam9xUjVVUmxaQkM5NjNtVGt1NnpQN1pTZEdYbDhSbUR4ZzdHWUw2dTl2YVpaanFiTjNpdWFOOG40Rlk2SFhSYXlEUT09In0sIm1lIjp7ImlkIjoiOTQ3NDE4OTc2NTQ6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLT7wnZCMLvCdkJF8fCDwnZCR8J2QhPCdkIPwnZCI8J2QmPCdkIA8LSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTg5NzY1NDoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWSm1uQ0JQV1hmZEx6RGpjUE9qcjExWm54UVNMTXFoaTU3TWY0dWxaR1V2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0ODMzMTQ4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhyayJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'YASIYA OFC' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'FORZEN MD' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '112' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'FORZEN-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
