var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    if (!err) {
        var schema = new mongoose.Schema({age: Number, name: String})
        var temp = mongoose.model('temp', schema)
        // 从小到大排序
        // temp.find().sort('age').exec(function(err, docs) {
        //     console.log(docs)
        // })
        // 从大到小排序
        // temp.find().sort('-age').exec(function(err, docs) {
        //     console.log(docs)
        // })
        // 跳过两个
        // temp.find().skip(2).exec(function(err, docs) {
        //     console.log(docs)
        // })
        // 显示两个
        // temp.find().limit(2).exec(function(err, docs) {
        //     console.log(docs)
        // })
        // 选择显示
        // temp.find().select('name age -_id').exec(function(err, docs) {
        //     console.log(docs)
        // })
        // 文档数量
        // temp.find().count(function(err, count) {
        //     console.log(count)
        // })
        // 返回文档中某个值(重复值不会显示)
        temp.find().distinct('age', function(err, distinct) {
            console.log(distinct)
        })
    }
})