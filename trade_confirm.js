ctp = require('bindings')('shifctp');
ctp.settings({ log: true});
var trader = ctp.createTrader();

trader.on("connect",function(result){
    console.log("on connected");
    trader.reqUserLogin('','','',function(result,iRequestID){
        console.log('login return val is '+result);
    });

});

trader.on('rspUserLogin',function(requestId, isLast, field, info){
    
    console.log(JSON.stringify(field));
    console.log(info);
});

trader.on('rspInfoconfirm',function(requestId, isLast, field, info){

    console.log()

});

trader.connect(',undefined,0,1,function(result){
    console.log('connect return val is '+result);
});

console.log('continute');
