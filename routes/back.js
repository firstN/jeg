var express = require('express');
var router = express.Router();
var fs = require('fs')
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
    res.send('what are you name');
  });
//   router.post('*', function(req, res, next) {
   
 
// let arraya =req.body;

//     if(arraya.name === "Nikolay Chmut" ){
//       console.log('Yes')
//       next()
      
//     } else {
//       console.log('min')
//       res.send([4])
//     }

//   });
  

router.get('/hello', function(req, res, next) {
  res.send(req.originalUrl);
});
router.get('/hi', function(req, res, next) {
    res.redirect('/back/hello');
  });
  router.get('/IV!*', function(req, res, next) {
    res.send(req.path);
  });
  router.post('/hello', function(req, res, next) {
    var array = JSON.stringify(req.body);
    //fs.stat Провіряє на наявність фйла !
fs.stat('data.txt', function(err,done){
  if( err ){
    //fs.writeFile  Створює тхт і записує але кожного разу записує нову запись(перезаписує)
    fs.writeFile('data.txt',array,function(err){
      if(err){
        console.log(err)
      } else{
        console.log('done')
      }
    })
  } 
  if(done) {
   // fs.appendFile для добавлення в тхт інших записей може створювати файл тхт але краще використовувати  fs.writeFile він швидший
    fs.appendFile('data.txt', ';' + array,function(err){
      console.log('done!')
    })
  }
})

  date={
    "name":true,
    "password": false
  }
  res.send(JSON.stringify('yes'))
  });

//NEW PROMISE гарантує послідовне виконання асинхроного коду) його потрібно використовувать
  router.post('/hello/promise', function(req, res, next) {
    var array = JSON.stringify(req.body);
    var data_a = [];
var stat = require('./Promise/_hello_promise/state.js')

var write = require('./Promise/_hello_promise/write.js')

var append =  require('./Promise/_hello_promise/append.js')


  var read =  function (params){
    return new Promise(function (pRes,pRej) {
      fs.readFile('data.txt',function(err,data){
        var arry = data.toString('utf-8')
       
          for( var i of arry.split(';')){
            data_a.push(JSON.parse(i))
          }
        
          res.send(JSON.stringify(data_a))
            })
    })
  }
  
  stat(new Date()).then(
    pRes => write(array), pRej => append(array)
  ).then(
    pRes => read()
  )

  })
  




  router.post('/hello/my', function(req, res, next) {
//     console.log('aaaaaaaaaaaaaaaaa')

//     //fs.readFile -  Для читання фала тхт із сервера !
//     fs.readFile('data.txt',function(err,data){
// var arry = data.toString('utf-8')
// var data_a = [];
// for( var i of arry.split(';')){
//   data_a.push(JSON.parse(i))
// }
var array = req.body


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nykolaychmut@gmail.com',
    pass: 'Nnukoliaa250011$'
  }
});

var mailOptions = {
  from: 'nykolaychmut@gmail.com',
  to: 'chmutkola@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<p>'+array.name+ '<br>'+array.password+'</p> '
 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    console.log('message set')
  }
});
res.send(JSON.stringify('data_a'))
    })
   
  
module.exports = router;
