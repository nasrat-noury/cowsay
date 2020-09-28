const cowsay = require("cowsay");

const myInfos = () => {
    let name = 'Nass Smith';
    let campus  = 'Bordeaux';
    

console.log(cowsay.say({
	text : `Hi my name is ${name}, I'm studying on ${campus}'s campus.`,
	e : "oO",
	T : "U "
}));
};



module.exports = myInfos;