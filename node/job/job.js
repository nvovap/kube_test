const fs = require('fs');

function main(){
	const file = fs.createWriteStream('logs/log.log', { flags: 'a' });
    file.write("This is node.js job!\n");
    file.close();
}

main();