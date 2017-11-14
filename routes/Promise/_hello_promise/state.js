var fs = require('fs')

var stat = function (params) {
    return new Promise(function (pRes,pRej) {
      fs.stat('data.txt', function(err,done){
        if(err){
          pRes()
        } else {
          pRej()
        }
      })
    })
  }
  module.exports = stat;