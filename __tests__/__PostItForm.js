jest.dontMock("../src/components/PostItForm.js")

describe("PostItForm", function() {
    
    var React = require("react/addons");
    var PostItForm = require("../src/components/PostItForm.js");
    var TestUtils = React.addons.TestUtils;
    
    it("should render into the page", function() {
        
        // Render the component into the page
        var postit = TestUtils.renderIntoDocument(
        <PostItForm />
        );
            
        // Check that it renders a form
        var postitform = TestUtils.findRenderedDOMComponentWithTag(postit, "form");
        
         // Check that it renders a text input box
        var postitinput = TestUtils.findRenderedDOMComponentWithClass(postit, "postItText");
        
        // Check that it renders a submit box
        expect(TestUtils.findRenderedDOMComponentWithClass(postit, "postItSubmit")).toBeTruthy();
        
        
        
    })
})