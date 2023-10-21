module.exports.config = {
    name: "4",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "",
    description: "",
    commandCategory: "tiện ích",
    usages: "",
    cooldowns: 0,
};
/*module.exports.run = async({api, event}) => {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
const res = await axios.get(`https://caochungdat.me/docs/other/thinh`);
var a = res.data.url;
var path = __dirname + "/cache/1.png";
let getimg = (await axios.get(`https://Webapi.tuanvudev2.repl.co/api/randomimage/animenu`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
  return api.sendMessage({body: `${a}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, event.messageID);
}*/
module.exports.run = async({api, event}) => {
const attachment = (await global.nodemodule["axios"]({
            url: (await global.nodemodule["axios"]('https://caochungdat.me/docs/images/cosplaygenshin')).data.url,
            method: "GET",
            responseType: "stream"
        })).data;
 
return api.sendMessage({body: `test`, attachment}, event.threadID, event.messageID);
                       }