const fs = require("fs");
module.exports.config = {
name: "stk",
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
  if (event.body.indexOf("stk")==0 || 
event.body.indexOf("Stk")==0 ||
event.body.indexOf("tk")==0 ||
event.body.indexOf("Tk")==0 ||
event.body.indexOf("số tài khoản")==0 ||
event.body.indexOf("Tài khoản")==0 ||
event.body.indexOf("tài khoản")==0 ||
event.body.indexOf("Số tài khoản")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://imgur.com/x7fi5VX.jpg",
  ];
  var callback = () => api.sendMessage({body:`𝐒𝐓𝐊 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓\n💳𝐕𝐢𝐞𝐭𝐢𝐧𝐛𝐚𝐧𝐤: 𝟏𝟎𝟑𝟖𝟕𝟕𝟎𝟎𝟕𝟐𝟓𝟑\n💳𝐕𝐢́ 𝐯𝐧𝐩𝐚𝐲:𝟎𝟗𝟎𝟔𝟎𝟐𝟓𝟗𝟑𝟖\n❗️𝐂𝐇𝐔̉ 𝐇𝐀𝐈 𝐓𝐎𝐀̀𝐍 𝐓𝐑𝐄̂𝐍❗️\n »»»»𝐍𝐆𝐔𝐘𝐄̂̃𝐍 Đ𝐔̛́𝐂 𝐓𝐀̀𝐈«««« `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };