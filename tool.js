const chalk = require('chalkercli');
var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100","33FFFF"];
  const rainbow = chalk.rainbow(`
██████╗ ████████╗ █████╗ ██╗
██╔══██╗╚══██╔══╝██╔══██╗██║
██║  ██║   ██║   ███████║██║
██║  ██║   ██║   ██╔══██║██║
██████╔╝   ██║   ██║  ██║██║
╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝`).stop();
rainbow.render();
const frame = rainbow.frame();
console.log(frame);

let count = 0;
let intervalId = setInterval(() => {
  const color = job[count % job.length];
  
  console.log(`\x1b[38;2;${parseInt(color.slice(0, 2), 16)};${parseInt(color.slice(2, 4), 16)};${parseInt(color.slice(4, 6), 16)}m%s\x1b[0m • %d`, 'ĐTAI IU EM NHỨT <3333', count);
  
  count++;
  
  if (count >= 20) {
    clearInterval(intervalId);
  }
},0,01);
