module.exports.config = {
	name: "sexx",
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
	if (typeof thread["pướm"] !== "undefined" && thread["pướm"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `𝐗𝐮𝐨̂́𝐭 𝐧𝐠𝐚̀𝐲 𝐥𝐮𝐨̂̀𝐧 𝐛𝐮̛𝐨̛́𝐦 𝐯𝐮́ 𝐝𝐢𝐭 𝐝𝐢̣𝐭 𝐧𝐡𝐚𝐮`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://manhh.manh10.repl.co/image/sex')).data.url,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["pướm"];
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

	if (typeof data["pướm"] == "undefined" || data["pướm"] == true) data["pướm"] = false;
	else data["pướm"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["pướm"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}