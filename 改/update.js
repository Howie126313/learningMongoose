var mongoose = require('mongoose')

// update 中回调函数不可省略（可以使用.exec()代替）
mongoose.connect("mongodb://localhost:27017/insert", function(err) {
    if (!err) {
        var schma = new mongoose.Schema({age: Number, name: String})
        var temp = mongoose.model('temp', schma)
        // 修改单个
        // temp.update({age: {$gte: 1000}}, {age: 18}, function(err, raw) {
        //     console.log(raw)
        // })
        // 修改多个
        // temp.update({age: {$gt: 18}}, {age: 20}, {multi: true}, function(err, raw) {
        //     console.log(raw)
        // })
        // 设置数据不满足时创建
        temp.update({age: 100}, {name: 'handsome'}, {upsert: true}, function(err, raw) {
            console.log(raw)
        })
    }
})