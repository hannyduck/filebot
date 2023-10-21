const fs = require("fs");
module.exports.config = {
name: "vkadm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "vkadm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("meo")==0 || 
event.body.indexOf("Meo")==0 ||
event.body.indexOf("vkadmin")==0 ||
event.body.indexOf("Vkadmin")==0 ||
event.body.indexOf("vợ admin")==0 ||
event.body.indexOf("Vợ admin")==0 ||
event.body.indexOf("Meo meo")==0 ||
event.body.indexOf("Meomeo")==0 ||
event.body.indexOf("meomeo")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://imgur.com/GFE4xjs.mp4",
  ];
  var callback = () => api.sendMessage({body:`=====VỢ CHỒNG ADMIN=====
          ===𝐓𝐄̂𝐍 𝐂𝐇𝐎̂̀𝐍𝐆===
🤓𝐓𝐞̂𝐧:𝐍𝐠𝐮𝐲𝐞̂̃𝐧 Đ𝐮̛́𝐜 𝐓𝐚̀𝐢
🫠𝐓𝐮𝐨̂̉𝐢: Đ𝐮́𝐭 𝐛𝐮𝐨̂̀𝐢 𝐜𝐡𝐨 𝐛𝐢𝐞̂́𝐭
😶‍🌫️𝐓𝐢̀𝐧𝐡 𝐭𝐫𝐚̣𝐧𝐠 𝐡𝐨̂𝐧 𝐧𝐡𝐚̂𝐧: Đ𝐚̃ 𝐤𝐞̂́𝐭 𝐡𝐨̂𝐧
💞𝐍𝐨̛𝐢 𝐨̛̉: 𝐇𝐚̉𝐢 𝐃𝐮̛𝐨̛𝐧𝐠
              ===𝐓𝐄̂𝐍 𝐕𝐎̛̣===
🤓𝐓𝐞̂𝐧:𝐓𝐚̣ 𝐓𝐡𝐢̣ 𝐓𝐡𝐮 𝐇𝐢𝐞̂̀𝐧
🫠𝐓𝐮𝐨̂̉𝐢: 𝐇𝐨̉𝐢 𝐝𝐢́ 𝐛𝐮𝐨̂̀𝐢 
😶‍🌫️𝐓𝐢̀𝐧𝐡 𝐭𝐫𝐚̣𝐧𝐠 𝐡𝐨̂𝐧 𝐧𝐡𝐚̂𝐧: Đ𝐚̃ 𝐤𝐞̂́𝐭 𝐡𝐨̂𝐧
💞𝐍𝐨̛𝐢 𝐨̛̉:𝐇𝐚̀ 𝐧𝐨̣̂𝐢
  ———❤𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔❤———`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };