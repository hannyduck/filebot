module.exports.config = {
    name: "treobot",
    version: "1.0.0", 
    hasPermssion: 2,
    credits: "dtai",
    description: "cmm beo",
    commandCategory: "Sex",
    usages: "",
    cooldowns: 5,
    depndencies: {
        "axios": ""
    }
};

 module.exports.run = async function ({ api, event,args,client,Users,Threads,__GLOBAL,Currencies }) {
    const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   const chalk = require('chalkercli');
  const moment = require("moment-timezone"); 
   const permission = ["100072782650649"];
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss • D/MM/YYYY");
    const threadInfo = await api.getThreadInfo(event.threadID)
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  if(config.status == true)
  var username = process.env.REPL_OWNER
      if(username !== undefined) {
    var urlRepl = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
        connectUptime(urlRepl, config.name);
  };
  const rainbow = chalk.rainbow(`
◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆                  🤖 𝐓𝐑𝐄𝐎 𝐁𝐎𝐓 🤖
✅ 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐓𝐫𝐞𝐨 𝐁𝐨𝐭 𝐓𝐚̣𝐢 𝐋𝐢𝐧𝐤: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co
 ◆━━━━━━━━━━━━━━◆『𝑫𝒕𝒂𝒊 𝒄𝒖𝒕𝒊』◆━━━━━━━━━━━━━━◆`).stop();
rainbow.render();
const frame = rainbow.frame();
console.log(frame);
        var data = await global.utils.getContent(`https://dtai206.nguyenductai206.repl.co/uptimerobot/add?url=${urlRepl}`)
    let uptimedtai = data.data.error;
    var name = await Users.getNameUser(event.senderID);
    var tai = event.senderID;
 api.sendMessage({
      body:  `🤖==== [ 𝐓𝐑𝐄𝐎 𝐁𝐎𝐓 ] ====🤖
━━━━━━━━━━━━━\n✅𝐓𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐝𝐚̃ 𝐭𝐫𝐞𝐨 𝐛𝐨𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${gio}\n⚙️𝐓𝐢̀𝐧𝐡 𝐭𝐫𝐚̣𝐧𝐠: ${uptimedtai}\n𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 “👍” 𝐝𝐞̂̉ 𝐭𝐫𝐞𝐨 𝐛𝐨𝐭 𝐛𝐚̆̀𝐧𝐠 𝐚𝐩𝐢 𝐮𝐩𝐭𝐢𝐦𝐞𝐫𝐨𝐛𝐨𝐭 𝐭𝐫𝐞̂𝐧 𝐫𝐞𝐩𝐥𝐢𝐭 𝐡𝐚𝐜𝐤𝐞𝐫!\n https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-v.vinh-05.repl.co/images/canh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
    const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   const chalk = require('chalkercli');
const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss • D/MM/YYYY");
if(config.status == true)
  var username = process.env.REPL_OWNER
      if(username !== undefined) {
    var urlRepl = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
        connectUptime(urlRepl, config.name);
  };
  const rainbow = chalk.rainbow(`◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆                   🤖 𝐓𝐑𝐄𝐎 𝐁𝐎𝐓 🤖
✅ 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐓𝐫𝐞𝐨 𝐁𝐨𝐭 𝐕𝐢𝐩 𝐓𝐚̣𝐢 𝐋𝐢𝐧𝐤: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co
◆━━━━━━━━━━━━━━◆『𝑫𝒕𝒂𝒊 𝒄𝒖𝒕𝒊』◆━━━━━━━━━━━━━━◆`).stop();
rainbow.render();
const frame = rainbow.frame();
console.log(frame);
        var data = await global.utils.getContent(`https://dtai206.nguyenductai206.repl.co/uptimerobot/add?url=${urlRepl}`)
    let uptimedtai = data.data.error;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.sendMessage({
      body: `🤖====「 𝐓𝐑𝐄𝐎 𝐁𝐎𝐓 」====🤖\n━━━━━━━━━━━━━\n✅𝐓𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐝𝐚̃ 𝐭𝐫𝐞𝐨 𝐛𝐨𝐭 𝐛𝐚̆̀𝐧𝐠 𝐚𝐩𝐢 𝐮𝐩𝐭𝐢𝐦𝐞𝐫𝐨𝐛𝐨𝐭 𝐭𝐫𝐞̂𝐧 𝐫𝐞𝐩𝐥𝐢𝐭 𝐡𝐚𝐜𝐤𝐞𝐫!\n⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${gio}\n⚙️ 𝐓𝐢̀𝐧𝐡 𝐭𝐫𝐚̣𝐧𝐠: ${uptimedtai}\n https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-v.vinh-05.repl.co/images/canh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
   
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }