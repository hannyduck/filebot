module.exports.config = {
  name: "ae",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Random video gái",
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
  if (event.body.indexOf("đm")==0 || (event.body.indexOf("Đm")==0) || event.body.indexOf("Đcm")==0 ||
event.body.indexOf("Đcmm")==0 ||
event.body.indexOf("Đmm")==0 ||
event.body.indexOf("cc")==0 ||
event.body.indexOf("Cc")==0 ||
event.body.indexOf("địt cụ mày")==0 ||
event.body.indexOf("Địt cụ mày")==0 ||
event.body.indexOf("địt mẹ mày")==0 ||
event.body.indexOf("Địt mẹ mày")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/VV0hGlm.mp4",
          ];
     var callback = () => api.sendMessage({body:`𝐂𝐡𝐮̛̉𝐢 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜 𝐝𝐢̣𝐭 𝐦𝐞̣ 𝐦𝐚̀𝐲
𝐁𝐚̆́𝐧 𝐛𝐨̉ 𝐦𝐞̣ 𝐦𝐚̀𝐲 𝐠𝐢𝐨̛̀🖕🖕🖕`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };