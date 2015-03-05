jest.dontMock("../src/components/PostItPoster.js");

describe("PostItPoster", function() {
  it("contains an ordered list", function() {
    var React       	= require("react/addons");
    var PostItPoster  	= require("../src/components/PostItPoster.js");
    var TestUtils   	= React.addons.TestUtils;

    // Render our whiteboard in the document
    var postit = TestUtils.renderIntoDocument(
      <PostItPoster />
    );

    // Verify that its initial text content is empty
    var form = TestUtils.findRenderedDOMComponentWithTag(
      postit, "form");
    expect(postit.refs.commentForm.getDOMNode().textContent).toEqual("");
 	
 	// Assign its text content a new value
	postit.refs.commentForm.getDOMNode().textContent = "hello";
	expect(postit.refs.commentForm.getDOMNode().textContent).toEqual("hello");

	// Simulate a click on the input button and expect the text content to empty
 	TestUtils.Simulate.submit(form);
 	expect(postit.refs.commentForm.getDOMNode().textContent).toEqual("");


 });
});