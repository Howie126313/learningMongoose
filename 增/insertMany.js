var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    if (!err) {
        var schema = new mongoose.Schema({age:Number, name:String})
        var temp = mongoose.model('temp', schema)
        temp.insertMany([
            {name: 'why', age:18}, 
            {name: 'sjy', age:18}, 
            {name: 'lyj', age:18}, 
            {name: 'll', age:18}, 
        ], function(err, docs) {
                console.log(docs)
        })
    }
})