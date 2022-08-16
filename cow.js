const cow = require('cowsay');

module.exports.speak = (text) => cow.say({'text': text});