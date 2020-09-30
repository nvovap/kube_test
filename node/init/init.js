require('dotenv').config();
const fs = require('fs');

const inPodIp =  process.env.POD_IP;


function main(){
	const file = fs.createWriteStream('logs/log.log', { flags: 'a' });
    file.write("Init node.js container run " + inPodIp + "!\n");
    file.close();
}

main();