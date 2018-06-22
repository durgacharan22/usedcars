var mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://charan:charan@cluster0-x95nk.mongodb.net/usedcars?retryWrites=true')
 .then(() => {
 console.log("DB connected")
 }, err => {
 console.log("DB error")
 }
 );