
require('../')({
  host:'localhost',
  user:'alejandromg',
  password:'34141231',
  path:'/env/audit',
  emitter: {
    maxMemory: 25, //25mb,
    sizeSpace: 25,
    checkSpace: true,
    interval: 5000
  }
})

require('http').createServer(function(req,res){
  res.end('pl')
}).listen(9011)

/*
 
    app.code




 */