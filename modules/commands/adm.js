const fs = require("fs");
module.exports.config = {
name: "adm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "adm",
	commandCategory: "Không cần dấu lệnh",
	usages: "Prefix",
	cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("adm")==0 || 
event.body.indexOf("Adm")==0 ||
event.body.indexOf("admin")==0 ||
event.body.indexOf("Tài")==0 ||
event.body.indexOf("Admin")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://imgur.com/L7cMcYr.mp4",
"https://imgur.com/8mFSNay.mp4",
"https://imgur.com/pyfaF0e.mp4",
  ];
  var callback = () => api.sendMessage({body:`=====ADMIN=====
😊  𝑻𝒆̂𝒏:   𝐃𝐮𝐜 𝐓𝐚𝐢
💮 𝑩𝒊𝒆̣̂𝒕 𝒅𝒂𝒏𝒉: 𝑫𝒕𝒂𝒊 𝒄𝒖𝒕𝒊𝒊𝒊
❎ 𝑻𝒖𝒐̂̉𝒊: 𝟏𝟕+ 𝐓𝐮ổ𝐢
👤 𝑮𝒊𝒐̛́𝒊 𝒕𝒊́𝒏𝒉: 𝐧𝐚𝐦
💘 𝑴𝒐̂́𝒊 𝒒𝒖𝒂𝒏 𝒉𝒆̣̂: 𝐇ẹ𝐧 𝐇ò 
🌎 𝑸𝒖𝒆̂ 𝒒𝒖𝒂́𝒏: 𝐇ả𝐢 𝐃ươ𝐧𝐠
👫 𝑮𝒖: ???
🌸 𝑻𝒊́𝒏𝒉 𝒄𝒂́𝒄𝒉: 𝒏𝒉𝒂̂𝒚, 𝒗𝒖𝒊 𝒕𝒊́𝒏𝒉, 𝒉𝒐𝒂̀ 𝒅𝒐̂̀𝒏𝒈 :]]
🌀 𝑺𝒐̛̉ 𝒕𝒉𝒊́𝒄𝒉: 𝑪𝒉𝒐̛𝒊 𝒈𝒂𝒎𝒆, 𝒙𝒆𝒎 𝒑𝒉𝒊𝒎 𝒂𝒏𝒊𝒎𝒆 𝒃𝒍𝒂𝒃𝒍𝒂, 𝒂̆𝒏, 𝒏𝒈𝒖̉, :𝑫
💻𝑪𝒐𝒏𝒕𝒂𝒄𝒕💻
☎ 𝑺𝑫𝑻&𝒁𝒂𝒍𝒐:𝟎𝟗𝟎.𝟔𝟎𝟐𝟓.𝟗𝟑𝟖
🌐 𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌:𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐮𝐬𝐞𝐫.𝐧𝐝𝐭𝐚𝐢.𝟎𝟔.𝐦𝐞𝐭𝐚
✉️ 𝑬𝒎𝒂𝒊𝒍: 𝒉𝒐𝒏𝒈 𝒃𝒊́𝒄
------------
✔𝑫𝒐𝒏𝒂𝒕𝒆:
💳𝐕𝐢𝐞𝐭𝐢𝐧𝐛𝐚𝐧𝐤:𝟏𝟎𝟑𝟖𝟕𝟕𝟎𝟎𝟕𝟐𝟓𝟑
💳𝐕𝐧𝐩𝐚𝐲:𝟎𝟗𝟎𝟔𝟎𝟐𝟓𝟗𝟑𝟖
----𝐃𝐮𝐜 𝐓𝐚𝐢 ----`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };