module.exports.config = {
	name: "sexy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Vihoo",
	description: "",
	commandCategory: "no prefix",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["sexy"] !== "undefined" && thread["sexy"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `𝐕𝐮́ 𝐭𝐨 đ𝐢́𝐭 𝐦𝐚̂̉𝐲 𝐦𝐮́𝐭 𝐜𝐡𝐮̀𝐧 𝐜𝐡𝐮̣𝐭 𝐛𝐚̆́𝐧 𝐭𝐮̀𝐦 𝐥𝐮𝐦🤤`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://apirandom.dungkonuwu.repl.co/ig')).data.url,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["sexy"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "sexy",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "sexy",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["sexy"] == "undefined" || data["sexy"] == true) data["sexy"] = false;
	else data["sexy"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["sexy"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}