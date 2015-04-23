statusCalculatorResult = function(callback) {
    var profileAssessor;
};

statusCalculatorRequest=function(callback)
{
    var profileAssessor;
};

var test=require("unit.js");

exports.statusCalculator= function(test)
{
    test.expect(1);

    var expected=statusCalculatorRequest;
    var result=statusCalculatorResult;



    test.equal(expected.profileAssessor,result.profileAssessor);
    test.done();
}
