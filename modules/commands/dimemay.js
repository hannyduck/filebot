module.exports.config = {
  name: "cmmay",
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
  if (event.body.indexOf("trời")==0 || (event.body.indexOf("Trời")==0) || event.body.indexOf("jvtr")==0 ||
event.body.indexOf("jztr")==0 ||
event.body.indexOf("Jvtr")==0 ||
event.body.indexOf("Jztr")==0 ||
event.body.indexOf("tr")==0 ||
event.body.indexOf("Tr")==0 ||
event.body.indexOf("Trời đất")==0 ||
event.body.indexOf("trời đất")==0 ||
event.body.indexOf("oh my got")==0 ||
event.body.indexOf("ui trời")==0 ||
event.body.indexOf("ui trời ơi")==0 ||
event.body.indexOf("trời đất ơi")==0 ||
event.body.indexOf("gì vậy trời")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/7YRKHLX.mp4",
          ];
     var callback = () => api.sendMessage({body:`𝐓𝐫𝐨̛̀𝐢 𝐝𝐚̂́𝐭 𝐝𝐮𝐧𝐠 𝐡𝐨𝐚 𝐯𝐚̣𝐧 𝐯𝐚̣̂𝐭 𝐬𝐢𝐧𝐡 𝐬𝐨̂𝐢 𝐜𝐨𝐧 𝐦𝐞̣ 𝐦𝐚̀𝐲 𝐥𝐨̂𝐢 𝐭𝐡𝐨̂𝐢`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };