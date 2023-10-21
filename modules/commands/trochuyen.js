const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "trochuyen",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ZGToan Official",
    description: "dùng để liên lạc giữa các box với nhau",
    commandCategory: "thành viên",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];
const moment = require('moment-timezone');
 const gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s"); 
const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const { threadID, messageID, senderID, body } = event;

    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "trochuyen": {
            let text = `= [ 𝗟𝗶𝗲̂𝗻 𝗟𝗮̣𝗰 𝗚𝗶𝘂̛̃𝗮 𝗖𝗮́𝗰 𝗕𝗼𝘅 ] =\n--------------------\nᴛɪᴍᴇ: ${gio}\n--------------------\n𝙏𝙪̛̀: ${name}\n--------------------\n『𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢』:\nhttps://www.facebook.com/${event.senderID}\n--------------------\n𝘽𝙊𝙓: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂:${body}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `= [ 𝗟𝗶𝗲̂𝗻 𝗟𝗮̣𝗰 𝗚𝗶𝘂̛̃𝗮 𝗖𝗮́𝗰 𝗕𝗼𝘅 ] =\n------------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n--------------------\n𝙏𝙪̛̀: ${name}\n--------------------\n『𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢』:\nhttps://www.facebook.com/${event.senderID}\n--------------------\n𝘽𝙊𝙓: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂:${body}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `=== 𝓹𝓱𝓪̉𝓷 𝓱𝓸̂̀𝓲===\n------------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n--------------------\n𝙁𝙧𝙤𝙢 ${name}\n--------------------\n『𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢』:\nhttps://www.facebook.com/${event.senderID}\n--------------------\n『𝐓𝐨̂̉𝐧𝐠 𝐛𝐨𝐱 𝐧𝐡𝐚̣̂𝐧 𝐝𝐮̛𝐨̛̣𝐜 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧』:${global.data.allThreadID.length}\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂: ${body}\n--------------------\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐝𝐞̂̉ 𝐛𝐚́𝐨 𝐯𝐞̂̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `=== 𝓹𝓱𝓪̉𝓷 𝓱𝓸̂̀𝓲 ===\n-------------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n--------------------\n ${body}\n--------------------\n𝙁𝙧𝙤𝙢 ${name}\n--------------------\n『𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢』:\nhttps://www.facebook.com/${event.senderID}\n--------------------\n『𝐓𝐨̂̉𝐧𝐠 𝐛𝐨𝐱 𝐧𝐡𝐚̣̂𝐧 𝐝𝐮̛𝐨̛̣𝐜 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧』:${global.data.allThreadID.length}\n--------------------\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐝𝐞̂̉ 𝐛𝐚́𝐨 𝐯𝐞̂̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "trochuyen",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("vui lòng nhập tin nhắn hoặc reply vào 1 ảnh hoặc 1 video bất kì", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `== [ 𝗟𝗜𝗘̂𝗡 𝗟𝗔̣𝗖 𝗖𝗔́𝗖 𝗕𝗢𝗫 ] ==\n--------------------\n『𝐓𝐢𝐦𝐞』: ${gio}\n--------------------\n『𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠』: ${args.join(" ")}\n--------------------\n『𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢』${await Users.getNameUser(senderID)}\n--------------------\n『𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢』:\nhttps://www.facebook.com/${event.senderID}\n--------------------\n『𝐓𝐨̂̉𝐧𝐠 𝐛𝐨𝐱 𝐧𝐡𝐚̣̂𝐧 𝐝𝐮̛𝐨̛̣𝐜 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧』:${global.data.allThreadID.length}\n--------------------\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐝𝐞̂̉ 𝐛𝐚́𝐨 𝐯𝐞̂̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `== [ 𝗟𝗜𝗘̂𝗡 𝗟𝗔̣𝗖 𝗖𝗔́𝗖 𝗕𝗢𝗫 ] ==\n------------------\n 『𝐓𝐢𝐦𝐞』: ${gio}\n--------------------\n『𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠』: ${args.join(" ")}\n\n『𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢』${await Users.getNameUser(senderID)}\n--------------------\n『𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢』:\nhttps://www.facebook.com/${event.senderID}\n--------------------\n『𝐓𝐨̂̉𝐧𝐠 𝐛𝐨𝐱 𝐧𝐡𝐚̣̂𝐧 𝐝𝐮̛𝐨̛̣𝐜 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧』:${global.data.allThreadID.length}\n--------------------\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐝𝐞̂̉ 𝐛𝐚́𝐨 𝐯𝐞̂̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐠𝐮̛̉𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "trochuyen",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`[ 𝗧𝗛𝗢̂𝗡𝗚 𝗕𝗔́𝗢 ] → 𝗚𝘂̛̉𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 đ𝗲̂́𝗻 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗰𝗮́𝗰 𝗯𝗼𝘅,`, threadID);
}