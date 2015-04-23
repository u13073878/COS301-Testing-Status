var status = require('Status');

exports.getStatusForProfileTest = function(test){

	test.expect(1);
	var result;
	status.getStatusForProfile("u00000006",function(res){
		result = res;
		console.log(res);
		test.equal(res,0);
		test.done();
	});
}