module.exports.config = {
  name: "mp3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "đổi từ video thành âm thanh",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args,}) {
  console.log('Bắt đầu xuất âm thanh')
};
module.exports.handleEvent = async function({ api , event , Users , args }) {
    const { body , senderID , threadID , messageID } = event;
  const axios = require("axios")
    const fs = require("fs")
        if (args === undefined || !args.includes('Mp3') || senderID == api.getCurrentUserID() || senderID == '') return;
  
        var audioss = []
  var audio = args || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio ,{  method: 'GET',  responseType: 'arraybuffer' });
                fs.writeFileSync(__dirname + "/cache/vdtoau.m4a",Buffer.from(data, 'utf-8'));
  audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a")) ,(fs.unlinkSync(__dirname + "/cache/vdtoau.m4a")); 

        api.sendMessage({body:`𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼\n𝗕𝗮̣𝗻 đ𝗮𝗻𝗴 𝗱𝘂̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 đ𝗼̂̉𝗶 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝘁𝘂̛̀ 𝘃𝗶𝗱𝗲𝗼 𝘀𝗮𝗻𝗴 𝗺𝗽𝟯\n\n➩『🎶』𝗔̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗱𝗮̂𝘆`, attachment: audioss},event.threadID, event.messageID);
}