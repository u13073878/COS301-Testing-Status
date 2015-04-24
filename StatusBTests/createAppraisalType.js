var status = require('Status');

/*
 Test for createAppraisalType

 Created by: Semaka Malapane
 */

/*
 test for createAppraisal
 */
exports.createAppraisalTest = function(test)
{
    test.expect(1);
    var expected = JSON.stringify({"name":"Funny","description":"humorous post"});
    var result = status.createAppraisal("Funny","humorous post");

    test.equal(result, expected);
    test.done();
}

/*
 test for createAppraisal
 */
exports.addAppraisalLevelTest = function(test)
{
    test.expect(1);
    var expected = JSON.stringify({rating: 1, rating_name: "Funny"});
    var result = status.addAppraisalLevel(1,"Funny");

    test.equal(result, expected);
    test.done();
}