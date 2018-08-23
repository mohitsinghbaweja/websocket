'use strict';

var io = require('socket.io');
exports.SetIO = function(IO){
    io = IO;
}

exports.processRequest = function(req, res) {

    var messageResp = req.toString();
    console.log("Logging req");
    console.log(req);
    io.emit('new message', {
        username: "test",
        message: messageResp
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