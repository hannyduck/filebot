module.exports.config = {
    name: "console",
    version: "1.0.2",
    hasPermssion: 2,
    credits: "dtai",
    description: "",
    commandCategory: "admin",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
  const axios = require('axios');
 const fs = require("fs-extra");
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var dtai = moment.tz("Asia/Ho_Chi_Minh").format("HH 𝗴𝗶𝗼̛̀,mm 𝗽𝗵𝘂́𝘁,ss 𝗴𝗶𝗮̂𝘆");
var tai = moment.tz("Asia/Ho_Chi_Minh").format("𝗡𝗴𝗮̀𝘆:D,𝗧𝗵𝗮́𝗻𝗴:MM,𝗡𝗮̆𝗺:YYYY");
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
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "❌𝗧𝗲̂𝗻 𝗞𝗵𝗼̂𝗻𝗴 𝗧𝗼̂̀𝗻 𝗧𝗮̣𝗶";
  var taicuti = event.senderID;
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"❗𝐀̉𝐧𝐡,𝐕𝐢𝐝𝐞𝐨 𝐤𝐢𝐚 𝐭𝐮̛̣ 𝐝𝐚̣̆𝐜 𝐛𝐢𝐞̣̂𝐭";
          var getlink = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data;
        var day = getlink.data.date;
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066","008E97","F58220","38B6FF","7ED957"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
var random4 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.hex("#" + random)(`👥𝗡𝗵𝗼́𝗺:「${nameBox}」`) + "  " + chalk.hex("#" + random1)(`\n📇𝗧𝗲̂𝗻 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴:「 ${nameUser} 」\n💾𝗟𝗶𝗻𝗸 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: 𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/${taicuti}\n⏳𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘁𝗮̣𝗼 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${day}`) + "  " + chalk.hex("#" + random2)(`\n📑𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴:「 ${msg} 」\n⏰𝗩𝗮̀𝗼 𝗟𝘂́𝗰: ${dtai}\n🗓𝗧𝗵𝘂̛́: ${thu}\n📆${tai}`) + `\n` + chalk.hex("#" + random4)(` ◆━━━━━━━━━━━━━━◆『𝑫𝒕𝒂𝒊 𝒄𝒖𝒕𝒊』◆━━━━━━━━━━━━━━◆`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
               }