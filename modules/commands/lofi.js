module.exports.config = {
	name: "lofi",
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
	if (typeof thread["lofi"] !== "undefined" && thread["lofi"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `𝐁𝐚̉𝐧 𝐧𝐡𝐚̣𝐜 𝐥𝐨𝐟𝐢 𝐛𝐮𝐨̂̀𝐧 𝐯𝐚̀ 𝐡𝐚𝐲 𝐧𝐡𝐚̂́𝐭 𝐜𝐮̉𝐚 𝐛𝐚̉𝐧 𝐝𝐚̂𝐲\n->𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐠𝐡𝐞 𝐧𝐡𝐚̣𝐜 𝐯𝐮𝐢 𝐯𝐞̉ 𝐯𝐚̀ 𝐡𝐞̂́𝐭 𝐛𝐮𝐨̂̀𝐧 𝐧𝐡𝐚\n->❤️❤️❤️`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://dtai2006.nguyenductai206.repl.co/lofi1')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["lofi"];
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

	if (typeof data["lofi"] == "undefined" || data["lofi"] == true) data["lofi"] = false;
	else data["lofi"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["lofi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}