const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_04_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDMxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTW5uVTlOOHl0QmwyVlIwZFZoNXVTSitKZk1OMXB5RXpYSVZkWWw5VWtkZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYkc0Q0gwUnVUVU9QRDZVUE5JdlA5UVwiLFxuICBcInBob25lSWRcIjogXCJiNTAzMTMyOS0xMjQyLTQ5NTctYjhlZi02ZGQzM2QzYmU4NWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgNzYsXG4gICAgICAyMjYsXG4gICAgICAxMjMsXG4gICAgICA0OSxcbiAgICAgIDIyNyxcbiAgICAgIDk1LFxuICAgICAgNTgsXG4gICAgICAxMTAsXG4gICAgICA5OSxcbiAgICAgIDI1NSxcbiAgICAgIDIwNCxcbiAgICAgIDI0OCxcbiAgICAgIDEyLFxuICAgICAgMTMsXG4gICAgICAxNzUsXG4gICAgICA5MixcbiAgICAgIDIzLFxuICAgICAgMjI0LFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDIxOSxcbiAgICAgIDE3NCxcbiAgICAgIDg0LFxuICAgICAgODIsXG4gICAgICAxNTYsXG4gICAgICAyNDMsXG4gICAgICAxNjEsXG4gICAgICAxMjcsXG4gICAgICA0NyxcbiAgICAgIDYzLFxuICAgICAgMTQ1LFxuICAgICAgMjMxLFxuICAgICAgMTY1LFxuICAgICAgMTkyLFxuICAgICAgMjM3LFxuICAgICAgNjcsXG4gICAgICAyMzYsXG4gICAgICAyMTcsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTRCVzlUOE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5MzI1MDA2NToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY0NTQ5MDEzOTI5OTkyOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0szRXBJa0ZFTXFkcGJRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVGRINXRhbUFacC9kSlZwVHRJZFpZelhvbldCc244TmdZV3VmMmZNYW5tMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaWVdJZG9XQjQrcEk4QmVlSjZoZU9DS21DQWsyYzFJRHI1WkxVaVJVakVhMVZrK2VyQTY0ME1aSzY5cU15ZkxEaGo3MEw1a1Z3R1FGVFZPUHRUNE5CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4N0hXUlVBV0RRMWdZTE55cnlybDl0ZysvLzRzV1BEOGVPeVllMlNwNlhyQ2xTaVR2TEVla1NIVGpuNFRYT2Y3YXNuVVhkUkF1NjY0V2V1a0xxMWxoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTMyNTAwNjU6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjc0NjM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEsrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSysuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIveUI1c0hHdjJubS9MSHo4UGVrQUZuR2U1S3lUcmw0Q3JNMXFReHlkV0lVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNjE2NTAyMjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
