var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/insert", function(err) {
    if (!err) {
        var schema = new mongoose.Schema({age: Number, name: String})
        var temp = mongoose.model('temp', schema)
        // temp.updateMany({name: /h/}, {age: 18}, function(err, raw) {
        //     console.log(raw)
        // })
        // 如果需要相对复杂的操作可以使用 find + save
        temp.find({age: {$lt:20}}, function(err, docs) {
            docs.forEach(function(item, index, arr) {
                item.name += '_young'
                item.save()
            })
            console.log(docs)
        })
    }
})