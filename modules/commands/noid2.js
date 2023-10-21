module.exports.config = {
  name: "uid",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo Mod By Dũngkon", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "xem uid ",
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
        var getlink = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data;
        var day = getlink.data.date
  if (event.body.toLowerCase().indexOf("uid") == 0) {
    //get noprefix
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("Uid")) ? threadSetting.PREFIX : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	anh = Math.floor(time / (60 * 60)),
		      la = Math.floor((time % (60 * 60)) / 60),
		      dtai = Math.floor(time % 60);
  const admins = global.config.ADMINBOT;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
  var i = 1;
  var msg = [];
  var msg = []
    for(var a of admins) {
    if (parseInt(a)) {
    var name = await Users.getNameUser(event.senderID);
    var tai = event.senderID;
      msg.push(`${i++}. ${name}`);
    }
    }
    var callback = () => api.sendMessage({  
         body: `====「 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 」 ====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n⏰𝗧𝗶𝗺𝗲: ${gio}\n🗓𝐓𝐡𝐮̛́: ${thu}\n💾𝗧𝗲̂𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴:\n${name}\n📇𝐔𝐢𝐝 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐃𝐮̀𝐧𝐠:\n${tai}\n📇𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐤: https://www.facebook.com/${tai}\n📆 Ngày giờ tạo tài khoản: ${day}\n𝐂𝐡𝐮́𝐜 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 𝟏 𝐧𝐠𝐚̀𝐲 𝐯𝐮𝐢 𝐯𝐞̉\n\n「🤖𝐁𝐨𝐭 𝐡𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐝𝐚̃ 𝐜𝐡𝐚̣𝐲 𝐝𝐮̛𝐨̛̣𝐜\n⏰${anh} 𝐠𝐢𝐨̛̀,${la} 𝐩𝐡𝐮́𝐭,${dtai} 𝐠𝐢𝐚̂𝐲⏰」\n▱▱▱▱▱▱▱▱▱▱▱▱▱`,
          attachment: fs.createReadStream(__dirname + "/cache/1.png")
        },
          event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);
        return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`))
          .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
          .on('close', () => callback());
  }
};
module.exports.run = () => {};