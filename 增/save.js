var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/pro", function(err) {
    if(!err) {
        var schema = new mongoose.Schema({age: Number, name: String})
        var temp = mongoose.model('temp', schema)
        new temp({age:102, name:'save'}).save(function(err, doc) {
            console.log(doc)
        })
    }
})