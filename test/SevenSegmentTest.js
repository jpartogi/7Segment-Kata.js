var Calculator = require('../app/SevenSegment');
var chai = require('chai');
var expect = chai.expect;

describe('SevenSegment', function(){
	
	it("should convert zero", function(){
		var expected = " _\n| |\n|_|";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(0);
		expect(result).to.equal(expected);
	});

	it("should convert one", function(){
		var expected = "\n  |\n  |";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(1);
		expect(result).to.equal(expected);
	});

	it("should convert two", function(){
		var expected = " _\n _|\n|_";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(2);
		expect(result).to.equal(expected);
	});

	it("should convert three", function(){
		var expected = " _\n _|\n _|";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(3);
		expect(result).to.equal(expected);
	});

	it("should convert four", function(){
		var expected = "\n|_|\n  |";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(4);
		expect(result).to.equal(expected);
	});

	it("should convert five", function(){
		var expected = " _\n|_ \n _|";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(5);
		expect(result).to.equal(expected);
	});

	it("should convert six", function(){
		var expected = " _\n|_ \n|_|";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(6);
		expect(result).to.equal(expected);
	});

	it("should convert seven", function(){
		var expected = " _\n  |\n  |";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(7);
		expect(result).to.equal(expected);
	});

	it("should convert eight", function(){
		var expected = " _\n|_|\n|_|";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(8);
		expect(result).to.equal(expected);
	});

	it("should convert nine", function(){
		var expected = " _\n|_|\n _|";
		console.log(expected);
		var ss = new SevenSegment();
		var result = ss.convert(9);
		expect(result).to.equal(expected);
	});
	
});