const estelleID = require('./information');
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello I'm ${estelleID.firstname} and I study at ${estelleID.campus}`,
    e : "oO",
    T : "U "
}));