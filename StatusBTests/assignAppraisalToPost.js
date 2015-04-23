
var status = require('Status');

exports.setAppraisalTest = function(test)
{
	test.expect(1);

	status.setAppraisal("post1", "Education");
	
	status.getPostAppraisal("post1",function(res){
		console.log(res);
		test.equal(res,"Education");
		test.done();
	});
}