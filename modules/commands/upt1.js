module.exports.config = {
    name: "uptlink",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "đtai", 
    description: "Treo uptimerobot",
    commandCategory: "Tiện ích",
    usages: " +uptrobot +Url",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args,}) {
     const axios = require('axios');
      const fs = require("fs-extra");
    const moment = require("moment-timezone");
  const dtai = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const { threadID, messageID, senderID } = event;
  var out = (msg) => api.sendMessage(msg, threadID, messageID);
  const permission = ["100055941496837"];
  if (!args.join(" ")) return out("Thiếu Url,Vui lòng thêm Url để uptimerobot!");
  if (event.type == "message_reply") url  = event.messageReply.senderID
else url = args.join(" ");
	const imgP = []
	const img = ["https://tinyurl.com/2hoalftm"]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
var data = await global.utils.getContent(`https://dtai206.nguyenductai206.repl.co/uptimerobot/add?url=${url}`)
    let uptimedtai = data.data.error;
    api.sendMessage({body: `🤖== [ 𝐔𝐏𝐓𝐈𝐌𝐄 𝐑𝐎𝐁𝐎𝐓 ] ==🤖
━━━━━━━━━━━━━\n✅𝐓𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐝𝐚̃ 𝐮𝐩𝐭𝐢𝐦𝐞𝐫𝐨𝐛𝐨𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${dtai}\n⚙️𝐓𝐢̀𝐧𝐡 𝐭𝐫𝐚̣𝐧𝐠: ${uptimedtai}`,attachment: imgP}, event.threadID, event.messageID);

    console.log(getlink)
}