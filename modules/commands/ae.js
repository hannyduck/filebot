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
  if (event.body.indexOf("ae")==0 || (event.body.indexOf("Ae")==0) || event.body.indexOf("AE")==0 ||
event.body.indexOf("anh em")==0 ||
event.body.indexOf("Anh em")==0 ||
event.body.indexOf("tình nghĩa")==0 ||
event.body.indexOf("Tình nghĩa")==0 ||
event.body.indexOf("Tình")==0 ||
event.body.indexOf("tình")==0 ||
event.body.indexOf("Tình ae")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/fZKQ5yh.mp4",
          ];
     var callback = () => api.sendMessage({body:`𝗔𝗡𝗛 𝗘𝗠 𝗖𝗔́𝗜 𝗖𝗢𝗡 𝗖𝗔̣̆𝗖 =))))))))`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };