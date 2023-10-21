module.exports.config = {
  name: "achill",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "api",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Buồn")==0 || (event.body.indexOf("Khóc")==0) || event.body.indexOf("Nhớ em")==0 ||
event.body.indexOf("Sad")==0 ||
event.body.indexOf("Achill")==0 ||
event.body.indexOf("buồn")==0 ||
event.body.indexOf("sad")==0 ||
event.body.indexOf("nhớ em")==0 ||
event.body.indexOf("achill")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://imgur.com/d9QlIBX.mp4",
      "https://imgur.com/ExlxR0J.mp4",
      "https://imgur.com/TXHf7G2.mp4",
      "https://imgur.com/MxilxON.mp4",
      "https://imgur.com/764mkHR.mp4",
      "https://imgur.com/AstY6pb.mp4",
      "https://imgur.com/8M4GVtg.mp4",
      "https://imgur.com/gPDKOlp.mp4",
      "https://imgur.com/BVkWb0p.mp4",
      "https://imgur.com/RLhREXj.mp4",
      "https://imgur.com/DNK8Fgx.mp4",
      "https://imgur.com/MX6wo8d.mp4",
      "https://imgur.com/77YOJSi.mp4",
      "https://imgur.com/p798kCm.mp4",
      "https://imgur.com/oF5JjSi.mp4",
      "https://imgur.com/kJwRkx8.mp4",
      "https://imgur.com/I6RG0wO.mp4",
          ];
     var callback = () => api.sendMessage({body:`𝐂𝐡𝐢𝐥𝐥 𝐜𝐡𝐢𝐥𝐥 𝐛𝐮𝐨̂̀𝐧 𝐛𝐮𝐨̂̀𝐧 𝐯𝐮𝐢 𝐯𝐮𝐢 𝐭𝐚̂𝐦 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐨̂𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐚𝐨 𝐠𝐢𝐨̛̀ 𝐨̂̉𝐧,𝐧𝐠𝐚̀𝐲 𝐞𝐦 đ𝐢 𝐭𝐨̂𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐚𝐨 𝐠𝐢𝐨̛̀ 𝐪𝐮𝐞̂𝐧 đ𝐮̛𝐨̛̣𝐜 𝐞𝐦,𝐌𝐮̀𝐢 𝐡𝐮̛𝐨̛𝐧𝐠 𝐭𝐡𝐨̛𝐦 𝐦𝐮̀𝐢 𝐜𝐮̃𝐧𝐠 𝐬𝐞̃ 𝐡𝐞̂́𝐭 𝐜𝐚́𝐜𝐡 𝐡𝐨𝐚 đ𝐞̣𝐩 𝐫𝐨̂̀𝐢 𝐜𝐮̃𝐧𝐠 𝐬𝐞̃ 𝐭𝐚̀𝐧 𝐞𝐦 đ𝐢 𝐫𝐨̂̀𝐢 𝐥𝐚̀𝐦 𝐠𝐢̀ đ𝐞̂̉ 𝐜𝐨́ 𝐥𝐚̣𝐢 𝐞𝐦…\n\n—𝐒𝐨̂́ 𝐕𝐢𝐝𝐞𝐨 𝐒𝐚𝐝 𝐇𝐢𝐞̣̂𝐧 𝐂𝐨́: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };