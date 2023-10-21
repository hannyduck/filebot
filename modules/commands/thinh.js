module.exports.config = {
  name: "thính",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "dtai", //bố m đã bỏ công ra ngồi làm thì đừng có đổi credits
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "thả thính khi dùng lệnh",
    cooldowns: 5
};
module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
  const axios = require('axios');
 const request = require('request');
 const fs = require("fs-extra");
const moment = require("moment-timezone"); 
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  if (!event.body) return;
  var { threadID, messageID } = event;
  const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
  if (event.body.toLowerCase().indexOf("thính") == 0) {
    //getPrefix
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("Thính")) ? threadSetting.PREFIX : global.config.PREFIX;
  const admins = global.config.ADMINBOT;
    const { commands } = global.client;
    var thinh = (await axios.get(`https://apivip.nguyenlienmanh.com/text/thinh`)).data.data;
  var i = 1;
  var msg = [];
  var msg = []
    for(var a of admins) {
    if (parseInt(a)) {
    var name = await Users.getNameUser(a);
      msg.push(`${i++}. ${name}`);
    }
    }
    api.sendMessage({body:`====「 𝐀𝐔𝐓𝐎 𝐂𝐀̂𝐔 𝐓𝐇𝐈́𝐍𝐇 」 ====\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n⏰𝗧𝗶𝗺𝗲: ${gio}\n🗓𝐓𝐡𝐮̛́: ${thu}\n————————————————————\n💞𝐂𝐚̂𝐮 𝐭𝐡𝐢́𝐧𝐡 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲: ${thinh}\n————————————————————\n❤️𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐭𝐚́𝐧 𝐝𝐨̂̉ 𝐜𝐫𝐮𝐬𝐡 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱`},event.threadID, event.messageID);
  }
};
module.exports.run = () => {};