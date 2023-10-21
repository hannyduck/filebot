module.exports.config = {
  name: "av",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài", // tài cuti vãi lồn địt mẹ mày dùng lệnh bố m thích thay cre ko bố m đã bố thí cho dùng rồi bớt bớt lại nha con chó
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("gái")==0 || (event.body.indexOf("Gái")==0) || event.body.indexOf("girl")==0 ||
event.body.indexOf("Girl")==0 ||
event.body.indexOf("vd gái")==0 ||
event.body.indexOf("Vd gái")==0 ||
event.body.indexOf("video gái")==0 ||
event.body.indexOf("Video gái")==0 ||
event.body.indexOf("Gái xinh")==0 ||
event.body.indexOf("gái xinh")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://imgur.com/enoY3yH.mp4",
      "https://imgur.com/vMfIWqd.mp4",
      "https://imgur.com/cB5utpj.mp4",
      "https://imgur.com/iWG5INP.mp4",
      "https://imgur.com/amcgzcX.mp4",
      "https://imgur.com/XEGt5y5.mp4",
      "https://imgur.com/g9XqW4k.mp4",
      "https://imgur.com/0HYJ5mE.mp4",
      "https://imgur.com/4JXqSd8.mp4",
      "https://imgur.com/nb3ll2K.mp4",
      "https://imgur.com/GUAv9h9.mp4",
      "https://imgur.com/tkHnab2.mp4",
      "https://imgur.com/irPz6DX.mp4",
      "https://imgur.com/VSjy8KP.mp4",
      "https://imgur.com/unhKGfJ.mp4",
      "https://imgur.com/UJOCvMT.mp4",
      "https://imgur.com/2wn9QYS.mp4",
      "https://imgur.com/L5fwCdl.mp4",
      "https://imgur.com/PG4dRit.mp4",
      "https://imgur.com/IIGlK5b.mp4",
      "https://imgur.com/XimYAge.mp4",
      "https://imgur.com/m38g0H8.mp4",
      "https://imgur.com/AT9GlO0.mp4",
      "https://imgur.com/IYBsfKI.mp4",
      "https://imgur.com/qQ3LrK1.mp4",
      "https://imgur.com/BrEmlf3.mp4",
      "https://imgur.com/RDwbjSP.mp4",
      "https://imgur.com/BSLcHIn.mp4",
      "https://imgur.com/pIaXIgz.mp4",
      "https://imgur.com/mV1CIAu.mp4",
      "https://imgur.com/fPnrsE5.mp4",
      "https://imgur.com/QzOIimY.mp4",
      "https://imgur.com/BhEQ0W0.mp4",
      "https://imgur.com/LHLFhmX.mp4",
      "https://imgur.com/aeymHKZ.mp4",
      "https://imgur.com/7cLHJmH.mp4",
      "https://imgur.com/2N8jUdA.mp4",
      "https://imgur.com/bU8Zs95.mp4",
      "https://imgur.com/As33aXQ.mp4",
      "https://imgur.com/zfJ07EV.mp4",
      "https://imgur.com/vRSy0IJ.mp4",
      "https://imgur.com/O1188YU.mp4",
      "https://imgur.com/ZKl4odZ.mp4",
      "https://imgur.com/hleAljM.mp4",
      "https://imgur.com/lpjaWzJ.mp4",
      "https://imgur.com/tlUQKoR.mp4",
      "https://imgur.com/nmNauxQ.mp4",
      "https://imgur.com/rBxbbkJ.mp4",
      "https://imgur.com/5PZF5VR.mp4",
      "https://imgur.com/HFIqCYw.mp4",
      "https://imgur.com/ieenTu5.mp4",
      "https://imgur.com/SYcsTZ4.mp4",
      "https://imgur.com/0zgwvsi.mp4",
      "https://imgur.com/5dPAVxD.mp4",
      "https://imgur.com/SNCHEj0.mp4",
      "https://imgur.com/DzZd4YQ.mp4",
      "https://imgur.com/vsRyvPh.mp4",
      "https://imgur.com/IRWeVky.mp4",
      "https://imgur.com/90RJZm8.mp4",
      "https://imgur.com/ERMSEp7.mp4",
      "https://imgur.com/Jj1Lg02.mp4",
      "https://imgur.com/MjA1nH8.mp4",
      "https://imgur.com/C5OKOXy.mp4",
      "https://imgur.com/eHeCLmV.mp4",
      "https://imgur.com/HXu5vCF.mp4",
      "https://imgur.com/2aT341o.mp4",
      "https://imgur.com/SkLGo05.mp4",
      "https://imgur.com/uElVlRb.mp4",
      "https://imgur.com/F3kFLD5.mp4",
      "https://imgur.com/ShlPtI4.mp4",
      "https://imgur.com/Ppdo2DH.mp4",
      "https://imgur.com/F1Htgd4.mp4",
      "https://imgur.com/0z1yrCS.mp4",
      "https://imgur.com/BsEVLXA.mp4",
      "https://imgur.com/MoMMcA2.mp4",
      "https://imgur.com/KkPoebL.mp4",
      "https://imgur.com/HPgMMJC.mp4",
      "https://imgur.com/LZN4Rz2.mp4",
      "https://imgur.com/pM2Ld4X.mp4",
      "https://imgur.com/IQAzfSO.mp4",
      "https://imgur.com/vvBH2MA.mp4",
      "https://imgur.com/6rc1GD7.mp4",
      "https://imgur.com/Jl3pl2W.mp4",
      "https://imgur.com/rshRtz1.mp4",
      "https://imgur.com/XWjEbST.mp4",
      "https://imgur.com/QNWTt3a.mp4",
      "https://imgur.com/QcLJH0h.mp4",
      "https://imgur.com/4o0KYv6.mp4",
      "https://imgur.com/TIFBWca.mp4",
      "https://imgur.com/d541M0E.mp4",
      "https://imgur.com/eXyWgGn.mp4",
      "https://imgur.com/OBlHZ7D.mp4",
      "https://imgur.com/qbUZEUQ.mp4",
          ];
var callback = () => api.sendMessage({body:`𝐯𝐢𝐝𝐞𝐨 𝐠𝐚́𝐢 𝐜𝐮̉𝐚 𝐦𝐚̀𝐲 đ𝐚̂́𝐲 𝐯𝐚̀𝐨 𝐦𝐚̀ 𝐡𝐮́𝐩 đ𝐞𝐨 𝐦𝐞̣ 𝐜𝐚́𝐢 đ𝐨̂̀ 𝐦𝐞̂ 𝐠𝐚́𝐢 𝟏𝟎𝟎𝟎 𝐧𝐚̆𝐦 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐞̂́𝐭😏\n\n——𝙎𝙤̂́ 𝙑𝙞𝙙𝙚𝙤 𝙂𝙖́𝙞 𝙓𝙞𝙣𝙜 𝙃𝙞𝙚̣̂𝙣 𝘾𝙤́: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };