module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Hướng dẫn cho người mới",
	usages: "[all/-a] [số trang]",
	commandCategory: "tiện ích",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "❗️𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́ 𝘁𝗿𝗼𝗻𝗴 𝗺𝗲𝗻𝘂";
	else if (num > data.length || num <= 0) msg = "❌ 𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗺𝗲𝗻𝘂 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝗹𝗮̣𝗶";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += ` 『  ${command_config.commandCategory.toUpperCase()}   』   \n`;
			msg += `\n💾 𝗧𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵: ${dataAfter}`;
			msg += `\n📄 𝗠𝗼̂ 𝘁𝗮̉: ${command_config.description}`;
			msg += `\n📑 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: ${command_config.cooldowns || 5}s`;
			msg += `\n👑 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Quản trị viên bot"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
			msg += `\n\n» 𝐁𝐨𝐭 𝐝𝐮̛𝐨̛̣𝐜 𝐜𝐡𝐚̣𝐲 𝐛𝐨̛̉𝐢 𝐍𝐠𝐮𝐲𝐞𝐧 𝐃𝐮𝐜 𝐓𝐚𝐢 «`;
		} else {
			check = true;
			let count = 0;
			msg += `» ${dataAfter.group.toUpperCase()} «\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n『🧸』${count+=1}• » ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐭𝐫𝐞̂𝐧 𝐦𝐞𝐧𝐮 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭 𝐡𝐨𝐚̣̆𝐜 𝐜𝐚́𝐜𝐡 𝐝𝐮̀𝐧𝐠 𝐯𝐚̀ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡";
		}
	}
	const axios = require('axios');
	const fs = require('fs-extra');
	const img = ["https://i.imgur.com/PfioSJP.gif", "https://i.imgur.com/6PArjh2.gif", "https://i.imgur.com/sclek83.gif", "https://i.imgur.com/c7jER2a.gif", "https://i.imgur.com/PAvBbgQ.gif", "https://i.imgur.com/YgMRrJW.gif", "https://i.imgur.com/IpuGKQ9.gif", "https://i.imgur.com/oHDlwaL.gif", "https://i.imgur.com/JlRBMeS.gif", "https://i.imgur.com/zQqhgM4.gif", "https://i.imgur.com/hrJJLu3.gif"]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
	var msgg = {body: msg, attachment: imgP}
	api.unsendMessage(handleReply.messageID);
	return api.sendMessage(msgg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	const imgP = []
	const img = ["https://i.imgur.com/PfioSJP.gif", "https://i.imgur.com/6PArjh2.gif", "https://i.imgur.com/sclek83.gif", "https://i.imgur.com/c7jER2a.gif", "https://i.imgur.com/PAvBbgQ.gif", "https://i.imgur.com/YgMRrJW.gif", "https://i.imgur.com/IpuGKQ9.gif", "https://i.imgur.com/oHDlwaL.gif", "https://i.imgur.com/JlRBMeS.gif", "https://i.imgur.com/zQqhgM4.gif", "https://i.imgur.com/hrJJLu3.gif"]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
	const command = commands.values();
	var group = [], msg = "『 𝗠𝗘𝗡𝗨 𝗧𝗔̂́𝗧 𝗖𝗔̉ 𝗟𝗘̣̂𝗡𝗛 𝗕𝗢𝗧 』\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 2222222222);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "❗️𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́ 𝘁𝗿𝗼𝗻𝗴 𝗺𝗲𝗻𝘂";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "❌ 𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗺𝗲𝗻𝘂 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝗹𝗮̣𝗶";
			else check = true;
		}
		if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
			bonus = index_start;
			index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n『🧸』${index_start+=1}• » ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n𝗧𝗿𝗮𝗻𝗴 𝗹𝗲̣̂𝗻𝗵:${page_num_input || 1}/${page_num_total}`;
			msg += `\n𝗫𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗸𝗵𝗮́𝗰 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 ${prefix}[𝗮𝗹𝗹] 𝗸𝗲̀𝗺 𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴`;
      msg += `\n𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 ${prefix}𝗵𝗲𝗹𝗽 𝗮𝗹𝗹 𝗵𝗼𝗮̣̆𝗰 𝗺𝗲𝗻𝘂 𝗮𝗹𝗹 `
			msg += "\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐭𝐫𝐞̂𝐧 𝐦𝐞𝐧𝐮 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭 𝐡𝐨𝐚̣̆𝐜 𝐜𝐚́𝐜𝐡 𝐝𝐮̀𝐧𝐠 𝐯𝐚̀ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡";
		}
		var msgg = {body: msg, attachment: imgP}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 2222222222);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "❗️𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "❌ 𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗺𝗲𝗻𝘂 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝗹𝗮̣𝗶";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
		bonus = index_start;
		index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n『🧸』${index_start+=1}• » ${commandGroup.group.toUpperCase()} `);
		msg += `\n\n𝗧𝗿𝗮𝗻𝗴 𝗹𝗲̣̂𝗻𝗵:【${page_num_input || 1}•${page_num_total}】`;
		msg += `\n𝗫𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗸𝗵𝗮́𝗰 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 ${prefix}𝗺𝗲𝗻𝘂 𝗸𝗲̀𝗺 𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴`;
    msg += `\n𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 ${𝗽𝗿𝗲𝗳𝗶𝘅}𝗵𝗲𝗹𝗽 𝗮𝗹𝗹 𝗵𝗼𝗮̣̆𝗰 𝗺𝗲𝗻𝘂 𝗮𝗹𝗹 `
		msg += `\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐭𝐫𝐞̂𝐧 𝐦𝐞𝐧𝐮 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭 𝐡𝐨𝐚̣̆𝐜 𝐜𝐚́𝐜𝐡 𝐝𝐮̀𝐧𝐠 𝐯𝐚̀ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡`;
	}
	var msgg = {body: msg, attachment: imgP}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
}