jest.dontMock("../sum");

describe("sum", function() {
	it("adds 2 + 3 to equal 5", function() {
		var sum = require("../sum");
		expect(sum(2,3)).toBe(5);
	})
});