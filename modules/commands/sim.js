/**
 * @author
 * @warn Do not edit code or edit credits
 * @apikey Reg key tại: https://meewmeew.info/site
 */
module.exports.config = {
    name: "Hey",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "ProcodeMew", //change api sim Hoang Giap
    description: "Chat c\xF9ng con sim m\u1EA5t d\u1EA1y nh\u1EA5t",
    commandCategory: "Chat cùng con sim",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function simsimi(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://api.simsimi.net/v2/?text=${g(a)}&lc=vn`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.simsimi && (global.simsimi = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.success)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("𝗕𝗮̣𝗻 𝗖𝗵𝘂̛𝗮 𝗡𝗵𝗮̣̂𝗽 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻");
    switch (c[0]) {
        case "AI":
            return global.simsimi.has(d) ? f("𝗔𝗜 𝗛𝗶𝗲̣̂𝗻 𝗗𝗮𝗻𝗴 𝗧𝗮̆́𝘁.") : (global.simsimi.set(d, e), f("𝗕𝗮̣̂𝘁 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 𝗖𝗵𝗲̂́ 𝗗𝗼̂ 𝗔𝗜."));
      case  "ai":
            return global.simsimi.has(d) ? (global.simsimi.delete(d), f("𝗧𝗮̆́𝘁 𝗔𝗜 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴.")) : f("𝗕𝗮̣𝗻 𝗖𝗵𝘂̛𝗮 𝗧𝗮̆́𝘁 𝗔𝗜.");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    }
};