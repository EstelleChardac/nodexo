const userInfo = require('./information');
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello I'm ${userInfo.firstname} and I study at ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));