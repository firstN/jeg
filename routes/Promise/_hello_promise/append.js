var fs = require('fs')

var append =  function (array){
    return new Promise(function (pRes,pRej) {
      fs.appendFile('data.txt', ';' + array,function(err){
        console.log('done! Promise')
        pRes()
      })
    })
    }
    module.exports =append;