module.exports.config = {
  name: "mv",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Làm gì có cre",
  description: "xem video hiện có trên bot",
  commandCategory: "tiện ích",
  usages: "anime",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(` 🎭 Danh sách các video hiện có  🎭 \n\n mv gái \n mv sex\n mv anime\n mv gaixinh\n mv chill\n mv tokyo\n mv tiktok\n\nDùng prefix + mv  < video bạn cần xem >\n
`, event.threadID, event.messageID);

     if (args[0] == "gái") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://web-api.han666.repl.co/api/gaixinhtiktok.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `Video gái xinh nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
     }
   if  (args[0] == "gaixinh") { 
     var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://web-api.han666.repl.co/api/gaixinhtiktok.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `Video gái xinh nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if  (args[0] == "anime") { 
     var money = (await Currencies.getData(event.senderID)).money
if (money >= 1000) {
axios.get('https://apivideo.tinl9.repl.co/snauzk/?apikey=0703').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `anime<3 nè\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/snauzk.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/snauzk.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/snauzk.${ext}`)).on("close", callback);
  Currencies.setData(event.senderID, options = {money: money - 1000})
			})
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
   }
  if  (args[0] == "tokyo") { 
     var money = (await Currencies.getData(event.senderID)).money
if (money >= 1000) {
axios.get('https://apivideo.tinl9.repl.co/tokyorevengers/?apikey=0703').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `tokyo<3 nè\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/a.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/a.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/a.${ext}`)).on("close", callback);
  Currencies.setData(event.senderID, options = {money: money - 1000})
			})
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
    }
  if  (args[0] == "chill") { 
     var money = (await Currencies.getData(event.senderID)).money
if (money >= 1000) {
axios.get('https://apivideo.tinl9.repl.co/fyp/?apikey=0703').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `chill<3 \n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/b.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/b.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/b.${ext}`)).on("close", callback);
  Currencies.setData(event.senderID, options = {money: money - 1000})
			})
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
    }
  if  (args[0] == "tiktok") { 
     var money = (await Currencies.getData(event.senderID)).money
if (money >= 1000) {
axios.get('https://apivideo.tinl9.repl.co/tiktok/?apikey=0703').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `tiktok<3 nè\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/snauzk.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/snauzk.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/snauzk.${ext}`)).on("close", callback);
  Currencies.setData(event.senderID, options = {money: money - 1000})
			})
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
    }
if  (args[0] == "sex") { 
     var money = (await Currencies.getData(event.senderID)).money
if (money >= 5000) {
axios.get('https://api-1.tinl9.repl.co/sex/?apikey=0703').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `sex<3 nè\n-5000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/c.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/c.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/c.${ext}`)).on("close", callback);
  Currencies.setData(event.senderID, options = {money: money - 5000})
			})
  } else return api.sendMessage("Bạn cần 5000 đô",event.threadID,event.messageID);
          }
}