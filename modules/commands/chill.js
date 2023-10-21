module.exports.config = {
	name: "chill",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Vihoo",
	description: "Random video",
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
	if (typeof thread["Chill"] !== "undefined" && thread["Chill"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `𝟏 𝐧𝐠𝐚̀𝐲 𝐛𝐮𝐨̂̀𝐧 𝐤𝐡𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐜𝐚̣̂𝐮 𝐨̛̉ 𝐛𝐞̂𝐧…,𝐭𝐨̂𝐢 𝐦𝐮𝐨̂́𝐧 𝐧𝐨́𝐢 𝐯𝐨̛́𝐢 𝐜𝐚̣̂𝐮 𝐫𝐚̆̀𝐧𝐠 𝐭𝐨̂𝐢 𝐲𝐞̂𝐮 𝐜𝐚̣̂𝐮 𝐧𝐡𝐮̛𝐧𝐠 𝐜𝐚̣̂𝐮 𝐛𝐞̂𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜 𝐦𝐚̂́𝐭 𝐫𝐨̂̀𝐢… `,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://manhh.manh10.repl.co/image/chill')).data.url,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["chill"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "Video chill",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "Video chill",
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

	if (typeof data["Chill"] == "undefined" || data["Chill"] == true) data["Chill"] = false;
	else data["Chill"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["Chill"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}