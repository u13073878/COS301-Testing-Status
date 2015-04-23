
var status = require('Status');

exports.getStatusForProfileTest1 = function(test){
	test.expect(1);
	status.getStatusForProfile("u00000006",function(res){
		test.equal(res,0);
		test.done()
	});
}

exports.getStatusForProfileTest2 = function(test){
	test.expect(1);
	status.getStatusForProfile("u00000001",function(res){
		test.equal(res,4);
		test.done();
	});
}

exports.getStatusForProfileTest3 = function(test){
	test.expect(1);
	status.getStatusForProfile("u00000002",function(res){
		test.equal(res,8);
		test.done();
	});
}

exports.getStatusForProfileTest4 = function(test){
	test.expect(1);
	status.getStatusForProfile("u00000003",function(res){
		test.equal(res,0);
		test.done();
	});
}

exports.getStatusForProfileTest5 = function(test){
	test.expect(1);
	status.getStatusForProfile("u00000004",function(res){
		test.equal(res,7);
		test.done();
	});
}

exports.getStatusForProfileTest6 = function(test){
	test.expect(1);
	status.getStatusForProfile("u00000005",function(res){
		test.equal(res,2);
		test.done();
	});
}
	
