module.exports.config = {
	name: "gái gú con cặc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dtai",
	description: "xem gái gú con cặc",
	commandCategory: "no prefix",
	usages: "con mẹ mày béo",
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
	if (typeof thread["a"] !== "undefined" && thread["a"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
          var msg = {
		body: `ok gái`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://API-RYO.ducryovn.repl.co/api/gaixinhtiktok.php')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
var arr = ["a"];
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

	if (typeof data["a"] == "undefined" || data["a"] == true) data["a"] = false;
	else data["a"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["a"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}