var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/myproject", function(err) {
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
        var schema = new mongoose.Schema({ num:Number, name: String, size: String});
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ size: 'small' });
        doc1.save(function (err, doc) {
            console.log(doc)
        })
    }
});