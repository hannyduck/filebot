module.exports.config = {
	name: "gaitik",
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
	if (typeof thread["tok"] !== "undefined" && thread["tok"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `𝐕𝐢𝐝𝐞𝐨 𝐠𝐚́𝐢 𝐱𝐢𝐧𝐠 𝐭𝐢𝐤 𝐭𝐨𝐤 𝐜𝐮̉𝐚 𝐦𝐚̀𝐲 𝐝𝐚̂𝐲 𝐭𝐨𝐚̀𝐧 𝐜𝐮̛̣𝐜 𝐩𝐡𝐚̂̉𝐦🤤🤤🤤`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://8.nguyendzok.repl.co/gai')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["tok"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "done",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "done",
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

	if (typeof data["tok"] == "undefined" || data["tok"] == true) data["tok"] = false;
	else data["tok"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["tok"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}