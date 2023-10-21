module.exports.config = {
	name: "dtai",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "dtai",
	description: "kho sex của bot",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async ({ event, api }) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
        var msg = `==「 𝗞𝗛𝗢 𝗟𝗜𝗦𝗧 𝟭𝟴+ 」==\n━━━━━━━━━━━━━━\n𝟭:𝗔̉𝗻𝗵 𝗡𝘂𝗱𝗲 𝗧𝗮̂́𝘁 𝗖𝗮̉ 𝗔̉𝗻𝗵 𝟭𝟴+ 𝗧𝗼̂̉𝗻𝗴 𝗛𝗼̛̣𝗽
𝟮:𝗣𝗵𝗶𝗺 𝗦𝗲𝘅 𝗧𝗶𝗸𝘁𝗼𝗸
𝟯:𝗣𝗵𝗶𝗺 𝗦𝗲𝘅 𝗖𝗮𝗽𝗰𝘂𝘁 𝟭𝟴+
𝟰:𝗣𝗵𝗶𝗺 𝗦𝗲𝘅 𝗧𝗼̂̉𝗻𝗴 𝗛𝗼̛̣𝗽 (𝗧𝗼̂̉𝗻𝗴 𝗛𝗼̛̣𝗽 𝗖𝗮́𝗰 𝗧𝗵𝗲̂̉ 𝗟𝗼𝗮̣𝗶)
𝟱:𝗔̉𝗻𝗵 𝗧𝗵𝗶̣𝘁 𝗡𝗵𝗮𝘂 𝟭𝟴+
𝟲:𝗔̉𝗻𝗵 𝟭𝟴+ 𝗧𝗿𝗲̂𝗻 𝗧𝗪
𝟳:𝗔̉𝗻𝗵 𝗧𝗿𝗮𝗶 𝗖𝘂 𝗧𝗼 𝟭𝟴+
𝟴:𝗔̉𝗻𝗵 𝗩𝘂́ 𝗢𝗿 𝗟𝗼̂̀𝗻 𝗞𝗵𝗼̂𝗻𝗴 𝗖𝗵𝗲
𝟵:𝗔̉𝗻𝗵 𝗚𝗮́𝗶 𝗠𝗼̂𝗻𝗴 𝗧𝗼(𝗖𝗼́ 𝗰𝗵𝗲 𝗼𝗿 𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗵𝗲)`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̛̀ 𝟏 𝐜𝐡𝐮́𝐭 𝐝𝐞̂̉ 𝐥𝐨𝐚𝐝 `, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 15000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 var name = await Users.getNameUser(event.senderID);
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐀̉𝐧𝐡 𝐧𝐮𝐝𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://image-random-api.dungkonuwu.repl.co/nude/?apikey=0bk3s6IAyq')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐬𝐞𝐱 𝐭𝐢𝐤𝐭𝐨𝐤 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://dtai2006.nguyenductai206.repl.co/tiktok20')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐜𝐚𝐩𝐜𝐮𝐭 𝟏𝟖+ 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://dtai2006.nguyenductai206.repl.co/capcut206')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
       case "4": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐬𝐞𝐱 𝐭𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://image-random-api.dungkonuwu.repl.co/videosex/?apikey=0bk3s6IAyq')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐀̉𝐧𝐡 𝐭𝐡𝐢̣𝐭 𝐧𝐡𝐚𝐮 𝟏𝟖+ 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apirandom.dungkonuwu.repl.co/dit')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "6": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐀̉𝐧𝐡 𝟏𝟖+ 𝐭𝐫𝐞̂𝐧 𝐭𝐰 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apirandom.dungkonuwu.repl.co/tw')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "7": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐀̉𝐧𝐡 𝐭𝐫𝐚𝐢 𝐜𝐮𝐭𝐨 𝟏𝟖+ 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://dtai2006.nguyenductai206.repl.co/cu2')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "8": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐀̉𝐧𝐡 𝐠𝐚́𝐢 𝐯𝐮́ 𝐥𝐨̂̀𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://image-random-api.dungkonuwu.repl.co/vu/?apikey=0bk3s6IAyq')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "9": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐀̉𝐧𝐡 𝐦𝐨̂𝐧𝐠 𝐝𝐢́𝐭 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://image-random-api.dungkonuwu.repl.co/images/mong')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́ 𝐝𝐞̂̉ 𝐱𝐞𝐦", event.threadID, event.messageID);
            	if (choose > 9 || choose < 1) return api.sendMessage("→ 𝐍𝐠𝐮 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢𝐞̂́𝐭 𝐧𝐡𝐚̣̂𝐩 𝐬𝐨̂́ 𝐚̀", event.threadID, event.messageID); 
    }
    }
}
}