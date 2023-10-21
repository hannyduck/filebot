module.exports.config = {
	name: "anime",
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
	if (typeof thread["anime"] !== "undefined" && thread["anime"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `𝐕𝐢𝐝𝐞𝐨 𝐚𝐧𝐢𝐦𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 đ𝐚̂𝐲\n\n𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐱𝐞𝐦 𝐯𝐢𝐝𝐞𝐨 𝐯𝐮𝐢 𝐯𝐞̉❤️`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://trieutaitanapi2.trieutaitan2.repl.co/animevd')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["anime"];
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

	if (typeof data["anime"] == "undefined" || data["anime"] == true) data["anime"] = false;
	else data["anime"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["anime"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}