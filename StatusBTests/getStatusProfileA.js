//var test = require('unit.js');
var status=require("status.js")

exports.getStatusForProfileTesta= function(test)
{
    test.expect(1);
    status.getStatusForProfile("u00000006",function(res){
        test.equal(res,0);
        test.done()//this is stupid
    });

}

export["Success"] = function(test){


}
