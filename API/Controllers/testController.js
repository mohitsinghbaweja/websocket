'use strict';

exports.processRequest = function(req, res) {

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