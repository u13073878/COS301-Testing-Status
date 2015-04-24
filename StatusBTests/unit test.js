/**
 * Created by herb-adventure on 4/24/2015.
 */


require("nodeunit");


var AA = require("../DatabaseStuff");
exports ["Testing for status calculator" ] = function(test){
    AA.getStatusForProfile(function(err,user){
        test.expect(1);
        test.equals(err,false);
        test.done();
    })

    AA.setStatusCalculator(function(setStatusCalculatorRequest){
        var result = new statusCalculatorResult();// This is what we will return
        result.ProfileAssessor = setStatusCalculatorRequest.ProfileAssessor;//setting the profile assessor to whatever has been passed
        test.expect(1);
        test.equals(setStatusCalculatorRequest,result);
        test.done();
    })
}