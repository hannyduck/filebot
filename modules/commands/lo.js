module.exports.config = {
  name: "lô",
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
  if (event.body.indexOf("lô")==0 || (event.body.indexOf("hilo")==0) || event.body.indexOf("Hilo")==0 ||
event.body.indexOf("helo")==0 ||
event.body.indexOf("hi")==0 ||
event.body.indexOf("Helo")==0 ||
event.body.indexOf("Hi")==0 ||
event.body.indexOf("Lô")==0 ||
event.body.indexOf("Alo")==0 ||
event.body.indexOf("alo")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/kQbp7f2.mp4",
          ];
     var callback = () => api.sendMessage({body:`𝗟𝗢̂ 𝗖𝗢𝗡 𝗖𝗔̣̆𝗖 =)))))))`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };