module.exports.config = {
	name: "anh",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "woa😯",
	description: "Xem ảnh réply",
	commandCategory: "random-img",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("1.ảnh alice\n2.ảnh cosplay\n3.ảnh anime\n4.ảnh loli\n5.ảnh gái (18+)\n6.ảnh meme\n7.ảnh trai\n8.ảnh gái trung(18+)\n9.ảnh genshin\n10.ảnh nền\n11.ảnh cosplaygenshin\n12.ảnh độ mixi\n13.ảnh songoku\n14.ảnh idol\n15.video anime\n16.video tokyorevengers\n17.video tiktok\n18.video doraemon\n19.video chill\n20.video gái\n21.nhạc chill\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐒𝐓𝐓 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.url;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "==== [ 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ] ====",
			attachment: t
		}, a.threadID, a.messageID) 
	}

function linkanh() {
const p = require("axios");
if ("1" == a.body)
            var h = "https://caochungdat.me/docs/images/alice";
        else 
if ("2" == a.body)
        var   h = "https://caochungdat.me/docs/images/cosplay";
        else 
if ("3" == a.body)
        var  h = "https://caochungdat.me/docs/images/anime";
        else 
if ("4" == a.body)
        var h = "https://caochungdat.me/docs/images/loli";
  


        return { p, h };
    }
};
