module.exports.config = {
	name: "main",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "dtai",
	description: "",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async ({ event, api }) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
        var msg = `==「 𝗠𝗔𝗜𝗡 𝗛𝗘̣̂ 𝗧𝗛𝗢̂́𝗡𝗚 」==
━━━━━━━━━━━━━━
𝟭:𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗰𝗵𝗮̣𝘆 𝗹𝗮̣𝗶 𝗯𝗼𝘁
𝟮:𝗧𝗮̆́𝘁 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗯𝗼𝘁`
                return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://sumiproject.space/images/girl')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
                  setTimeout(() => {api.unsendMessage(info.messageID) } , 10000)
          
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
  const request = require("request");
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 var name = await Users.getNameUser(event.senderID);
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
	var time = "1"
	var rstime = "1";
	if (!time) rstime = "1";
	else rstime = time;
	return setTimeout(() => { api.sendMessage("[𝗕𝗼𝘁] => 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗥𝗲𝗹𝗼𝗮𝗱 𝗕𝗼𝘁 !",event.threadID,() => process.exit(1) )},	rstime * 1000);
        }
break;

        case "2": {
    api.sendMessage("Done,Tiến hành tắt hệ thống bot!",event.threadID, () =>process.exit(0))
}
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́ ", event.threadID, event.messageID);
            	if (choose > 2 || choose < 1) return api.sendMessage("→ 𝐒𝐨̂́ 𝐛𝐚̣𝐧 𝐧𝐡𝐚̣̂𝐩 𝐡𝐢𝐞̣̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐭𝐫𝐞̂𝐧 𝐝𝐚̂𝐲", event.threadID, event.messageID); 
    }
    }
}
}