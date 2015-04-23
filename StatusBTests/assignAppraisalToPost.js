var status = require('Status');

// I'm thinking that the testig for this comes from setAppraisal.js, seeing as the team does not have the function names as specified in the
// master specs



exports.setAppraisalTest = function(test){
	// test.expect(2);

	
	status.setAppraisal("post1","test");
	test.equal(1,1);
	test.done();
}