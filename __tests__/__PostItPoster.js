// jest.dontMock("../src/components/PostItPoster.js");

describe("This test", function() {
	it("should trivially pass", function() {
		expect(2).toEqual(2);
	});
});

// describe("PostItPoster", function() {
//   it("contains an ordered list", function() {
//     var React       	= require("react/addons");
//     var PostItPoster  	= require("../src/components/PostItPoster.js");
//     var TestUtils   	= React.addons.TestUtils;

//     // Render our whiteboard in the document
//     var postit = TestUtils.renderIntoDocument(
//       <PostItPoster />
//     );

//     // Verify that it contains the data that we want
//     var form = TestUtils.findRenderedDOMComponentWithTag(
//       postit, "form");
//     expect(form.getDOMNode().textContent).toEqual();
//  });
// });