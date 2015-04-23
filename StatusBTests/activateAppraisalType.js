var status = require('Status');

/*
	Test for activateAppraisalType

	Created by: Daniel Christopher Alves Araujo
 */


/*
	test for activePeriod
 */ 
exports.activePeriodTest = function(test)
{
	test.expect(1);

	var expectedResult = JSON.stringify({"active_from":"2015-10-01","active_to":"2015-10-30"});
	var result = status.activePeriod("2015-10-01", "2015-10-30");

	test.equal(result, expectedResult);
	test.done();
}

/*
	test for setAppraisal
 */
exports.setAppraisalTest = function(test)
{
	test.expect(1);

	var post_id = "0";
	var appraisalName = "Test";

	status.setAppraisal(post_id, appraisalName); //The function does not return any value

	test.done();
}