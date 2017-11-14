var fs = require('fs')

var write = function (array){
    return new Promise(function (pRes,pRej) {
      fs.writeFile('data.txt',array,function(err){
        if(err){
          console.log(err)
        } else{
          console.log('done Promise')
          pRes()
        }
      })
    })
  }
  module.exports = write;