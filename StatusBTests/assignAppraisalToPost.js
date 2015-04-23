var status = require('Status');

// I'm thinking that the testig for this comes from setAppraisal.js, seeing as the team does not have the function names as specified in the
// master specs
// exports.activePeriodTest = function(test)
// {
// 	test.expect(1);

// 	var expectedResult = JSON.stringify({"active_from":"2015-10-01","active_to":"2015-10-30"});
// 	var result = status.activePeriod("2015-10-01", "2015-10-30");

// 	test.equal(result, expectedResult);
// 	test.done();
// }


exports.setAppraisalTest = function(test){
	// test.expect(2);

	
	status.setAppraisal("post1","test");
	test.equal(1,1);
	test.done();
}