var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

router.post('/hi', function(req, res, next) {
    var array = req.body;
    var url = 'mongodb://nykolaychmut:Nnukoliaa250011$@cluster0-shard-00-00-iltqa.mongodb.net:27017,cluster0-shard-00-01-iltqa.mongodb.net:27017,cluster0-shard-00-02-iltqa.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
MongoClient.connect(url, function(err, db) {
   var data = db.collection('db1');
//    data.insert({
//        "name": array.name,
//        "age": array.password
//    },function (err) {
//        console.log(err)
//        db.close();
//    })
   
//є Сособ пошуку виглядає як data.find({ЯКЩО ВКАЗАТИ ТАК ТО ВИДАСТЬ ВСЕ ШО Є}).toArray(function (err,data){})
// ПОШУК ПО ПОЛЮ { field: { $exists: <boolean> } } МОЖЕ БУТЬ TRUE / FALSE
//db.inventory.find( { qty: { $exists: true, $nin: [ 5, 15 ] } } )
//  data.find({SHOSS:{type: number}}) поверне цей тип з номбером

// gt gte lt lte  $and:[і це, і інше]
data.find({}).toArray(function (err,data){
    console.log(data)
})

  });

    res.send({'yes':'yes'});
  });



module.exports = router;