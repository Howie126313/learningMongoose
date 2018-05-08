var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/create', function(err) {
    if (!err) {
        var schema = new mongoose.Schema({age: Number, name: String})
        var temp = mongoose.model('temp', schema)
        temp.create({name: 'wanghaoyu', age: 22},{name: 'll', age: 11}, function(err, doc1, doc2) {
            console.log(doc1)
            console.log(doc2)
        })
    }
})