var mongoose = require('mongoose')

// remove 的回调不可省略 （可使用 .exec 代替）
mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    if (!err) {
        var schema = new mongoose.Schema({age: Number, name: String})
        var temp = mongoose.model('temp', schema)
        // temp.remove({name: /hand/}).exec()
        // temp.find({name: /_young/}, function(err, docs) {
        //     docs.forEach(function(item, index, arr) {
        //         item.remove(function(err, docs) {
        //             console.log(docs)
        //         })
        //     })
        // })
        // 删除第一个年龄小于20
        temp.findOneAndRemove({age: {$lt: 20}}, function(err, docs) {
            console.log(docs)
        })
    }
})