var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    if (!err) {
        // 必填字段
        // var schema = new mongoose.Schema({age: {type:Number, required:true}, name: String})
        // 默认值
        // var schema = new mongoose.Schema({age: {type: Number, default: 18}, name: String})
        // 取值范围
        // var schema = new mongoose.Schema({age: {type: Number, min: 18, max:24}, name: String})
        // 匹配
        // var schema = new mongoose.Schema({age: Number, name: {type: String, match: /a/}})
        // 枚举 （不在枚举范围内的值，不会被保存）
        // var schema = new mongoose.Schema({age: Number, name: {type: String, enum: ['a', 'b', 'c']}})
        // validate 自定义条件
        var validateLength = function(arg) {
            if(arg.length > 4) {
                return true
            }
            return false
        }
        var schema = new mongoose.Schema({name: {type: String, validate: validateLength}, age: Number})
        var temp = mongoose.model('temp', schema)
        new temp({name: 'aaaaaaa'}).save(function(err, doc) {
            console.log(doc)
            // console.log(err.errors['name'].message)
        })
    }
})