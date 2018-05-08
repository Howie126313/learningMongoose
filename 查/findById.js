var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    if (!err) {
        var schema = new mongoose.Schema({name: String, age: Number})
        var temp = mongoose.model('temp', schema)
        var aIDArr = []
        // temp.find(function(err, docs) {
        //     docs.forEach(function(item, index, arr) {
        //         aIDArr.push(item._id)
        //     })
        //     temp.findById(aIDArr[0],{ lean: true }, function(err, doc) {
        //         console.log(doc)
        //     })
        // })
        // temp.findOne({age: {$lte: 100}}, function(err, doc) {
        //     console.log(doc)
        // })
        // temp.find({$where:"this.name == 'pro'"}, function(err, docs) {
        //     console.log(docs)
        // })
        temp.find({$where: function() {
            return this.name != 'howie'
        }}, function(err, docs) {
            console.log(docs)
        })
    }
})