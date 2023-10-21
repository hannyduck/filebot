 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=sbFaY5rwQV76-JRXhyKm3K9r;datr=t_WuY6Fa-uq_s7Fzupcn62LH;c_user=1028358015;xs=47%3ALe1-TMVEiuiKYQ%3A2%3A1673270451%3A-1%3A11633%3A%3AAcVylmmy4jw0fF_PlIAQtvYCA26pGBfu-dk4UNnRq-I;wd=1517x694;fr=02TaMmwZhIrrGuVsv.AWXsMSOagWfPP_yXmAxT4e3b5CE.Bjxisk.ab.AAA.0.0.BjxjZ7.AWUHqlJNqQA;dpr=0.8999999761581421;presence=C%7B%22t3%22%3A%5B%7B%22i%22%3A%22g.5975747112489457%22%7D%2C%7B%22i%22%3A%22g.5464193130346208%22%7D%2C%7B%22i%22%3A%22u.100054642736374%22%7D%2C%7B%22i%22%3A%22u.100058445433078%22%7D%2C%7B%22i%22%3A%22g.8508111062595555%22%7D%2C%7B%22i%22%3A%22g.5494767233918738%22%7D%2C%7B%22i%22%3A%22u.100087727707535%22%7D%2C%7B%22i%22%3A%22g.5931623456902862%22%7D%5D%2C%22utc3%22%3A1673934472354%2C%22v%22%3A1%7D;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`thieutrungkien.dev/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=c259ed&url=${url}&dimension=1366x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』\n 𝑫𝒕𝒂𝒊𝒊 𝑻𝒐̂𝒎 \n━━━━━━━━━━\n 𝑨̂𝒚 𝒅𝒐̂ 𝒙𝒐𝒏𝒈 𝒓𝒐̂̀𝒊 𝒏𝒆̀ ${name} \n \n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `sb=sbFaY5rwQV76-JRXhyKm3K9r;datr=t_WuY6Fa-uq_s7Fzupcn62LH;c_user=1028358015;xs=47%3ALe1-TMVEiuiKYQ%3A2%3A1673270451%3A-1%3A11633%3A%3AAcVylmmy4jw0fF_PlIAQtvYCA26pGBfu-dk4UNnRq-I;wd=1517x694;fr=02TaMmwZhIrrGuVsv.AWXsMSOagWfPP_yXmAxT4e3b5CE.Bjxisk.ab.AAA.0.0.BjxjZ7.AWUHqlJNqQA;dpr=0.8999999761581421;presence=C%7B%22t3%22%3A%5B%7B%22i%22%3A%22g.5975747112489457%22%7D%2C%7B%22i%22%3A%22g.5464193130346208%22%7D%2C%7B%22i%22%3A%22u.100054642736374%22%7D%2C%7B%22i%22%3A%22u.100058445433078%22%7D%2C%7B%22i%22%3A%22g.8508111062595555%22%7D%2C%7B%22i%22%3A%22g.5494767233918738%22%7D%2C%7B%22i%22%3A%22u.100087727707535%22%7D%2C%7B%22i%22%3A%22g.5931623456902862%22%7D%5D%2C%22utc3%22%3A1673934472354%2C%22v%22%3A1%7D;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`thieutrungkien.dev/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=c259ed&url=${url}&dimension=1366x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』\n ━━━━━━━━━━\n Ây dô xong rồi nè ${name}\n → 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
}