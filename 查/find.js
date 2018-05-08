var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    var schema = new mongoose.Schema({age: Number, name: String})
    var temp = mongoose.model('temp', schema)
    // temp.find({age: {$gte: 1000}}, function(err, docs) {
    //     console.log(docs)
    // })
    // 只输出 name
    // temp.find({age: {$gte: 1000}},'name', function(err, docs) {
    //     console.log(docs)
    // })
    // 只输出 name 去掉默认显示的 id
    // temp.find({age: {$gte: 1000}},{name:1, _id:0}, function(err, docs) {
    //     console.log(docs)
    // })
    // 跳过前两条数据 !!!!注意 skip 前空格
    temp.find({age: {$gte: 101}}, null, { skip: 2 }, function(err, res) {
        console.log(res)
    })
})