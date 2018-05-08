var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    if (!err) {
        var schema = new mongoose.Schema({age: Number, name: String})
        var temp = mongoose.model('temp', schema)
        // temp.updateOne({name: /howie/}, {age: 24}, function(err, raw) {
        //     console.log(raw)
        // })
        // 如果操作复杂可使用 findOne + save
        temp.findOne({name: /howie/}, function(err, docs) {
            docs.name = 'Lakers_howie'
            docs.save()
            console.log(docs)            
        })
    }
})