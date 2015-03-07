jest.dontMock("../src/components/PostItForm.js")

describe("PostItForm", function() {
    
    var React = require("react/addons");
    var PostItForm = require("../src/components/PostItForm.js");
    var TestUtils = React.addons.TestUtils;
    
    it("should render into the page", function() {
        
        // Render the component into the page
        var postit = TestUtils.renderIntoDocument(
        <PostItForm commentAdd={function(x) {return false;}}/>
        );
            
        // Check that it renders a form
        var postitform = TestUtils.findRenderedDOMComponentWithTag(postit, "form");
        
         // Check that it renders a text input box
        var postitinput = TestUtils.findRenderedDOMComponentWithClass(postit, "postItText");
        
        // Check that it renders a submit box
        var postitsubmit = TestUtils.findRenderedDOMComponentWithClass(postit, "postItSubmit");

        // Check that the rendered text input box is empty
        expect(postit.refs.postitform.getDOMNode().value).toEqual(null);
        
        // On clicking the submit button, the text field is emptied
            // Changing the textContent of text field
        postit.refs.postitform.getDOMNode().value = "asfasd";

        TestUtils.Simulate.submit(postitform.getDOMNode());

        expect(postit.refs.postitform.getDOMNode().value).toEqual("");
    })
});



