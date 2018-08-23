'use strict';

var io = require('socket.io');
exports.SetIO = function(IO){
    io = IO;
}

exports.processRequest = function(req, res) {

//      {"id":"0b7605ee-f204-4782-a33b-d4053e7138bf","timestamp":"2018-08-23T08:51:24.526Z","lang":"en","result":{"source":"agent","resolvedQuery":"call api","speech":"","action":"","actionIncomplete":false,"parameters":{},"contexts":[],"metadata":{"intentId":"7020af80-ebb7-4f7e-b004-e058faf8f91a","webhookUsed":"true","webhookForSlotFillingUsed":"false","isFallbackIntent":"false","intentName":"CallAPI"},"fulfillment":{"speech":"","messages":[{"type":0,"speech":""}]},"score":1.0},"status":{"code":200,"errorType":"success"},"sessionId":"8a74b6f6-23e3-32a0-ed9f-68698e401a8b"}


    console.log("Logging req");
   
    io.emit('new message', {
        username: "test",
        message: req.body.result.resolvedQuery.toString()
      });


    return res.json({
        speech: 'integration point is working',
        displayText: 'integration point is working',
        source: 'test integration'
    });

    // if (req.body.result.action == "schedule") {
    //     getTeamSchedule(req,res)
    //   }
    //   else if (req.body.result.action == "tell.about")
    //   {
    //       getTeamInfo(req,res)
    //   }
    };